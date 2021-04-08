//ピンクのヒヨコの行動パターン ####################################################
import { player } from '../../init/variables';
import { enemyBullet } from './enemyBullet';

export const enemyMovePink = (object: any) => {
	if (!object.flag) {
		if (player.x > object.x && object.vx < 120) {
			object.vx += 4;
		} else if (object.vx > -120) {
			object.vx -= 4;
		}
	} else {
		if (player.x < object.x && object.vx < 400) {
			object.vy -= 30;
		} else if (object.vx > -400) {
			object.vx -= 30;
		}
	}

	if (Math.abs(player.y - object.y) < 100 << 8 && !object.flag) {
		object.flag = true;
		enemyBullet(object, 1000);
	}

	if (object.flag && object.vy > -500) {
		object.vy -= 30;
	}

	//スプライトの変更
	//スプライトのパターン（アニメーションを表現）
	const ptn = [39, 40, 39, 41];
	object.snum = ptn[(object.count >> 3) & 3];
};
