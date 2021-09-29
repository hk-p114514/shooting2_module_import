import { Character } from './Character';
import { vars, player } from '../init/variables';
import { checkHit } from '../functions/hit';
import { isAttacked } from '../functions/isAttacked';
import { Vector } from './Vector';
import { rand } from '../functions/random';

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
		moveWaitSec: number = 0,
	) {
		super(snum, x, y, vx, vy);
		this.r = 4;
		if (delay === undefined) {
			this.delay = 0;
		} else {
			// 遅延時間を秒に直す
			this.delay = delay * 60;
		}
		this.moveWaitSec = moveWaitSec * 60;
	}

	update = () => {
		if (this.delay) {
			this.delay--;
			return;
		}
		super.update();
		if (
			!player.stun &&
			checkHit(this.x, this.y, this.r, player.x, player.y, player.r)
		) {
			if (!(vars.gameOver || vars.gameClear)) {
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
