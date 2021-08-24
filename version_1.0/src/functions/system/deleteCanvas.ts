import { afterGame } from '../../init/variables';

const deleteCanvas = (canvas: HTMLCanvasElement) => {
	afterGame?.classList.remove('playing');
	const nowHeight = canvas.height;
	const nowWidth = canvas.width;
	canvas.height = nowHeight / 2;
	canvas.width = nowWidth / 2;
	canvas.classList.remove('canvas');
};

export { deleteCanvas };
