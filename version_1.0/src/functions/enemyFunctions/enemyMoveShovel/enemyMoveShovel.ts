import { Enemy } from '../../../classes/Enemy';
import { enemySpriteStart } from '../../../init/spriteInit';
import { changeSprite } from '../changeSprite';

const enemyMoveShovel = (shovel: Enemy, speed: number = 1000) => {
	shovel.vy = speed;

	changeSprite(shovel, enemySpriteStart.shovel);
};

export { enemyMoveShovel };
