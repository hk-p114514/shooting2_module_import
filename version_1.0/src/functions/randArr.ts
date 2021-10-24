import { rand } from './random';

const randArr = (arr: number[]): number => {
	return arr[rand(0, arr.length - 1)];
};
export { randArr };
