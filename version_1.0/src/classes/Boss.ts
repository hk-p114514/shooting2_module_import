import { Enemy } from './Enemy';

class Boss extends Enemy {
	changeIndex: number;
	changeMax: number;
	constructor(
		id: number,
		x: number,
		y: number,
		vx: number,
		vy: number,
		{ moveFunctionArg = NaN, changeIndex = 0, changeMax = 0 } = {},
	) {
		super(id, x, y, vx, vy, moveFunctionArg);
		this.changeIndex = changeIndex;
		this.changeMax = changeMax;
	}

	update() {
		if (this.direction === 0) {
			// 弾幕が一周したら
			if (this.changeIndex >= this.changeMax) {
				this.changeIndex = 0;
			} else {
				this.changeIndex++;
			}
		}
		super.update();
	}
}

export { Boss };
