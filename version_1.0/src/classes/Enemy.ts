import { enemyMaster, player } from '../init/variables';
import { Character } from './Character';
import { checkHit } from '../functions/hit';
import { enemyMovePink } from '../functions/enemyFunctions/enemyMovePink/enemyMovePink';
import { enemyMoveYellow } from '../functions/enemyFunctions/enemyMoveYellow/enemyMoveYellow';
import { enemyMoveBoss } from '../functions/enemyFunctions/enemyMoveBoss/enemyMoveBoss';
import { enemyMoveYellowChild } from '../functions/enemyFunctions/enemyMoveBoss/enemyMoveYellowChild';
import { isAttacked } from '../functions/isAttacked';

class Enemy extends Character {
	eNum: number;
	r: number;
	maxHp: number;
	hp: number;
	score: number;
	flag: boolean | number;
	direction: number;
	directionGap: number;
	reload: number;
	constructor(enemy: number, x: number, y: number, vx: number, vy: number) {
		super(0, x, y, vx, vy);
		this.eNum = enemyMaster[enemy].enemyNumber;
		this.r = enemyMaster[enemy].r;
		this.maxHp = enemyMaster[enemy].hp;
		this.hp = this.maxHp;
		this.score = enemyMaster[enemy].score;
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
		enemyFunctions[this.eNum](this);

		//当たり判定
		if (
			!player.stun &&
			checkHit(this.x, this.y, this.r, player.x, player.y, player.r)
		) {
			isAttacked();
		}
	}
}

let enemyFunctions = [
	enemyMovePink,
	enemyMoveYellow,
	enemyMoveBoss,
	enemyMoveYellowChild,
];

export { Enemy };
