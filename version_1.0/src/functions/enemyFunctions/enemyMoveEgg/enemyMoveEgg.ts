import { Enemy } from '../../../classes/Enemy';
import { enemySpriteStart } from '../../../init/spriteInit';
import { changeSprite } from '../changeSprite';

const enemyMoveEgg = (
	enemy: Enemy,
	spriteStart: number = enemySpriteStart.egg,
) => {
	changeSprite(enemy, spriteStart);
};

export { enemyMoveEgg };
