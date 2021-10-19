import { Enemy } from '../../../classes/Enemy';
import { player } from '../../../init/variables';
import { enemyAfterAttack } from '../enemyAfterAttack';
import { enemyBeforeAttack } from '../enemyBeforeAttack';

const sharedMove = (
	enemy: Enemy,
	{
		func = () => {},
		acceleration = 4,
		vxMax = 120,
		approachX = 400,
		breakOutX = 30,
		escapeVy = -500,
	} = {},
): void => {
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

	func();

	// 攻撃した、かつ、vyが-500よりも大きいとき
	if (enemy.flag && enemy.vy > escapeVy) {
		// 上に浮上して逃げる
		enemy.accelerationY(-breakOutX);
	}
};

export { sharedMove };
