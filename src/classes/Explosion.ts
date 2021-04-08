import {Character} from "./Character";

class Explosion extends Character {
	timer: number;
	constructor(c: number, x: number, y: number, vx: number, vy: number) {
		super(0, x, y, vx, vy);
		this.timer = c;
	}

	update() {
		if (this.timer) {
			this.timer--;
			return;
		}
		super.update();
	}

	draw() {
		if (this.timer) {
			return;
		}
		this.snum = 16 + (this.count >> 4);
		if (this.snum == 27) {
			this.kill = true;
			return;
		}
		super.draw();
	}
}

export { Explosion };
