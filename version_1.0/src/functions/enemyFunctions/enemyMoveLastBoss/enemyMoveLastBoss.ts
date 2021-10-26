import { makeEnemy } from '../../../classes/instance/makeEnemy';
import { LastBoss } from '../../../classes/LastBoss';
import { enemySpriteStart } from '../../../init/spriteInit';
import { enemyMasterIndex } from '../../../init/variables';
import { correctionToMapValue } from '../../correctionToMapValue';
import { bossMoveBattle } from '../enemyMoveBoss/bossMoveBattle';

const enemyMoveLastBoss = (
	boss: LastBoss,
	spriteStart: number = enemySpriteStart.lastBoss,
) => {
	const mapX = correctionToMapValue(boss.x);
	const mapY = correctionToMapValue(boss.y);
	const patterns = ['hv', 'v', 'h'];

	bossMoveBattle(boss, {
		pattern: patterns[boss.movePattern],
		mapX: mapX,
		mapY: mapY,
	});

	makeEnemy(enemyMasterIndex.shovel, { probability: 30 });

	// makeFollowers(
	// 	boss,
	// 	enemyMasterIndex.shovel,
	// 	enemyFunctions.shovel,
	// 	enemySpriteStart.shovel,
	// );

	// スプライトの変更
	boss.snum = spriteStart;
};

export { enemyMoveLastBoss };
