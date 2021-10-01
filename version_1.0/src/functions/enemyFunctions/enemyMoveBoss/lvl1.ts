import { Enemy } from '../../../classes/Enemy';
import { bossMoveDown } from './bossMoveDown';
import { bossShotDefault } from './bossShotDefault';
import { makeFollowers } from './makeFollowers';

const lvl1 = (boss: Enemy) => {
	bossMoveDown(boss);

	//弾の発射
	bossShotDefault(boss);

	// 取り巻きキャラを出現
	makeFollowers(boss, 3);
};

export { lvl1 };
