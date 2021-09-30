import { Enemy } from '../../../classes/Enemy';
import { makeEnemy } from '../../../classes/instance/makeEnemy';
import { makeEnemyShot } from '../../../classes/instance/makeEnemyShot';
import { enemy, enemyShot, field_w } from '../../../init/variables';
import { rand } from '../../random';
import { bossMoveDown } from './bossMoveDown';
import { bossShotDefault } from './bossShotDefault';
import { makeFollowers } from './makeFollowers';

const lvl1 = (boss: Enemy) => {
	bossMoveDown(boss);

	//弾の発射
	bossShotDefault(boss);

	// 取り巻きキャラを出現
	makeFollowers(boss, 3);

	//スプライトの変更
	boss.snum = 75;
};

export { lvl1 };
