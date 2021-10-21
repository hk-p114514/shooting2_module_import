import { Enemy } from '../../../classes/Enemy';
import { enemyMasterIndex } from '../../../init/variables';
import { rand } from '../../random';
import { bossMoveBattle } from './bossMoveBattle';
import { bossShotDefault } from './bossShotDefault';
import { makeFollowers } from './makeFollowers';

const lvl1 = (boss: Enemy) => {
	bossMoveBattle(boss, { pattern: '' });

	const dirs = [-1, 1];
	//弾の発射
	bossShotDefault(boss, {
		moveCount: 2,
		moveAngle: dirs[rand(0, dirs.length - 1)],
	});

	// 取り巻きキャラを出現
	makeFollowers(boss, enemyMasterIndex.pink);
};

export { lvl1 };
