import { Enemy } from '../../../classes/Enemy';
import { player } from '../../../init/variables';
import { enemyAfterAttack } from '../enemyAfterAttack';
import { enemyBeforeAttack } from '../enemyBeforeAttack';

const sharedMove = (enemy: Enemy, func: Function): void => {
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

	func();

	if (enemy.flag && enemy.vy > -500) {
		enemy.accelerationY(-breakOutX);
	}
};

export { sharedMove };
