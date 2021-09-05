import {
	canvas_h,
	canvas_w,
	field_h,
	field_increase,
	screen_h,
	screen_w,
} from '../init/variables';

type Point = { x: number; y: number; sx: number; sy: number; height: number };

class Background {
	private imageBottom = new Image();
	private imageTop = new Image();

	private topStart = {
		x: 0,
		y: -(screen_h + field_increase * 2),
	};
	private bottomStart = { x: 0, y: 0 };

	private bottom: Point = {
		...this.bottomStart,
		sx: this.bottomStart.x,
		sy: this.bottomStart.y,
		height: this.imageBottom.height,
	};
	private top: Point = {
		...this.topStart,
		sx: this.topStart.x,
		sy: this.topStart.y,
		height: this.imageTop.height,
	};

	constructor(srcBottom: string, srcTop: string) {
		this.imageBottom.setAttribute('src', srcBottom);
		this.imageTop.setAttribute('src', srcTop);
	}

	draw(ctx: CanvasRenderingContext2D) {
		this.drawBg(ctx, this.imageBottom, this.bottom);
		this.drawBg(ctx, this.imageTop, this.top);
	}

	update() {
		this.scroll(this.bottom);
		this.scroll(this.top);
	}

	drawBg = (
		ctx: CanvasRenderingContext2D,
		image: HTMLImageElement,
		p: Point,
	) => {
		const width = screen_w / 2;
		ctx.drawImage(
			image,
			width,
			0,
			canvas_w,
			canvas_h,
			p.x,
			p.y,
			canvas_w,
			canvas_h,
		);
	};

	scroll = (img: Point) => {
		img.y++;

		if (img.y > field_h) {
			img.y = -(screen_h + field_increase * 2);
		}
	};
}

export { Background };
