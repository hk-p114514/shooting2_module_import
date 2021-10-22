import { Boss } from '../../../classes/Boss';
import { enemyMasterIndex } from '../../../init/variables';
import { bossMoveBattle } from './bossMoveBattle';
import { bossShotDefault } from './bossShotDefault';
import { makeFollowers } from './makeFollowers';

const lvl1 = (boss: Boss) => {
	bossMoveBattle(boss, { pattern: '' });
	const angles = [90, -90, 0];

	//弾の発射
	bossShotDefault(boss, {
		moveCount: 2,
		moveAngle: angles[boss.changeIndex],
	});
	console.log(boss.changeMax);

	// 取り巻きキャラを出現
	makeFollowers(boss, enemyMasterIndex.pink);
};

export { lvl1 };
