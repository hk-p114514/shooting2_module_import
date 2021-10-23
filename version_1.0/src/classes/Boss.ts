import { vars } from '../init/variables';
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
		vars.bossEncounter = true;
	}

	update() {
		vars.bossMhp = this.maxHp;
		vars.bossHp = this.hp;
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
