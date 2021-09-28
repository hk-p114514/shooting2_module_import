import { Character } from './Character';
import { vars, player } from '../init/variables';
import { checkHit } from '../functions/hit';
import { isAttacked } from '../functions/isAttacked';
import { Vector } from './Vector';
import { rand } from '../functions/random';

class EnemyShot extends Character {
	r: number;
	timer: number;
	moveWaitSec: number;
	constructor(
		snum: number,
		x: number,
		y: number,
		vx: number,
		vy: number,
		timer: number,
		moveWaitSec: number = 0,
	) {
		super(snum, x, y, vx, vy);
		this.r = 4;
		if (timer === undefined) {
			this.timer = 0;
		} else {
			this.timer = timer;
		}
		this.moveWaitSec = moveWaitSec * 60;
	}

	update = () => {
		if (this.timer) {
			this.timer--;
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

		if (this.moveWaitSec && this.count % this.moveWaitSec === 0) {
			// moveCountが0でなかったら
			this.rotation(99);
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
