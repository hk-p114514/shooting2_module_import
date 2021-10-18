import { correctionToMapValue } from './correctionToMapValue';

export const checkHit = (
	px: number,
	py: number,
	pr: number,
	ex: number,
	ey: number,
	er: number,
): boolean => {
	let result: boolean = false;
	//円同士の当たり判定

	//底辺
	let a = correctionToMapValue(px - ex);
	//高さ
	let b = correctionToMapValue(py - ey);
	//半径足す半径
	let r = pr + er;

	if (r * r >= a * a + b * b) {
		result = true;
	}

	return result;
};
