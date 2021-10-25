'use strict';

import { makeEnemy } from '../../classes/instance/makeEnemy';
import {
	enemyMasterIndex as e,
	itemMasterIndex as i,
	oneWave,
	vars,
} from '../../init/variables';
import { makeItem } from '../itemFunctions/makeItem';
import { randArr } from '../randArr';
import { rand } from '../random';
import { secToCount } from '../secToCount';
import { increaseWave } from './increaseWave';

const lvl3Waves: Function[] = [
	// 0
	(): void => {
		// 鶏を出す
		makeEnemy(e.chicken, { probability: 40 });
		increaseWave(oneWave);
	},

	// 1
	(): void => {
		// 群青色のヒヨコを出す
		makeEnemy(e.blue, { probability: 30 });
	},

	// 2
	(): void => {
		// ランダム
		const enemies = [e.pink, e.chicken, e.yellow, e.blue, e.robot];
		makeEnemy(randArr(enemies), { probability: 20 });

		if (!rand(0, 99) && vars.healCount >= 2 && vars.gameCount > secToCount(20)) {
			makeItem(i.heal);
		}

		// 30秒経過したらウェーブを１段階上げる
		increaseWave(oneWave * 3);
	},

	// 3 (ボス)
	(): void => {
		// ボスキャラ出現
		const lastBoss = new LastBoss();
	},
];

export { lvl3Waves };
