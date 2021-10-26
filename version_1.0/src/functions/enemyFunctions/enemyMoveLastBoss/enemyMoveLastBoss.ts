import { Boss } from '../../../classes/Boss';
import { makeBullet } from '../../../classes/instance/makeBullet';
import { makeEnemy } from '../../../classes/instance/makeEnemy';
import { LastBoss } from '../../../classes/LastBoss';
import { enemySpriteStart as eS } from '../../../init/spriteInit';
import { enemyMasterIndex as eI, vars } from '../../../init/variables';
import { correctionToMapValue } from '../../correctionToMapValue';
import { rand } from '../../random';
import { enemyBullet } from '../enemyBullet';
import { enemyFunctions as eF } from '../enemyFunctions';
import { bossMoveBattle } from '../enemyMoveBoss/bossMoveBattle';
import { bossShotDefault } from '../enemyMoveBoss/bossShotDefault';
import { makeFollowers } from '../enemyMoveBoss/makeFollowers';

const enemyMoveLastBoss = (
	boss: LastBoss,
	spriteStart: number = eS.lastBoss,
) => {
	const mapX = correctionToMapValue(boss.x);
	const mapY = correctionToMapValue(boss.y);
	const patterns = ['hv', 'v', 'h'];

	bossMoveBattle(boss, {
		pattern: patterns[boss.movePattern],
		mapX: mapX,
		mapY: mapY,
	});

	switch (boss.movePattern) {
		case 0:
			makeEnemy(eI.shovel, { probability: 30 });
			break;
		case 1:
			makeEnemy(eI.bigShovel, { probability: 40 });
			break;
		case 2:
			makeEnemy(eI.shovel, { probability: 40 });
			makeEnemy(eI.bigShovel, { probability: 30 });
			break;
		case 3:
			vars.healCount = 0;
			boss.movePattern = rand(0, boss.maxPattern);
			break;
		case 4:
			break;

		default:
			bossShotDefault(boss, {
				speed: boss.bulletSpeed,
				directionGap: 10,
				changeDir: true,
				moveCount: 0.5,
				addMagnitude: boss.bulletSpeed / 2,
				moveAngle: rand(-100, 100),
			});
	}

	// スプライトの変更
	boss.snum = spriteStart;
};

export { enemyMoveLastBoss };
