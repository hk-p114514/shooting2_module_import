import { enemyMoveBlue } from './enemyMoveBlue/enemyMoveBlue';
import { enemyMoveBoss } from './enemyMoveBoss/enemyMoveBoss';
import { enemyMoveChicken } from './enemyMoveChicken/enemyMoveChicken';
import { enemyMoveEgg } from './enemyMoveEgg/enemyMoveEgg';
import { enemyMovePink } from './enemyMovePink/enemyMovePink';
import { enemyMoveRobot } from './enemyMoveRobot/enemyMoveRobot';
import { enemyMoveShell } from './enemyMoveShell/enemyMoveShell';
import { enemyMoveYellow } from './enemyMoveYellow/enemyMoveYellow';

type enemyName = {
	pink: string;
	yellow: string;
	blue: string;
	robot: string;
	boss: string;
	chicken: string;
	egg: string;
	shell: string;
};

const enemyFunctions = {
	pink: enemyMovePink,
	yellow: enemyMoveYellow,
	blue: enemyMoveBlue,
	robot: enemyMoveRobot,
	boss: enemyMoveBoss,
	chicken: enemyMoveChicken,
	egg: enemyMoveEgg,
	shell: enemyMoveShell,
};

export { enemyFunctions, enemyName };
