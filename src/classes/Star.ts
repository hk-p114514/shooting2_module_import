import { rand } from '../functions/random';
import {
	vars,
	field_h,
	field_w,
	screen_h,
	screen_w,
	vctx,
} from '../init/variables';

class Star {
	x: number;
	y: number;
	vx: number;
	vy: number;
	sz: number;
	constructor() {
		this.x = rand(0, field_w) << 8;
		this.y = rand(0, field_h) << 8;
		this.vx = 0;
		this.vy = rand(30, 200);
		this.sz = rand(1, 2);
	}

	draw() {
		let x = this.x >> 8;
		let y = this.y >> 8;
		if (
			x < vars.camera_x ||
			x >= vars.camera_x + screen_w ||
			y < vars.camera_y ||
			y >= vars.camera_y + screen_h
		)
			return;
		if (vctx) {
			vctx.fillStyle = rand(0, 2) !== 0 ? '#66f' : '#aef';
			vctx.fillRect(this.x >> 8, this.y >> 8, this.sz, this.sz);
		}
	}

	update() {
		//星の速度の倍率
		let starSpeedPercentage = vars.starSpeed / 100;
		this.x += this.vx * starSpeedPercentage;
		this.y += this.vy * starSpeedPercentage;
		if (this.y > field_h << 8) {
			this.y = 0;
			this.x = rand(0, field_w) << 8;
		}
	}
}

export { Star };
