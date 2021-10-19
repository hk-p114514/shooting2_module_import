'use strict';
import { Enemy } from '../../../classes/Enemy';
import { field_h, field_w } from '../../../init/variables';
import { rand } from '../../random';
import { bossMoveHorizontal } from './bossMoveHorizontal';
import { bossMoveVertical } from './bossMoveVertical';

type Arguments = {
	maxVx: number;
	maxVy: number;
	move: boolean;
	limitX: number;
	limitY: number;
	pattern: 'h' | 'v' | 'hv';
};

const bossMoveBattle = (
	boss: Enemy,
	mapX: number,
	mapY: number,
	{
		maxVx = 300,
		maxVy = 300,
		move = true,
		limitX = field_w,
		limitY = field_h,
		pattern = 'h',
	}: Arguments,
) => {
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
		}
	}
};

export { bossMoveBattle };
