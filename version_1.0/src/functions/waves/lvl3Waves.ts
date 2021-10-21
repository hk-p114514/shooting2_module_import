'use strict';

import { makeEnemy } from '../../classes/instance/makeEnemy';
import { enemyMasterIndex as e, oneWave } from '../../init/variables';
import { increaseWave } from './increaseWave';

const lvl3Waves: Function[] = [
	// 0
	(): void => {
		makeEnemy(e.blue, { probability: 40 });
		increaseWave(oneWave);
	},

	// 1
	(): void => {},

	// 2
	(): void => {},

	// 3 (ボス)
	(): void => {},
];

export { lvl3Waves };
