import { Enemy } from '../../../classes/Enemy';
import { enemyMasterIndex } from '../../../init/variables';
import { bossMoveBattle } from './bossMoveBattle';
import { bossShotDefault } from './bossShotDefault';
import { makeFollowers } from './makeFollowers';

const lvl1 = (boss: Enemy) => {
	bossMoveBattle(boss, { pattern: 'v' });

	//弾の発射
	bossShotDefault(boss);

	// 取り巻きキャラを出現
	makeFollowers(boss, enemyMasterIndex.pink);
};

export { lvl1 };
