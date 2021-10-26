import { enemyMoveBlue } from './enemyMoveBlue/enemyMoveBlue';
import { enemyMoveBoss } from './enemyMoveBoss/enemyMoveBoss';
import { enemyMoveChicken } from './enemyMoveChicken/enemyMoveChicken';
import { enemyMoveEgg } from './enemyMoveEgg/enemyMoveEgg';
import { enemyMoveLastBoss } from './enemyMoveLastBoss/enemyMoveLastBoss';
import { enemyMovePink } from './enemyMovePink/enemyMovePink';
import { enemyMoveRobot } from './enemyMoveRobot/enemyMoveRobot';
import { enemyMoveShell } from './enemyMoveShell/enemyMoveShell';
import { enemyMoveBigShovel } from './enemyMoveShovel/enemyMoveBigShovel';
import { enemyMoveShovel } from './enemyMoveShovel/enemyMoveShovel';
import { enemyMoveYellow } from './enemyMoveYellow/enemyMoveYellow';

const enemyFunctions = {
	pink: enemyMovePink,
	yellow: enemyMoveYellow,
	blue: enemyMoveBlue,
	robot: enemyMoveRobot,
	boss: enemyMoveBoss,
	chicken: enemyMoveChicken,
	egg: enemyMoveEgg,
	shell: enemyMoveShell,
	lastBoss: enemyMoveLastBoss,
	shovel: enemyMoveShovel,
	bigShovel: enemyMoveBigShovel,
};

export { enemyFunctions };
