import { Enemy } from '../../../classes/Enemy';

const bossMoveDown = (boss: Enemy, mapY: number): void => {
	if (!boss.flag && mapY >= 120) {
		boss.flag = 1;
	}

	if (boss.flag === 1) {
		boss.vy -= 1;
		if (boss.vy <= 0) {
			boss.flag = 2;
			boss.vy = 0;
		}
	}
};

export { bossMoveDown };
