import { rand } from './random';

const neverNumber = (
	min: number,
	max: number,
	never: number /* 絶対に選択させたくない数値 */,
): number => {
	let n = rand(min, max);

	return n;
};

export { neverNumber };
