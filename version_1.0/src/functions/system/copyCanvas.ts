import { screen_h, screen_w, vars } from '../../init/variables';

const copyCanvas = (
	ctx: CanvasRenderingContext2D | null,
	vcanvas: HTMLCanvasElement,
) => {
	//仮想画面から実際の画面にコピー
	if (ctx) {
		ctx.drawImage(
			vcanvas,
			vars.camera_x,
			vars.camera_y,
			screen_w,
			screen_h,
			0,
			0,
			screen_w,
			screen_h,
		);
	}
};

export { copyCanvas };
