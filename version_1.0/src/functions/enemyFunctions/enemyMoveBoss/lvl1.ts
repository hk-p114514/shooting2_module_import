import { Boss } from '../../../classes/Boss';
import { enemySpriteStart } from '../../../init/spriteInit';
import { enemyMasterIndex } from '../../../init/variables';
import { enemyFunctions } from '../enemyFunctions';
import { bossMoveBattle } from './bossMoveBattle';
import { bossShotDefault } from './bossShotDefault';
import { makeFollowers } from './makeFollowers';

const lvl1 = (boss: Boss) => {
	bossMoveBattle(boss, { pattern: '' });
	const angles = [90, -90, 0];
	const speed = [250, 500, 1000];

	//弾の発射
	bossShotDefault(boss, {
		speed: speed[boss.changeIndex % speed.length],
		directionGap: 10,
		moveCount: 2,
		moveAngle: angles[boss.changeIndex % angles.length],
	});

	// 取り巻きキャラを出現
	makeFollowers(
		boss,
		enemyMasterIndex.pink,
		enemyFunctions.chicken,
		enemySpriteStart.chicken,
	);
};

export { lvl1 };
