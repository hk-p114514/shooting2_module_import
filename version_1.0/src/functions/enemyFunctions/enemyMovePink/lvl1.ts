import { Enemy } from '../../../classes/Enemy';
import { player } from '../../../init/variables';
import { enemyAfterAttack } from '../enemyAfterAttack';
import { enemyBeforeAttack } from '../enemyBeforeAttack';
import { enemyBullet } from '../enemyBullet';
import { attackableConditionPink } from './sharePinkMove';

export const lvl1 = (enemy: Enemy) => {
	const acceleration = 4;
	const vxMax = 120;
	const approachX = 400;
	const breakOutX = 30;
	if (!enemy.flag) {
		enemyBeforeAttack(enemy, player, acceleration, vxMax);
	} else {
		enemyAfterAttack(
			enemy,
			player,
			approachX,
			-breakOutX,
			-approachX,
			breakOutX,
			[0, 0],
		);
	}

	if (attackableConditionPink(enemy)) {
		enemy.flag = true;
		//enemyBulletを呼び出した回数分、攻撃する
		enemyBullet(enemy, 1000, { isRandom: true, begin: -10, end: 10 });
	}

	if (enemy.flag && enemy.vy > -500) {
		enemy.accelerationY(-breakOutX);
	}
};
