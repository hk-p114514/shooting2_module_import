'use strict';

import { shotSprite } from '../../init/spriteInit';
import { Bullet } from '../Bullet';

const makeBullet = (
	x: number,
	y: number,
	vx: number,
	vy: number,
	snum: number = shotSprite.es2_1,
): Bullet => {
	return new Bullet(x, y, vx, vy, snum);
};

export { makeBullet };
