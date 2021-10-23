import { Enemy } from '../../../classes/Enemy';
import { player } from '../../../init/variables';
import { rand } from '../../random';
import { enemyBullet } from '../enemyBullet';
import { isAttackable } from '../enemyMovePink/isAttackable';
import { sharedMove } from '../enemyMovePink/sharedMove';

const lvl1 = (enemy: Enemy) => {
	const r = player.r / 2;
	const range = rand(500, 1000);
	const speed = rand(1000, 2000);

	sharedMove(enemy, {
		func: () => {
			if (isAttackable(enemy, range)) {
				enemyBullet(enemy, speed, {
					gap: rand(-r, r),
				});
			}
		},
	});
};

export { lvl1 };
