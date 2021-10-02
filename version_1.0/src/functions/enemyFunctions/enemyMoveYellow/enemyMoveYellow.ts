//黄色のヒヨコの行動パターン ####################################################
import { Enemy } from '../../../classes/Enemy';
import { vars } from '../../../init/variables';
import { lvl2 } from './lvl2';
import { lvl1 } from './lvl1';
import { changeSprite } from '../changeSprite';
import { enemySpriteStart } from '../../../init/spriteInit';

export const enemyMoveYellow = (
	enemy: Enemy,
	spriteStart: number = enemySpriteStart.yellow,
) => {
	if (vars.gameRound == 0) {
		lvl1(enemy);
	}

	switch (vars.gameRound) {
		case 0:
			lvl1(enemy);
			break;
		case 1:
			lvl2(enemy);
			break;

		default:
			lvl1(enemy);
	}

	changeSprite(enemy, spriteStart);
};
