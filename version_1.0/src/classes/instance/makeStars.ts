import { Star } from '../Star';

const makeStars = (
	star: Star[],
	star_max: number,
	speed: number = 30,
): void => {
	for (let i = 0; i < star_max; i++) {
		star[i] = new Star(speed);
		star[i].draw();
	}
};

export { makeStars };
