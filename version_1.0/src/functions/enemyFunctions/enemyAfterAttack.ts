import { Enemy } from '../../classes/Enemy/Enemy';
import { Player } from '../../classes/Player';

// approachDirection => 0 : x方向に近づく , 1 : y方向に近づく
// breakOutDirection => 0 : x方向に逃げる , 1 : y方向に逃げる
const enemyAfterAttack = (
	enemy: Enemy,
	player: Player,
	approach: number,
	approachAcceleration: number,
	breakOut: number,
	breakOutAcceleration: number,
	[approachDirection = 0, breakOutDirection = 0],
) => {
	// 攻撃した後の処理
	if (player.x < enemy.x && enemy.vx < approach) {
		if (approachDirection) {
			enemy.accelerationY(approachAcceleration);
		} else {
			enemy.accelerationX(approachAcceleration);
		}
	} else if (enemy.vx > -breakOut) {
		if (breakOutDirection) {
			enemy.accelerationY(breakOutAcceleration);
		} else {
			enemy.accelerationX(breakOutAcceleration);
		}
	}
};

export { enemyAfterAttack };
