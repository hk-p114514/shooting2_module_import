import { vars } from '../init/variables';
import { Enemy } from './Enemy';

class LastBoss extends Enemy {
	constructor(id: number, x: number, y: number, vx: number, vy: number) {
		super(id, x, y, vx, vy);
		vars.bossEncounter = true;
	}

	update = () => {
		vars.bossMhp = this.maxHp;
		vars.bossHp = this.hp;
		super.update();
	};
}

export { LastBoss };
