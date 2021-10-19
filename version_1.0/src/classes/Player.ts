import { bullet, field_h, field_w, key, player, vars } from '../init/variables';
import { drawSprite } from '../functions/drawSprite';
import { makeBullet } from './instance/makeBullet';
import { correctionToCalcValue } from '../functions/correctionToCalcValue';
import { makeSoundEffect } from '../functions/makeSoundEffect';

const onePixel = 256;

class Player {
	x: number;
	y: number;
	vx: number;
	vy: number;
	vectorMax: number = 5;
	brake: number = 250;
	r: number;
	damage: number;
	speed: number;
	anime: number;
	reload: number;
	magazine: number;
	stun: number;
	count: number;
	maxHp: number;
	hp: number;
	power: number;
	special: boolean;
	specialTime: number;
	specialMagazine: number;
	specialMaxTime: number;
	attackSoundSrc: HTMLAudioElement = new Audio('musics/shot.mp3');
	isAttackedSrc: HTMLAudioElement = new Audio('musics/playerIsAttacked.mp3');
	constructor() {
		this.x = (field_w / 2) << 8;
		this.y = (field_h - 50) << 8;
		this.vx = 0;
		this.vy = 0;
		this.r = 5;
		this.damage = 0; // ダメージエフェクトを出すタイミングを知らせる
		this.speed = onePixel; //256で１フレームに１ピクセル動く
		this.anime = 0;
		this.reload = 0;
		this.magazine = 0;
		this.stun = 0;
		this.count = 0;
		this.maxHp = 5;
		//自機HP
		this.hp = 5;

		//自機の攻撃力
		this.power = 1;

		//特殊攻撃のon off
		this.special = false;

		//特殊攻撃の効果時間
		this.specialTime = 0;

		//特殊攻撃の回数上限
		this.specialMagazine = 2;

		//特殊攻撃の持続時間 (15秒)
		this.specialMaxTime = 60 * 15;
	}

	//描画
	draw = (): void => {
		if (this.stun && this.count & 1) {
			return;
		}
		const playerSpriteCenter = 2;
		drawSprite(
			playerSpriteCenter + (this.anime >> playerSpriteCenter),
			this.x,
			this.y,
		);

		const injection = 9;
		drawSprite(
			injection + (this.anime >> playerSpriteCenter),
			this.x,
			this.y + (24 << 8),
		);
	};

	//自機の移動
	update = (): void => {
		// キャラクターの生存フレームを数える
		this.count++;

		// 各値をへらす
		this.subtractionOfPlayerValues();

		// キー操作を伴う処理
		this.keyOperation();

		this.slowSpeed();

		//範囲チェック
		this.limitRangeOfMovement();

		// console.log(`vx : ${this.vx}\nvy : ${this.vy}`);
	};

	private keyOperation = (): void => {
		if (vars.afterPushedSpace) {
			this.playerAttack();
			this.playerMove();
			this.useSpecialAttack();
		} else {
			this.gameStart();
		}
	};

	private playerMove = (): void => {
		let isPushed: boolean = false;
		let { vx, vy } = { vx: this.vx, vy: this.vy };
		const speed = this.speed;

		// 左
		if (key.ArrowLeft) {
			vx -= speed;
			isPushed = true;
			// 自機が左に進んでいたら
			this.changeAnime(-8, -1, '>');
		}

		// 右
		if (key.ArrowRight) {
			vx += speed;
			isPushed = true;
			// 自機が右に進んでいたら
			this.changeAnime(8, 1, '<');
		}

		// 上
		if (key.ArrowUp) {
			vy -= speed;
			isPushed = true;
		}

		// 下
		if (key.ArrowDown) {
			vy += speed;
			isPushed = true;
		}

		if (!isPushed) {
			this.unPushedKey();
		} else {
			if (Math.abs(vx) <= this.vectorMax * onePixel) {
				this.vx = vx;
			}

			if (Math.abs(vy) <= this.vectorMax * onePixel) {
				this.vy = vy;
			}
		}
	};

	private airResistance = (): void => {
		const resistance = 10;
		this.vx = this.calcResistance(resistance, this.vx);
		this.vy = this.calcResistance(resistance, this.vy);
	};

