'use strict';

import { enemy, enemyShot, vars } from '../../init/variables';

const isPossibleLvUp = (): boolean => {
	return enemy.length <= 0 && vars.bossEncounter && enemyShot.length <= 0;
};

export { isPossibleLvUp };
