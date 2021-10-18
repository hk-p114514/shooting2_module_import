import { Enemy } from '../../../classes/Enemy';
import { sharedMove } from './sharedMove';

const lvl2 = (enemy: Enemy) => {
	const bulletSpeed = 16;

	sharedMove(enemy, bulletSpeed, 5);
};

export { lvl2 };
