//ピンクのヒヨコの行動パターン ####################################################
import { Enemy } from '../../../classes/Enemy/Enemy';
import { vars } from '../../../init/variables';
import { lvl1 } from './lvl1';

const enemyMoveBlue = (enemy: Enemy) => {
	switch (vars.gameRound) {
		case 0:
			lvl1(enemy);
			break;
		case 1:
			lvl1(enemy);
			break;
	}
};

export { enemyMoveBlue };
