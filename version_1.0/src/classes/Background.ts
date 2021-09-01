import { canvas_h, canvas_w, screen_h, screen_w } from '../init/variables';

class Background {
	private imageBottom = new Image();
	private imageTop = new Image();
	private width: number = canvas_w;
	private height: number = canvas_h;
	private x: number = this.imageBottom.width / 2;
	private y: number = -screen_h;
	private count: number = 0;

	constructor(srcBottom: string, srcTop: string) {
		this.imageBottom.setAttribute('src', srcBottom);
		this.imageTop.setAttribute('src', srcTop);
		console.log(`this.image.height : ${this.imageBottom.height}`);
	}

	draw(ctx: CanvasRenderingContext2D) {
		const width = this.width;
		const height = this.height;
		ctx.drawImage(
			this.imageBottom,
			0,
			0,
			width,
			height,
			this.x,
			this.y,
			width,
			height,
		);
	}

	update() {
		this.count++;

		console.log(`y : ${this.y}`);
		if (this.count % 5 === 0) {
			this.count = 0;
			this.y++;
		}
	}
}

export { Background };
