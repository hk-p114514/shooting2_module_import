//ボスヒヨコ（黄色）の子供
import { Enemy } from '../../../classes/Enemy';
import { enemySpriteStart } from '../../../init/spriteInit';
import { vars } from '../../../init/variables';
import { changeSprite } from '../changeSprite';
import { lvl1 } from './lvl1';

export const enemyMoveRobot = (
	enemy: Enemy,
	spriteStart: number = enemySpriteStart.robot,
) => {
	switch (vars.gameRound) {
		case 0:
			lvl1(enemy);
			break;
		default:
			lvl1(enemy);
	}

	changeSprite(enemy, spriteStart);
};
