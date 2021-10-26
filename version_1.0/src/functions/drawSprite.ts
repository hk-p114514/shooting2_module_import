//スプライトを描画する
import { screen_h, screen_w, vctx, vars } from '../init/variables';
import { sprite } from '../init/spriteInit';
import { images } from '../init/sprite';
import { correctionToMapValue } from './correctionToMapValue';

export const drawSprite = (
	snum: number,
	x: number,
	y: number,
	{ file = 0 } = {},
) => {
	const sx = sprite[snum].x;
	const sy = sprite[snum].y;
	const sw = sprite[snum].w;
	const sh = sprite[snum].h;

	const px = correctionToMapValue(x) - sw / 2;
	const py = correctionToMapValue(y) - sh / 2;
	if (
		px + sw < vars.camera_x ||
		px >= vars.camera_x + screen_w ||
		py + sh < vars.camera_y ||
		py >= vars.camera_y + screen_h
	) {
		return;
	}

	if (vctx) {
		vctx.drawImage(images[file], sx, sy, sw, sh, px, py, sw, sh);
	}
};
