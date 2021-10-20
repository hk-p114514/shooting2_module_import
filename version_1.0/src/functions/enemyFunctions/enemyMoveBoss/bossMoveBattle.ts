'use strict';
import { Enemy } from '../../../classes/Enemy';
import { field_h, field_w } from '../../../init/variables';
import { correctionToMapValue } from '../../correctionToMapValue';
import { bossMoveDown } from './bossMoveDown';
import { bossMoveHorizontal } from './bossMoveHorizontal';
import { bossMoveVertical } from './bossMoveVertical';

const bossMoveBattle = (
	boss: Enemy,
	{
		mapX = correctionToMapValue(boss.x),
		mapY = correctionToMapValue(boss.y),
		maxVx = 300,
		maxVy = 300,
		move = true,
		limitX = field_w,
		limitY = field_h,
		pattern = '',
	} = {},
) => {
	bossMoveDown(boss, mapY);

	if (move) {
		switch (pattern) {
			case 'h':
				bossMoveHorizontal(boss, maxVx, mapX, limitX);
				break;
			case 'v':
				bossMoveVertical(boss, maxVy, mapY, limitY);
				break;
			case 'hv':
				bossMoveHorizontal(boss, maxVx, mapX, limitX);
				bossMoveVertical(boss, maxVy, mapY, limitY);
				break;
			default:
			// NOTHING
		}
	}
};

export { bossMoveBattle };
