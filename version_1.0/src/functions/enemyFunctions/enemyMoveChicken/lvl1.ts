import { Enemy } from '../../../classes/Enemy';
import { rand } from '../../random';
import { enemyBullet } from '../enemyBullet';
import { isAttackable } from '../enemyMovePink/isAttackable';
import { sharedMove } from '../enemyMovePink/sharedMove';

const lvl1 = (enemy: Enemy) => {
	sharedMove(enemy, {
		func: () => {
			if (isAttackable(enemy)) {
				enemyBullet(enemy, rand(1000, 2000));
			}
		},
	});
};

export { lvl1 };
