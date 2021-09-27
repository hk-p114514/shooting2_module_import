import { Enemy } from '../../../classes/Enemy';
import { player } from '../../../init/variables';
import { changeSprite } from '../changeSprite';
import { enemyAfterAttack } from '../enemyAfterAttack';
import { enemyBeforeAttack } from '../enemyBeforeAttack';
import { enemyBullet } from '../enemyBullet';

const lvl2 = (enemy: Enemy) => {
	const accelerationX = 30;
	const vxMax = 300;
	const breakOutAcceleration = 50;
	if (!enemy.flag) {
		enemyBeforeAttack(enemy, player, accelerationX, vxMax, -vxMax * 2);
	} else {
		enemyAfterAttack(
			enemy,
			player,
			vxMax,
			accelerationX,
			-vxMax * 2,
			breakOutAcceleration,
			[1, 1],
		);
	}

	if (!enemy.flag) {
		// forループの数だけ弾を発射する
		for (let i = 0; i < 8; i++) {
			// 球のスピード、プレイヤーを狙う弾（自機狙い）を0とした時の弾の広がる範囲
			enemyBullet(enemy, 850, -16, 16);
		}
		enemy.flag = true;
	}

	changeSprite(enemy, 33, 4);
};

export { lvl2 };
