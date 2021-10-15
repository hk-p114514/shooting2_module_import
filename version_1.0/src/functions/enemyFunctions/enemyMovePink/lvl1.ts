import { Enemy } from '../../../classes/Enemy';
import { player } from '../../../init/variables';
import { enemyBeforeAttack } from '../enemyBeforeAttack';
import { enemyBullet } from '../enemyBullet';

export const lvl1 = (enemy: Enemy) => {
	if (!enemy.flag) {
		enemyBeforeAttack(enemy, player, 4, 120);
	} else {
		// 攻撃した後の処理
		if (player.x < enemy.x && enemy.vx < 400) {
			// player <- objectの配置なら
			// <- object <- player のようにplayerを通過して場外へ逃げる
			enemy.accelerationX(-30);
		} else if (enemy.vx > -400) {
			//反対
			enemy.accelerationX(30);
		}
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
	const ptn = [39, 40, 39, 41];
	enemy.snum = ptn[(enemy.count >> 3) & 3];
};
