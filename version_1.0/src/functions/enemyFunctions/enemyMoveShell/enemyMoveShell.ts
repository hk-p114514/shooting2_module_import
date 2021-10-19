import { Enemy } from '../../../classes/Enemy';
import { enemySpriteStart } from '../../../init/spriteInit';
import { changeSprite } from '../changeSprite';

const enemyMoveShell = (
	enemy: Enemy,
	spriteStart: number = enemySpriteStart.shell,
) => {
	changeSprite(enemy, spriteStart);
};

export { enemyMoveShell };
