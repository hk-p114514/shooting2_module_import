import { Enemy } from '../../../classes/Enemy';
import { player } from '../../../init/variables';
import { rand } from '../../random';
import { enemyAfterAttack } from '../enemyAfterAttack';
import { enemyBeforeAttack } from '../enemyBeforeAttack';
import { enemyBullet } from '../enemyBullet';
import { attackableConditionPink } from './sharePinkMove';

const lvl2 = (enemy: Enemy): void => {
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
		for (let i = 0; i < rand(10, 100); i++) {
			//enemyBulletを呼び出した回数分、攻撃する
			enemyBullet(enemy, 1000, { isRandom: true });
		}
		enemy.flag = true;
	}

	if (enemy.flag && enemy.vy > -500) {
		enemy.accelerationY(-30);
	}
};

export { lvl2 };
