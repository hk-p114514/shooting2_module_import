import { Character } from './Character';
import { vars, player } from '../init/variables';
import { checkHit } from '../functions/hit';
import { isAttacked } from '../functions/isAttacked';
import { Vector } from './Vector';

class EnemyShot extends Character {
	r: number;
	delay: number;
	moveWaitSec: number;
	isMove: boolean = false;
	constructor(
		snum: number,
		x: number,
		y: number,
		vx: number,
		vy: number,
		delay: number,
		moveCount: number = 0,
	) {
		super(snum, x, y, vx, vy);
		this.r = 4;
		if (delay === undefined) {
			this.delay = 0;
		} else {
			// 遅延時間を秒に直す
			this.delay = delay * 60;
		}
		// 移動までの時間を秒に変換する
		this.moveWaitSec = moveCount * 60;
	}

	update = () => {
		if (this.delay) {
			this.delay--;
			return;
		}
		super.update();
		if (
			// プレイヤーがスタン状態でない
			!player.stun &&
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

		this.snum = 14 + ((this.count >> 3) & 1);

		if (
			this.moveWaitSec &&
			this.count % this.moveWaitSec === 0 &&
			!this.isMove
		) {
			// moveCountが0でなかったら
			this.rotation(30);
			this.isMove = true;
		}
	};

	rotation = (angle: number) => {
		const vector: Vector = new Vector(this.vx, this.vy);
		vector.varyingAngle(angle);
		this.vx = vector.vx;
		this.vy = vector.vy;
	};
}

export { EnemyShot };
