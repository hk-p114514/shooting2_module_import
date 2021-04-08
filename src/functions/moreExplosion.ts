//派手な爆発
import { explosion } from '../init/variables';
import { Explosion } from '../classes/Explosion';
import { rand } from './random';

const moreExplosion = (x: number, y: number, vx: number, vy: number) => {
	// @ts-ignore
	explosion.push(new Explosion(0, x, y, vx, vy));
	for (let i = 0; i < 10; i++) {
		let evx = vx + (rand(-10, 10) >> 8);
		let evy = vy + (rand(-10, 10) >> 8);
		// @ts-ignore
		explosion.push(new Explosion(i, x, y, evx, evy));
	}
};

export { moreExplosion };
