import { canvas_h, canvas_w, screen_h, screen_w } from '../init/variables';

class Background {
	private image = new Image();
	private width: number = canvas_w;
	private height: number = canvas_h;
	private x: number = this.image.width / 2;
	private y: number = this.image.height;
	private count: number = 0;
	constructor(src: string) {
		this.image.setAttribute('src', src);
	}

	draw(ctx: CanvasRenderingContext2D) {
		const width = this.width;
		const height = this.height;
		ctx.drawImage(
			this.image,
			this.x,
			this.y,
			width,
			height,
			0,
			0,
			width,
			height,
		);
		console.log(`this.y : ${this.y}`);
	}

	update() {
		this.count++;

		if (this.count % 5 === 0) {
			this.count = 0;
			this.y--;
		}
	}
}

export { Background };
