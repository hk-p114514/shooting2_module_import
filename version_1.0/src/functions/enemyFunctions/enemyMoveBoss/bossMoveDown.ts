import { Enemy } from '../../../classes/Enemy';
import { field_w } from '../../../init/variables';
import { correctionToMapValue } from '../../correctionToMapValue';
import { rand } from '../../random';

const bossMoveDown = (boss: Enemy) => {
	const mapX = correctionToMapValue(boss.x);
	const mapY = correctionToMapValue(boss.y);

	if (!boss.flag && mapY >= 120) {
		boss.flag = 1;
	}

	if (boss.flag === 1) {
		boss.vy -= 1;
		if (boss.vy <= 0) {
			boss.flag = 2;
			boss.vy = 0;
		}
	} else if (boss.flag === 2) {
		if (boss.vx < 300) {
			boss.vx += rand(1, 300);
		}

		if (mapX > field_w - 100) {
			boss.flag = 3;
		}
	} else if (boss.flag === 3) {
		if (boss.vx > -300) {
			boss.vx -= rand(1, 300);
		}

		if (mapX < 100) {
			boss.flag = 2;
		}
	}
};

export { bossMoveDown };
