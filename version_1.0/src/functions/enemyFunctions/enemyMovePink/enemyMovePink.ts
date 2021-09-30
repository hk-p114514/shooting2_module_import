//ピンクのヒヨコの行動パターン ####################################################
import { Enemy } from '../../../classes/Enemy';
import { vars } from '../../../init/variables';
import { lvl1 } from './lvl1';
import { lvl2 } from './lvl2';

export const enemyMovePink = (enemy: Enemy) => {
	switch (vars.gameRound) {
		case 0:
			lvl1(enemy);
			break;
		case 1:
			lvl2(enemy);
			break;
	}
};
