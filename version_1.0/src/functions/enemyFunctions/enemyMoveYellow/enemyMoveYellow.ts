//黄色のヒヨコの行動パターン ####################################################
import { Enemy } from '../../../classes/Enemy/Enemy';
import { vars } from '../../../init/variables';
import { lvl2 } from './lvl2';
import { lvl1 } from './lvl1';

export const enemyMoveYellow = (object: Enemy) => {
	if (vars.gameRound == 0) {
		lvl1(object);
	}

	switch (vars.gameRound) {
		case 0:
			lvl1(object);
			break;
		case 1:
			lvl2(object);
			break;

		default:
			lvl1(object);
	}
};
