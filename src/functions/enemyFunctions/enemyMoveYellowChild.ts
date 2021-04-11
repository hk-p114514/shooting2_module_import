//ボスヒヨコ（黄色）の子供
import { player } from '../../init/variables';
import { enemyBullet } from './enemyBullet';

export const enemyMoveYellowChild = (object: any) => {
	//出現直後は一瞬動かない
	if (object.count === 10) {
		object.vx = 0;
		object.vy = 0;
	} else if (object.count >= 60) {
		//１秒後、自機を避けて動き始める
		if (object.x > player.x) {
			object.vx -= 5;
		} else {
			object.vx += 5;
		}
		object.vy = 1;

		//更に少し経ったら弾を発射してくる
		if (object.count >= 100) {
			if (!object.reload) {
				enemyBullet(object, 300, 0, 0);
				object.reload = 200;
			}
		}
	}

	const ptn = [50, 52, 50, 53];
	object.snum = ptn[(object.count >> 3) & 3];
};
