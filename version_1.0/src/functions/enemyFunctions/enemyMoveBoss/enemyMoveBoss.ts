//ボスヒヨコ(黄色)の行動パターン ##################################################
import { vars } from '../../../init/variables';
import { Enemy } from '../../../classes/Enemy';
import { lvl1 } from './lvl1';
import { enemySpriteStart } from '../../../init/spriteInit';

export const enemyMoveBoss = (boss: Enemy) => {
	switch (vars.gameRound) {
		case 0:
			lvl1(boss);
			break;
		case 1:
			lvl1(boss);
			break;
	}

	//スプライトの変更
	boss.snum = enemySpriteStart.bigYellow;
};
