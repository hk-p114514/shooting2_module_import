import { Enemy } from '../../../classes/Enemy';
import { rand } from '../../random';

const bossMoveHorizontal = (
	boss: Enemy,
	maxVx: number,
	x: number,
	limitX: number,
) => {
	limitX -= boss.diameter;

	if (boss.flag === 2) {
		if (boss.vx < maxVx) {
			boss.vx += rand(1, maxVx);
		}

		if (x > limitX) {
			boss.flag = 3;
		}
	} else if (boss.flag === 3) {
		if (boss.vx > -maxVx) {
			boss.vx -= rand(1, maxVx);
		}

		if (x < boss.diameter) {
			boss.flag = 2;
		}
	}
};

export { bossMoveHorizontal };