	private slowSpeed = (): void => {
		if (key.shift) {
			/*
				シフトキーを押していたら、
				_速度を遅くする
				_ベクトル量を0に戻す
			*/
			let slowSpeedX: number = this.vx ? onePixel : 0;
			let slowSpeedY: number = this.vy ? onePixel : 0;
			if (this.vx < 0) {
				slowSpeedX = -slowSpeedX;
			}
			if (this.vy < 0) {
				slowSpeedY = -slowSpeedY;
			}
			this.x += slowSpeedX;
			this.y += slowSpeedY;
			// console.log('SHIFT');
			this.vx = 0;
			this.vy = 0;
		} else {
			this.x += this.vx;
			this.y += this.vy;
		}
	};

	/***********************************************************************/
	//                                SYSTEMS                              //
	/***********************************************************************/

	private calcResistance = (resistance: number, vector: number): number => {
		if (Math.abs(vector) >= resistance) {
			if (vector > 0) {
				vector -= resistance;
			} else if (vector < 0) {
				vector += resistance;
			}
		} else {
			vector = 0;
		}

		return vector;
	};

	private useSpecialAttack = (): void => {
		if (key.special && !this.special && this.specialMagazine) {
			//特殊攻撃（広範囲弾）は１５秒まで
			this.special = true;
			this.specialTime = this.specialMaxTime;
			this.specialMagazine--;
		}
	};

	private playerAttack = (): void => {
		// space
		const bulletSpeed = -2000;
		if (key.space && this.reload === 0) {
			// 弾の発射
			bullet.push(makeBullet(this.x + (4 << 8), this.y, 0, bulletSpeed));
			bullet.push(makeBullet(this.x - (4 << 8), this.y, 0, bulletSpeed));
			if (this.special) {
				//斜めに発射
				bullet.push(makeBullet(this.x, this.y, 500, bulletSpeed + 100));
				bullet.push(makeBullet(this.x, this.y, -500, bulletSpeed + 100));
				bullet.push(makeBullet(this.x, this.y, 200, bulletSpeed));
				bullet.push(makeBullet(this.x, this.y, -200, bulletSpeed));
			}

			// 発射時の効果音を出す
			this.attackSound();

			//60で約１秒間に一回発射できる
			this.reload = 5;
			this.magazine++;
			if (this.magazine >= 4) {
				this.reload = 20;
				this.magazine = 0;
			}
		}
	};

	public attackSound = (): void => {
		makeSoundEffect(this.attackSoundSrc);
	};

	public isAttackedSound = (): void => {
		makeSoundEffect(this.isAttackedSrc);
	};

	private subtractionOfPlayerValues = (): void => {
		if (this.specialTime) {
			this.specialTime--;
		} else {
			this.special = false;
		}

		if (this.damage) {
			// ダメージエフェクトを出す時間（カウント）をへらしていく
			this.damage--;
		}

		if (this.stun) {
			this.stun--;
		}

		if (this.reload > 0) {
			this.reload--;
		}
	};

	private unPushedKey = (): void => {
		// プレイヤーのアニメーション変更
		if (this.anime > 0) {
			this.anime--;
		} else if (this.anime < 0) {
			this.anime++;
		}

		// キーを押していないときは、ベクトル量を0に近付ける
		this.airResistance();
	};

	private changeAnime = (
		border: number,
		change: number,
		unequalSign: '>' | '<',
	): void => {
		if (this.anime > border && unequalSign === '>') {
			this.anime += change;
		} else if (this.anime < border && unequalSign === '<') {
			this.anime += change;
		}
	};

	// 各種値との比較関数
	// playerの持つ値のほうが大きかった時、trueを返す
	compareValues = (target: 'x' | 'y' | 'r', value: number): boolean => {
		let playerValue: number = 0;
		let result: boolean = false;
		playerValue = this[target];

		if (playerValue > value) {
			result = true;
		}

		return result;
	};

	// 移動範囲の判定
	private limitRangeOfMovement = (): void => {
		const fw = correctionToCalcValue(field_w);
		const fh = correctionToCalcValue(field_h);
		if (this.x <= 1) {
			this.x = 20;
		}

		if (this.x >= fw) {
			this.x = fw - 1;
		}

		if (this.y < 0) {
			this.y = 0;
		}

		if (this.y >= fh - 1) {
			this.y = fh - 1;
		}
	};

	private gameStart = (): void => {
		if (key.space && !vars.afterPushedSpace) {
			// スペース
			//ゲームをスタートする
			vars.afterPushedSpace = true;
			const intervalId = setInterval(() => {
				vars.gameStartCount -= 1;
				if (vars.gameStartCount === 0) {
					clearInterval(intervalId);
				}
			}, 1000);
		}
	};
}

export { Player };
