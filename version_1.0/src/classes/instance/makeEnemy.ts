'use strict';

import { correctionToCalcValue } from '../../functions/correctionToCalcValue';
import { rand } from '../../functions/random';
import { enemy, field_w } from '../../init/variables';
import { Boss } from '../Boss';
import { Enemy } from '../Enemy';

const makeEnemy = (
	enemyNumber: number,
	/* デフォルト値を設定 */ {
		// 1 / probabilityの確率で敵が出現する,0なら確定
		probability = 0,
		x = NaN,
		y = 0,
		vx = 0,
		vy = rand(300, 1200),
		changeMax = 3,
		isBoss = false,
	} = {},
): Enemy | Boss => {
	if (Number.isNaN(x)) {
		// xの初期値はデフォルトでランダム
		x = rand(0, field_w);
	}

	x = correctionToCalcValue(x);
	y = correctionToCalcValue(y);

	const e = !isBoss
		? new Enemy(enemyNumber, x, y, vx, vy)
		: new Boss(enemyNumber, x, y, vx, vy, { changeMax: changeMax });

	if (!rand(0, probability - 1)) {
		enemy.push(e);
	}

	return enemy.slice(-1)[0];
};

export { makeEnemy };
