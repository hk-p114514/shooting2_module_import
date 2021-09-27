import { enemyMoveBlue } from '../../functions/enemyFunctions/enemyMoveBlue/enemyMoveBlue';
import { enemyMoveBoss } from '../../functions/enemyFunctions/enemyMoveBoss/enemyMoveBoss';
import { enemyMoveYellowChild } from '../../functions/enemyFunctions/enemyMoveBoss/enemyMoveYellowChild';
import { enemyMovePink } from '../../functions/enemyFunctions/enemyMovePink/enemyMovePink';
import { enemyMoveYellow } from '../../functions/enemyFunctions/enemyMoveYellow/enemyMoveYellow';

const enemyFunctions = [
	enemyMovePink,
	enemyMoveYellow,
	enemyMoveBoss,
	enemyMoveYellowChild,
	enemyMoveBlue,
];

export { enemyFunctions };
