'use strict';

import { makeEnemy } from '../../classes/instance/makeEnemy';
import { LastBoss } from '../../classes/LastBoss';
import {
	enemy,
	enemyMasterIndex as e,
	field_w,
	itemMasterIndex as i,
	oneWave,
	tenSeconds,
	vars,
} from '../../init/variables';
import { correctionToCalcValue } from '../correctionToCalcValue';
import { correctionToMapValue } from '../correctionToMapValue';
import { makeItem } from '../itemFunctions/makeItem';
import { randArr } from '../randArr';
import { rand } from '../random';
import { secToCount } from '../secToCount';
import { increaseWave } from './increaseWave';
import { isPossibleLvUp } from './isPossibleLvUp';
import { levelUp } from './levelUp';

const lvl3Waves: Function[] = [
	// 0
	(): void => {
		// 鶏を出す
		makeEnemy(e.chicken, { probability: 40 });
		// increaseWave(oneWave);
		increaseWave(1);
	},

	// 1
	(): void => {
		// 群青色のヒヨコを出す
		makeEnemy(e.blue, { probability: 30 });
		increaseWave(oneWave * 3);
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
		vars.gameCount++;
		if (vars.gameCount > secToCount(5) && !vars.bossEncounter) {
			enemy.push(
				new LastBoss(e.lastBoss, correctionToCalcValue(field_w / 2), 0, 0, 200),
			);
		} else if (
			vars.gameCount >= secToCount(tenSeconds * 2) &&
			vars.healCount >= 0 &&
			!rand(0, 999)
		) {
			makeItem(i.heal);
		}

		if (isPossibleLvUp()) {
			levelUp();
			return;
		}
	},
];

export { lvl3Waves };
