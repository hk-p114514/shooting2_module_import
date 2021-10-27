import { Enemy } from '../../../classes/Enemy';
import { enemySpriteStart } from '../../../init/spriteInit';
import { player } from '../../../init/variables';
import { rand } from '../../random';
import { down } from '../enemyMoveShovel/down';

// enemy character's move finger
const enemyMoveFinger = (
	enemy: Enemy,
	sp: number = enemySpriteStart.finger,
) => {
	const speed = rand(500, 1000);
	// down
	down(enemy, speed);

	const addMagnitude = rand(0, 100);
	const maxSpeed = rand(2000, 4000);

	// approaching to the player
	if (enemy.x < player.x && enemy.vx < maxSpeed) {
		enemy.vx += addMagnitude;
	} else if (enemy.x > player.x && enemy.vx > -maxSpeed) {
		enemy.vx -= addMagnitude;
	}

	enemy.snum = sp;
};

export { enemyMoveFinger };
