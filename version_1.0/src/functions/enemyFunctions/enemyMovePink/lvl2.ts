import { Enemy } from '../../../classes/Enemy';
import { enemyBullet } from '../enemyBullet';
import { sharedMove } from './sharedMove';
import { isAttackable } from './isAttackable';

const lvl2 = (enemy: Enemy): void => {
	sharedMove(enemy, () => {
		if (isAttackable(enemy)) {
			for (let i = 0; i < 3; i++) {
				//enemyBulletを呼び出した回数分、攻撃する
				enemyBullet(enemy, 1000, {});
			}
		}
	});
};

export { lvl2 };
