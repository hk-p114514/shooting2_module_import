//ピンクのヒヨコの行動パターン ####################################################
import { Enemy } from '../../../classes/Enemy';
import { enemySpriteStart } from '../../../init/spriteInit';
import { vars } from '../../../init/variables';
import { changeSprite } from '../changeSprite';
import { lvl1 } from './lvl1';

const enemyMoveBlue = (
	enemy: Enemy,
	spriteStart: number = enemySpriteStart.blue,
) => {
	switch (vars.gameRound) {
		case 0:
			lvl1(enemy);
			break;
		case 1:
			lvl1(enemy);
			break;
	}

	// スプライトの変更
	// スプライトのパターン（アニメーションを表現）
	changeSprite(enemy, spriteStart);
};

export { enemyMoveBlue };
