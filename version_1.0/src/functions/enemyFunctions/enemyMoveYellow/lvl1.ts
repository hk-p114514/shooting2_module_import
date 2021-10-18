import { Enemy } from '../../../classes/Enemy';
import { sharedMove } from './sharedMove';

export const lvl1 = (enemy: Enemy) => {
	const bulletSpeed = 10;

	sharedMove(enemy, bulletSpeed, 5);
};
