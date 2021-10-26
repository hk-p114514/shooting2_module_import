import { Enemy } from '../../../classes/Enemy';
import { enemySpriteStart } from '../../../init/spriteInit';
import { rand } from '../../random';
import { down } from './down';

const enemyMoveBigShovel = (
	enemy: Enemy,
	sp: number = enemySpriteStart.bigShovel,
) => {
	down(enemy, rand(500, 1000));
	enemy.snum = sp;
};
export { enemyMoveBigShovel };
