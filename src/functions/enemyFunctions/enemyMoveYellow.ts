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
		// forループの数だけ弾を発射する
		for (let i = 0; i < 6; i++) {
			// 球のスピード、プレイヤーを狙う弾（自機狙い）を0とした時の弾の広がる範囲
			enemyBullet(object, 1000, -12, 12);
		}
		object.flag = true;
	}

	const ptn = [33, 34, 33, 35];
	object.snum = ptn[(object.count >> 3) & 3];
};
