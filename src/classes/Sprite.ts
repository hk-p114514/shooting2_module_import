//スプライトの情報(画像の切り取り)
class Sprite {
	x: number;
	y: number;
	w: number;
	h: number;
	constructor(x: number, y: number, w: number, h: number) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
	}
}

export { Sprite };
