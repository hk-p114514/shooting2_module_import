'use strict';

import { Enemy } from '../../../classes/Enemy';
import { correctionToMapValue } from '../../correctionToMapValue';
import { bossMoveDown } from './bossMoveDown';

const sharedMove = (boss: Enemy) => {
	const mapX = correctionToMapValue(boss.x);
	const mapY = correctionToMapValue(boss.y);

	bossMoveDown(boss, mapY);
};

export { sharedMove };
