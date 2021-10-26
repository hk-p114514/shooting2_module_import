import { toRad } from './toRad';

const drawRotateImage = (
	ctx: CanvasRenderingContext2D,
	file: HTMLImageElement,
	sx: number,
	sy: number,
	sw: number,
	sh: number,
	px: number,
	py: number,
) => {
	ctx.save();

	ctx.translate(sx, sy);

	ctx.rotate(toRad(90));

	ctx.drawImage(file, sx, sy, sw, sh, px, py, sw, sh);

	ctx.restore();
};

export { drawRotateImage };
