import {
	afterGame,
	canvas_h,
	canvas_w,
	screen_h,
	screen_w,
} from '../../init/variables';

const deleteCanvas = (canvas: HTMLCanvasElement) => {
	afterGame?.classList.remove('playing');
	canvas.classList.remove('canvas');

	canvas.height = screen_h;
	canvas.width = screen_w;
};

export { deleteCanvas };
