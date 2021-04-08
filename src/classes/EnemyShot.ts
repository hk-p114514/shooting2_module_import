import {Character} from "./Character";
import {gameClear, gameOver, player} from "../init/variables";
import {checkHit} from "../functions/hit";
import {isAttacked} from "../functions/isAtacked";

class EnemyShot extends Character {
	r: number;
	timer: number;
	constructor(
		snum: number,
		x: number,
		y: number,
		vx: number,
		vy: number,
		timer: number
	) {
		super(snum, x, y, vx, vy);
		this.r = 4;
		if (timer === undefined) {
			this.timer = 0;
		} else {
			this.timer = timer;
		}
	}
	update() {
		if (this.timer) {
			this.timer--;
			return;
		}
		super.update();
		if (
			!player.stun &&
			checkHit(this.x, this.y, this.r, player.x, player.y, player.r)
		) {
			if (!(gameOver || gameClear)) {
				isAttacked(this);
			}
		}

		this.snum = 14 + ((this.count >> 3) & 1);
	}
}

export { EnemyShot };
