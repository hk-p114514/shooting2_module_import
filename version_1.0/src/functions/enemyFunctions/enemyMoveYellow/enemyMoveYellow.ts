//黄色のヒヨコの行動パターン ####################################################
import { Enemy } from '../../../classes/Enemy';
import { vars } from '../../../init/variables';
import { lvl1 } from './lvl1';

export const enemyMoveYellow = (object: Enemy) => {
	if (vars.gameRound == 0) {
		lvl1(object);
	}
};
