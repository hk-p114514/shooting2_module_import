'use strict';

import { player } from '../../../init/variables';

const checkState = (): boolean => {
	let result = true;
	if (player.hp > player.maxHp) {
		result = false;
	}
	return result;
};

export { checkState };
