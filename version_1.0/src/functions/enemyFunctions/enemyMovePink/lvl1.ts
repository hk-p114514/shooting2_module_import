import { Enemy } from '../../../classes/Enemy/Enemy';
import { player } from '../../../init/variables';
import { changeSprite } from '../changeSprite';
import { enemyAfterAttack } from '../enemyAfterAttack';
import { enemyBeforeAttack } from '../enemyBeforeAttack';
import { enemyBullet } from '../enemyBullet';

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

	if (Math.abs(player.y - enemy.y) < 300 << 8 && !enemy.flag) {
		enemy.flag = true;
		//enemyBulletを呼び出した回数分、攻撃する
		enemyBullet(enemy, 1000, -10, 10);
	}

	if (enemy.flag && enemy.vy > -500) {
		enemy.accelerationY(-30);
	}

	// スプライトの変更
	// スプライトのパターン（アニメーションを表現）
	changeSprite(enemy, 39, 4);
};
