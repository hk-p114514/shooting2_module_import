//ピンクのヒヨコの行動パターン ####################################################
import { Enemy } from '../../../classes/Enemy';
import { enemySpriteStart } from '../../../init/spriteInit';
import { vars } from '../../../init/variables';
import { changeSprite } from '../changeSprite';
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
	//スプライトの変更
	//スプライトのパターン（アニメーションを表現）
	changeSprite(enemy, enemySpriteStart.pink);
};
