//ボスヒヨコ（黄色）の子供
import { Enemy } from '../../../classes/Enemy/Enemy';
import { player } from '../../../init/variables';
import { changeSprite } from '../changeSprite';
import { enemyBullet } from '../enemyBullet';

export const enemyMoveYellowChild = (enemy: Enemy) => {
	//出現直後は一瞬動かない
	if (enemy.count <= 10) {
		enemy.vx = 0;
		enemy.vy = 0;
	} else if (enemy.count >= 60) {
		//１秒後、自機を避けて動き始める
		if (!player.compareValues('x', enemy.x)) {
			enemy.vx -= 5;
		} else {
			enemy.vx += 5;
		}
		enemy.vy = 1;

		//更に少し経ったら弾を発射してくる
		if (enemy.count >= 100) {
			if (!enemy.reload) {
				enemyBullet(enemy, 300, 0, 0);
				enemy.reload = 200;
			}
		}
	}

	changeSprite(enemy, 50, 4);
};
