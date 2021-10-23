import { Boss } from '../../../classes/Boss';
import { enemyMasterIndex } from '../../../init/variables';
import { bossMoveBattle } from './bossMoveBattle';
import { bossShotDefault } from './bossShotDefault';
import { makeFollowers } from './makeFollowers';

const lvl1 = (boss: Boss) => {
	bossMoveBattle(boss, { pattern: '' });
	const angles = [90, -90, 0];
	const speed = [100, 500, 1000];

	//弾の発射
	bossShotDefault(boss, {
		speed: speed[boss.changeIndex],
		directionGap: 10,
		moveCount: 2,
		moveAngle: angles[boss.changeIndex],
	});

	// 取り巻きキャラを出現
	makeFollowers(boss, enemyMasterIndex.pink);
};

export { lvl1 };
