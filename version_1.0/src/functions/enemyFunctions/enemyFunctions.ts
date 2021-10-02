import { enemyMoveBlue } from './enemyMoveBlue/enemyMoveBlue';
import { enemyMoveBoss } from './enemyMoveBoss/enemyMoveBoss';
import { enemyMovePink } from './enemyMovePink/enemyMovePink';
import { enemyMoveRobot } from './enemyMoveRobot/enemyMoveRobot';
import { enemyMoveYellow } from './enemyMoveYellow/enemyMoveYellow';

const enemyFunctions = {
	pink: enemyMovePink,
	yellow: enemyMoveYellow,
	blue: enemyMoveBlue,
	robot: enemyMoveRobot,
	boss: enemyMoveBoss,
};

export { enemyFunctions };
