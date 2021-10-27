import { Enemy } from '../../../classes/Enemy';
import { enemySpriteStart } from '../../../init/spriteInit';
import { rand } from '../../random';
import { enemyBullet } from '../enemyBullet';
import { sharedMove } from '../enemyMoveYellow/sharedMove';
import { down } from '../enemyMoveShovel/down';

const enemyMoveKadai = (enemy: Enemy, sp: number = enemySpriteStart.kadai) => {
	// down(enemy, rand(500, 1000));
	sharedMove(enemy, rand(500, 1000), 30);

	const speeds: number[] = [500, 1000, 1500];
	const angles: number[] = [0, 90, 180, 270];
	const select = enemy.count % speeds.length;

	if (!enemy.flag) {
		for (let i = 0; i < rand(1, 30); i++) {
			enemyBullet(enemy, speeds[select], {
				xGap: enemy.r,
				yGap: enemy.r,
				moveAngle: angles[enemy.count % angles.length],
				addMagnitude: speeds[speeds.length - select],
			});
		}
		enemy.flag = true;
	}

	enemy.snum = sp;
};

export { enemyMoveKadai };
