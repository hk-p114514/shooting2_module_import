import { Enemy } from '../../../classes/Enemy';
import { player } from '../../../init/variables';
import { rand } from '../../random';
import { enemyBullet } from '../enemyBullet';

export const lvl1 = (object: Enemy) => {
	if (!object.flag) {
		if (player.x > object.x && object.vx < 300) {
			object.vx += 30;
		} else if (object.vx > -600) {
			object.vx -= 30;
		}
	} else {
		if (player.x < object.x && object.vx < 300) {
			object.vy += 30;
		} else if (object.vx > -600) {
			object.vx += 50;
		}
	}

	if (!object.flag) {
		if (!rand(0, 5)) {
			object.flag = true;
		}
		//enemyBulletを呼び出した回数分、攻撃する
		enemyBullet(object, 1000, -10, 10);
	}

	const ptn = [33, 34, 33, 35];
	object.snum = ptn[(object.count >> 3) & 3];
};
