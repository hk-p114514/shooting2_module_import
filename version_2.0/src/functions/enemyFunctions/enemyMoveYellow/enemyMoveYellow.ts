//黄色のヒヨコの行動パターン ####################################################
import { Enemy } from '../../../classes/Enemy';
import { player, vars } from '../../../init/variables';
import { rand } from '../../random';
import { enemyBullet } from '../enemyBullet';
import { lvl1 } from './lvl1';

export const enemyMoveYellow = (object: Enemy) => {
	if (vars.gameRound == 0) {
		lvl1(object);
	}
};
