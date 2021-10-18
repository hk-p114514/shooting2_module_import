'use strict';

import { enemy, vars } from '../../init/variables';

const isPossibleLvUp = (): boolean => {
	return enemy.length <= 0 && vars.bossEncounter;
};

export { isPossibleLvUp };
