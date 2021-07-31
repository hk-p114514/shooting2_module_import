//ピンクのヒヨコの行動パターン ####################################################
import { Enemy } from '../../../classes/Enemy';
import { player, vars } from '../../../init/variables';
import { rand } from '../../random';
import { enemyBullet } from '../enemyBullet';
import { lvl1 } from '../enemyMovePink/lvl1';

export const enemyMovePink = (object: Enemy) => {
	if (vars.gameRound == 0) {
		lvl1(object);
	}
};
