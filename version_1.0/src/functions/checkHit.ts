import { correctionToMapValue } from './correctionToMapValue';

export const checkHit = (
	x1: number,
	y1: number,
	r1: number,
	x2: number,
	y2: number,
	r2: number,
): boolean => {
	let result: boolean = false;
	//円同士の当たり判定

	//底辺
	const a = correctionToMapValue(x1 - x2);
	//高さ
	const b = correctionToMapValue(y1 - y2);
	//半径足す半径
	const r = r1 + r2;

	if (r * r >= a * a + b * b) {
		result = true;
	}

	return result;
};
