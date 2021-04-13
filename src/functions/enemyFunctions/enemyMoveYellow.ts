//黄色のヒヨコの行動パターン ####################################################
import { player } from '../../init/variables';
import { rand } from '../random';
import { enemyBullet } from './enemyBullet';

export const enemyMoveYellow = (object: any) => {
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
		//連射率を操作
		if (rand(0, 4) === 1) {
			object.flag = true;
		}
		enemyBullet(object, 1000, -10, 10);
	}

	const ptn = [33, 34, 33, 35];
	object.snum = ptn[(object.count >> 3) & 3];
};
