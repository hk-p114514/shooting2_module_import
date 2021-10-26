import { Enemy } from '../../../classes/Enemy';
import { enemySpriteStart } from '../../../init/spriteInit';
import { randArr } from '../../randArr';
import { rand } from '../../random';
import { down } from './down';

const enemyMoveShovel = (
	enemy: Enemy,
	sp: number = enemySpriteStart.shovel,
) => {
	down(enemy, rand(500, 2000));
	const sprites = [sp, sp + 1];
	const i = enemy.count;

	enemy.snum = i <= 10 ? sp : rand(0, 99) ? enemy.snum : randArr(sprites);
};

export { enemyMoveShovel };
