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

	return enemy;
};

export { remodelEnemy };
