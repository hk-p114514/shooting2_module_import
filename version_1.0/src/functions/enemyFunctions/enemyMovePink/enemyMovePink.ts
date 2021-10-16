//ピンクのヒヨコの行動パターン ####################################################
import { Enemy } from '../../../classes/Enemy';
import { enemySpriteStart } from '../../../init/spriteInit';
import { vars } from '../../../init/variables';
import { changeSprite } from '../changeSprite';
import { lvl1 } from './lvl1';
import { lvl2 } from './lvl2';

export const enemyMovePink = (
	enemy: Enemy,
	spriteStart: number = enemySpriteStart.pink,
) => {
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

	//スプライトの変更
	changeSprite(enemy, spriteStart);
};
