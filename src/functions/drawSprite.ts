//スプライトを描画する
import { screen_h, screen_w, vctx, vars } from '../init/variables';
import { sprite } from '../init/spriteInit';
import { images } from '../init/sprite';

export const drawSprite = (
	snum: number,
	x: number,
	y: number,
	other?: number
) => {
	let sx = sprite[snum].x;
	let sy = sprite[snum].y;
	let sw = sprite[snum].w;
	let sh = sprite[snum].h;

	let px = (x >> 8) - sw / 2;
	let py = (y >> 8) - sh / 2;
	if (
		px + sw < vars.camera_x ||
		px >= vars.camera_x + screen_w ||
		py + sh < vars.camera_y ||
		py >= vars.camera_y + screen_h
	) {
		return;
	}

	if (vctx) {
		if (other === undefined) {
			vctx.drawImage(images[0], sx, sy, sw, sh, px, py, sw, sh);
		} else {
			vctx.drawImage(images[other], sx, sy, sw, sh, px, py, sw, sh);
		}
	}
};
