import { Enemy } from '../../../classes/Enemy';
import { player } from '../../../init/variables';
import { rand } from '../../random';
import { changeSprite } from '../changeSprite';
import { enemyAfterAttack } from '../enemyAfterAttack';
import { enemyBeforeAttack } from '../enemyBeforeAttack';
import { enemyBullet } from '../enemyBullet';

const lvl2 = (enemy: Enemy): void => {
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
		if (!rand(0, 2)) {
			//連射率を操作
			enemy.flag = true;
		}

		//enemyBulletを呼び出した回数分、攻撃する
		enemyBullet(enemy, 1000, { isRandom: true, begin: -10, end: 10 });
	}

	if (enemy.flag && enemy.vy > -500) {
		enemy.accelerationY(-30);
	}

	//スプライトの変更
	//スプライトのパターン（アニメーションを表現）
	changeSprite(enemy, 39, 4);
};

export { lvl2 };
