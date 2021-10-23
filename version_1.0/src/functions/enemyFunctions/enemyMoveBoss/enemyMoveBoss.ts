//ボスヒヨコ(黄色)の行動パターン ##################################################
import { vars } from '../../../init/variables';
import { lvl1 } from './lvl1';
import { lvl2 } from './lvl2';
import { enemySpriteStart } from '../../../init/spriteInit';
import { Boss } from '../../../classes/Boss';

export const enemyMoveBoss = (
	boss: Boss,
	spriteStart: number = enemySpriteStart.bigPink,
): void => {
	switch (vars.gameRound) {
		case 0:
			lvl1(boss);
			spriteStart = enemySpriteStart.bigPink;
			break;
		case 1:
			lvl2(boss);
			spriteStart = enemySpriteStart.bigYellow;
			break;
		default:
			lvl1(boss);
	}

	//スプライトの変更
	boss.snum = spriteStart;
};
