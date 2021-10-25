import { correctionToCalcValue } from '../functions/correctionToCalcValue';
import { rand } from '../functions/random';
import { field_h, field_w, vars } from '../init/variables';
import { Enemy } from './Enemy';

class LastBoss extends Enemy {
	movePattern: number = 0;
	maxPattern: number = 5;
	constructor(id: number, x: number, y: number, vx: number, vy: number) {
		super(id, x, y, vx, vy);
		vars.bossEncounter = true;
	}

	update = () => {
		vars.bossMhp = this.maxHp;
		vars.bossHp = this.hp;
		if (!rand(0, 500)) {
			this.movePattern = this.count % 3;
			this.vx /= 2;
			this.vy /= 2;
		}
		super.update();

		switch (this.movePattern) {
			case 0:
				if (!rand(0, 400)) {
					this.teleport();
				}
				break;
		}
	};

	teleport = () => {
		this.x = rand(this.r, correctionToCalcValue(field_w) - this.r);
		this.y = rand(this.r, correctionToCalcValue(field_h) - this.r);
	};
}

export { LastBoss };
