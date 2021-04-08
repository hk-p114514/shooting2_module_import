//スプライトを描画する
import {
	camera_x,
	camera_y,
	screen_h,
	screen_w,
	vctx,
} from '../init/variables';
import { sprite } from '../init/spriteInit';
import { spriteImage } from '../init/sprite';

export const drawSprite = (snum: number, x: number, y: number) => {
	let sx = sprite[snum].x;
	let sy = sprite[snum].y;
	let sw = sprite[snum].w;
	let sh = sprite[snum].h;

	let px = (x >> 8) - sw / 2;
	let py = (y >> 8) - sh / 2;
	if (
		px + sw < camera_x ||
		px >= camera_x + screen_w ||
		py + sh < camera_y ||
		py >= camera_y + screen_h
	)
		return;

	if (vctx) {
		vctx.drawImage(spriteImage, sx, sy, sw, sh, px, py, sw, sh);
	}
};
