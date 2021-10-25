import { LastBoss } from '../../../classes/LastBoss';
import { enemySpriteStart } from '../../../init/spriteInit';
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

	// スプライトの変更
	boss.snum = spriteStart;
};

export { enemyMoveLastBoss };
