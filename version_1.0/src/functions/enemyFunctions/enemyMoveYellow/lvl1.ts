import { Enemy } from '../../../classes/Enemy';
import { player } from '../../../init/variables';
import { rand } from '../../random';
import { changeSprite } from '../changeSprite';
import { enemyAfterAttack } from '../enemyAfterAttack';
import { enemyBeforeAttack } from '../enemyBeforeAttack';
import { enemyBullet } from '../enemyBullet';

export const lvl1 = (enemy: Enemy) => {
	const accelerationX = 30;
	const vxMax = 300;
	const bulletSpeed = 10;
	if (!enemy.flag) {
		enemyBeforeAttack(enemy, player, accelerationX, vxMax, -vxMax * 2);
	} else {
		enemyAfterAttack(
			enemy,
			player,
			vxMax,
			accelerationX,
			-vxMax * 2,
			50,
			[1, 1],
		);
	}

	if (!enemy.flag) {
		if (!rand(0, 5)) {
			enemy.flag = true;
		}
		//enemyBulletを呼び出した回数分、攻撃する
		enemyBullet(enemy, 1000, {
			isRandom: true,
			begin: -bulletSpeed,
			end: bulletSpeed,
		});
	}
};
