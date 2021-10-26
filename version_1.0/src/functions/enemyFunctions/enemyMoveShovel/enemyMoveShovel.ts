import { Enemy } from '../../../classes/Enemy';
import { enemySpriteStart } from '../../../init/spriteInit';
import { changeSprite } from '../changeSprite';

const enemyMoveShovel = (enemy: Enemy) => {
	console.log('CLEAER');

	enemy.vy = 1000;

	enemy.snum = enemySpriteStart.shovel;
};

export { enemyMoveShovel };
