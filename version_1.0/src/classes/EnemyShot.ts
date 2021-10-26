import { Character } from './Character';
import { vars, player } from '../init/variables';
import { checkHit } from '../functions/checkHit';
import { isAttacked } from '../functions/isAttacked';
import { Vector } from './Vector';
import { secToCount } from '../functions/secToCount';

class EnemyShot extends Character {
	r: number;
	delay: number;
	moveWaitSec: number;
	isMove: boolean = false;
	moveAngle: number;
	addMagnitude: number = 0;
	snumOriginal: number;
	constructor(
		snum: number,
		x: number,
		y: number,
		vx: number,
		vy: number,
		delay: number = 0,
		moveCount: number = 0,
		moveAngle: number = 30,
		addMagnitude: number = 0,
	) {
		super(snum, x, y, vx, vy);
		this.snumOriginal = snum;
		this.r = 4;
		if (delay === undefined) {
			this.delay = 0;
		} else {
			// 遅延時間を秒に直す
			this.delay = secToCount(delay);
		}
		// 移動までの時間を秒からカウントに変換する
		this.moveWaitSec = secToCount(moveCount);

		// 軌道を動かす角度
		this.moveAngle = moveAngle;

		// 軌道変化時に変えるベクトル量
		this.addMagnitude = addMagnitude;
	}

	draw = () => {
		super.draw();
	};

	update = () => {
		if (this.delay) {
			this.delay--;
			return;
		}
		super.update();
		if (
			// プレイヤーに弾が当たっている
			checkHit(this.x, this.y, this.r, player.x, player.y, player.r)
		) {
			// ゲームが終了していない
			if (!(vars.gameOver || vars.gameClear)) {
				// 効果音を出す
				player.isAttackedSound();
				isAttacked();
			}
		}

		// 約0.1秒毎にスプライトを変更する
		if (this.count % secToCount(0.1) === 0) {
			this.snum =
				this.snum === this.snumOriginal ? this.snum + 1 : this.snumOriginal;
		}

		if (this.moveWaitSec && this.count % this.moveWaitSec === 0 && !this.isMove) {
			// moveCountが0でなかったら
			this.rotation(this.moveAngle, this.addMagnitude);
			this.isMove = true;
		}
	};

	rotation = (angle: number, addMagnitude: number = 0) => {
		const vector: Vector = new Vector(this.vx, this.vy);
		vector.varyingAngle(angle, addMagnitude);
		this.vx = vector.vx;
		this.vy = vector.vy;
	};
}

export { EnemyShot };
