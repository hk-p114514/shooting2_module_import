import { Enemy } from '../../classes/Enemy';

const remodelEnemy = (
	enemy: Enemy,
	{
		x = enemy.x,
		y = enemy.y,
		vx = enemy.vx,
		vy = enemy.vy,
		hp = enemy.hp,
		score = enemy.score,
		moveFunction = enemy.moveFunction,
		directionGap = enemy.directionGap,
	} = {},
): Enemy => {
	enemy.x = x;
	enemy.y = y;
	enemy.vx = vx;
	enemy.vy = vy;
	enemy.maxHp = hp;
	enemy.hp = hp;
	enemy.score = score;
	enemy.moveFunction = moveFunction;
	enemy.directionGap = directionGap;

	return enemy;
};

export { remodelEnemy };
