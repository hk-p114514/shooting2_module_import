import { enemyMaster, player } from '../init/variables';
import { Character } from './Character';
import { checkHit } from '../functions/hit';
import { isAttacked } from '../functions/isAttacked';
import { correctionToCalcValue } from '../functions/correctionToCalcValue';

class Enemy extends Character {
	enemyNumber: number;
	r: number;
	maxHp: number;
	hp: number;
	score: number;
	flag: boolean | number;
	direction: number;
	directionGap: number;
	reload: number;
	moveFunction: Function;
	constructor(id: number, x: number, y: number, vx: number, vy: number) {
		super(0, x, y, vx, vy);
		this.enemyNumber = enemyMaster[id].enemyNumber;
		this.r = enemyMaster[id].r;
		this.maxHp = enemyMaster[id].hp;
		this.score = enemyMaster[id].score;
		this.moveFunction = enemyMaster[id].moveFunction;
		this.hp = this.maxHp;
		this.flag = false; //trueになると攻撃する

		//弾の発射角度
		this.direction = 90; //右側が０度なので、下方向は９０度となる
		this.directionGap = 10;

		//リロード時間
		this.reload = 0;
	}

	update() {
		super.update();

		if (this.reload) {
			this.reload--;
		}

		//個別のアップデート
		this.moveFunction(this);

		//当たり判定
		if (
			!player.stun &&
			checkHit(this.x, this.y, this.r, player.x, player.y, player.r)
		) {
			isAttacked();
		}
	}

	isAttackable = (
		target: number,
		range: number,
		x: boolean = true,
	): boolean => {
		let own = this.y;
		if (x) {
			own = this.x;
		}

		const distance = Math.abs(own - target);
		range = correctionToCalcValue(range);

		const result: boolean = range >= distance ? true : false;

		return result;
	};
}

export { Enemy };
