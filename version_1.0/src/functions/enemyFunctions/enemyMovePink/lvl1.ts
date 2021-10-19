import { Enemy } from '../../../classes/Enemy';
import { enemyBullet } from '../enemyBullet';
import { sharedMove } from './sharedMove';
import { isAttackable } from './isAttackable';

export const lvl1 = (enemy: Enemy) => {
	sharedMove(enemy, {
		func: () => {
			if (isAttackable(enemy)) {
				//enemyBulletを呼び出した回数分、攻撃する
				enemyBullet(enemy, 1000, { isRandom: true, begin: -10, end: 10 });
			}
		},
	});
};
