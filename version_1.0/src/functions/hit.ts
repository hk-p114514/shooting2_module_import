export const checkHit = (
	px: number,
	py: number,
	pr: number,
	ex: number,
	ey: number,
	er: number
) => {
	//円同士の当たり判定

	//底辺
	let a = (px - ex) >> 8;
	//高さ
	let b = (py - ey) >> 8;
	//半径足す半径
	let r = pr + er;

	if (r * r >= a * a + b * b) {
		return true;
	}
};

/*
	矩形同士の当たり判定
	let pLeft = px >> 8;
	let pRight = pLeft + pw;
	let pTop = py >> 8;
	let pBottom = pTop + ph;

	let eLeft = ex >> 8;
	let eRight = eLeft + ew;
	let eTop = ey >> 8;
	let eBottom = eTop + eh;

	if (
		pLeft <= eRight &&
		pRight >= eLeft &&
		pTop <= eBottom &&
		pBottom >= eTop
	) {
		return true;
	} else {
		return false;
	}
	*/
