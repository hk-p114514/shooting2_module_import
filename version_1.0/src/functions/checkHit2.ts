const checkHit2 = (
	x2: number,
	y2: number,
	w: number,
	h: number,
	x1: number,
	y1: number,
	r1: number,
): boolean => {
	const left = x2,
		right = x2 + w,
		top = y2,
		bottom = y2 + h;
	if (left - r1 > x1 || right + r1 < x1 || top - r1 > y1 || bottom + r1 < y1) {
		//矩形に円の半径分を足した範囲
		return false;
	}
	if (
		left > x1 &&
		top > y1 &&
		!((left - x1) * (left - x1) + (top - y1) * (top - y1) < r1 * r1)
	) {
		//左上の当たり判定
		return false;
	}
	if (
		right < x1 &&
		top > y1 &&
		!((right - x1) * (right - x1) + (top - y1) * (top - y1) < r1 * r1)
	) {
		//右上の当たり判定
		return false;
	}
	if (
		left > x1 &&
		bottom < y1 &&
		!((left - x1) * (left - x1) + (bottom - y1) * (bottom - y1) < r1 * r1)
	) {
		//左下の当たり判定
		return false;
	}
	if (
		right < x1 &&
		bottom < y1 &&
		!((right - x1) * (right - x1) + (bottom - y1) * (bottom - y1) < r1 * r1)
	) {
		//右下の当たり判定
		return false;
	}
	return true; //すべての条件が外れたときに当たっている
};

export { checkHit2 };
