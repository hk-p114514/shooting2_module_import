import { Enemy } from '../../../classes/Enemy';
import { player } from '../../../init/variables';
import { correctionToCalcValue } from '../../correctionToCalcValue';

export const isAttackable = (
	enemy: Enemy,
	minDistance: number = 300,
): boolean => {
	const result =
		Math.abs(player.y - enemy.y) < correctionToCalcValue(minDistance) &&
		!enemy.flag;

	if (result) {
		enemy.flag = true;
	}

	return result;
};
