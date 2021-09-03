import {
	canvas_h,
	canvas_w,
	field_h,
	player,
	screen_h,
	screen_w,
} from '../init/variables';

type Point = { x: number; y: number };

class Background {
	private imageBottom = new Image();
	private imageTop = new Image();
	private count: number = 0;

	private bottom: Point = {
		x: this.imageBottom.width / 2,
		y: 0,
	};

	private top: Point = {
		x: this.imageTop.width / 2,
		y: -screen_h,
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
		this.count++;

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
		// if (this.count % 5 === 0) {
		this.count = 0;
		img.y++;
		// }

		if (img.y > canvas_h) {
			img.y = screen_h;
		}
	};
}

export { Background };
