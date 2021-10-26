import { EnemyShot } from './EnemyShot';

class LastBossShot extends EnemyShot {
	constructor(
		snum: number,
		x: number,
		y: number,
		vx: number,
		vy: number,
		delay: number = 0,
		moveCount: number = 0,
		moveAngle: number = 0,
		addMagnitude: number = 0,
	) {
		super(snum, x, y, vx, vy, delay, moveCount, moveAngle, addMagnitude);
	}

	update = (): void => {};
}

export { LastBossShot };
