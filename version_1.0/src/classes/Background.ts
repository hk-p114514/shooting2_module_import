import { canvas_h, canvas_w, screen_h, screen_w } from '../init/variables';

type Point = { x: number; y: number };

class Background {
	private imageBottom = new Image();
	private imageTop = new Image();
	private width: number = canvas_w;
	private height: number = canvas_w + screen_h;
	private bottom: Point = { x: this.imageBottom.width / 2, y: 0 };
	private count: number = 0;

	constructor(srcBottom: string, srcTop: string) {
		this.imageBottom.setAttribute('src', srcBottom);
		this.imageTop.setAttribute('src', srcTop);
	}

	draw(ctx: CanvasRenderingContext2D) {
		const width = this.width;
		const height = this.height;
		ctx.drawImage(
			this.imageBottom,
			this.bottom.x,
			this.bottom.y,
			width,
			height,
			0,
			0,
			width,
			height,
		);
	}

	update() {
		this.count++;

		console.log(`y : ${this.bottom.y}`);
		this.scroll(this.bottom);
	}

	scroll = (img: Point) => {
		if (this.count % 5 === 0) {
			this.count = 0;
			img.y--;
		}
	};
}

export { Background };
