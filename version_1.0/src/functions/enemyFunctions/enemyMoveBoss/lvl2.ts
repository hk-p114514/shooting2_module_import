import { Enemy } from '../../../classes/Enemy';
import { bossMoveBattle } from './bossMoveBattle';
import { bossMoveDown } from './bossMoveDown';

const lvl2 = (boss: Enemy) => {
	bossMoveBattle(boss);
};

export { lvl2 };
