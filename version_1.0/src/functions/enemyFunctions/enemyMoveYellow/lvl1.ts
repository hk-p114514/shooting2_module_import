import { Enemy } from '../../../classes/Enemy';
import { player } from '../../../init/variables';
import { rand } from '../../random';
import { enemyBeforeAttack } from '../enemyBeforeAttack';
import { enemyBullet } from '../enemyBullet';

export const lvl1 = (enemy: Enemy) => {
	if (!enemy.flag) {
		enemyBeforeAttack(enemy, player, 30, 300, -600);
	} else {
		if (player.x < enemy.x && enemy.vx < 300) {
			enemy.accelerationY(30);
		} else if (enemy.vx > -600) {
			enemy.accelerationY(50);
		}
	}

	if (!enemy.flag) {
		if (!rand(0, 5)) {
			enemy.flag = true;
		}
		//enemyBulletを呼び出した回数分、攻撃する
		enemyBullet(enemy, 1000, -10, 10);
	}

	const ptn = [33, 34, 33, 35];
	enemy.snum = ptn[(enemy.count >> 3) & 3];
};
