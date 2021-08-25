import { Star } from '../Star';

const makeStars = (star: Star[], star_max: number): void => {
	for (let i = 0; i < star_max; i++) {
		star[i] = new Star();
		star[i].draw();
	}
};

export { makeStars };
