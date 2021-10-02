import { Enemy } from '../../../classes/Enemy';
import { player } from '../../../init/variables';
import { correctionToCalcValue } from '../../correctionToCalcValue';

export const attackableConditionPink = (enemy: Enemy): boolean =>
	Math.abs(player.y - enemy.y) < correctionToCalcValue(300) && !enemy.flag;
