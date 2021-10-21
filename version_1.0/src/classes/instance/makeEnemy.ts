'use strict';

import { correctionToCalcValue } from '../../functions/correctionToCalcValue';
import { rand } from '../../functions/random';
import { enemy, field_w, player } from '../../init/variables';
import { Enemy } from '../Enemy';

const makeEnemy = (
	enemyNumber: number,
	/* デフォルト値を設定 */ {
		// 1 / probabilityの確率で敵が出現する,0なら確定
		probability = 0,
		x = rand(0, field_w),
		y = 0,
		vx = 0,
		vy = rand(300, 1200),
	} = {},
): Enemy => {
	x = correctionToCalcValue(x);
	y = correctionToCalcValue(y);
	const e = new Enemy(enemyNumber, x, y, vx, vy);
	console.log(`enemy :${e.x}-${e.y}`);
	console.log(`player:${player.x}-${player.y}`);

	if (!rand(0, probability - 1)) {
		enemy.push(e);
	}

	return enemy.slice(-1)[0];
};

export { makeEnemy };
