import { Enemy } from '../../../classes/Enemy';
import { enemySpriteStart } from '../../../init/spriteInit';
import { changeSprite } from '../changeSprite';

const enemyMoveChicken = (
	enemy: Enemy,
	spriteStart: number = enemySpriteStart.chicken,
) => {
	changeSprite(enemy, spriteStart);
};

export { enemyMoveChicken };
