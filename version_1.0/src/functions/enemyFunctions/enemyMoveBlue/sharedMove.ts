'use strict';

import { Enemy } from '../../../classes/Enemy';
import { field_h, player } from '../../../init/variables';
import { enemyAfterAttack } from '../enemyAfterAttack';
import { enemyBeforeAttack } from '../enemyBeforeAttack';
import { enemyBullet } from '../enemyBullet';

const sharedMove = (
	enemy: Enemy,
	{
		distance = 300,
		attackTimes = 50,
		bulletSpeed = 250,
		moveCount = 2,
		limitY = -field_h / 2,
		func = () => {},
	} = {},
) => {
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

	if (enemy.isAttackable(player.y, distance, false) && !enemy.flag) {
		// プレイヤーと自分の距離が300以内で、自分が攻撃していなかったら
		enemy.flag = true;
		//enemyBulletを呼び出した回数分、攻撃する
		for (let i = 0; i < attackTimes; i++) {
			enemyBullet(enemy, bulletSpeed, { gap: i, moveCount: moveCount });
		}
		func();
	}

	if (enemy.flag && enemy.y > limitY) {
		// もう攻撃した & 自分のy座標がlimitYより大きい時
		enemy.accelerationY(-breakOutX);
	}
};

export { sharedMove };
