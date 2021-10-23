'use strict';

import { EnemyShot } from '../EnemyShot';

const makeEnemyShot = (
	snum: number,
	x: number,
	y: number,
	vx: number,
	vy: number,
	{ delay = 0, moveCount = 0, moveAngle = 0, addMagnitude = 0 } = {},
): EnemyShot => {
	return new EnemyShot(
		snum,
		x,
		y,
		vx,
		vy,
		delay,
		moveCount,
		moveAngle,
		addMagnitude,
	);
};

export { makeEnemyShot };
