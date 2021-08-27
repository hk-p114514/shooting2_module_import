import {
	canvas_h,
	canvas_w,
	player,
	screen_h,
	screen_w,
	vars,
} from '../../init/variables';
import { printInfo } from './printInfo';

const gameClear = (
	ctx: CanvasRenderingContext2D,
	fontSize: number,
	fontFamily: string,
) => {
	// ========== ゲームクリア時のメッセージ ==========

	ctx.font = `200% ${fontFamily}`;
	ctx.fillStyle = 'Yellow';

	const time = (vars.gameTimer / 60).toFixed(1);
	const data: string[] = [
		'GAME CLEAR',
		`TIME  : ${time} s`,
		`SCORE : ${vars.score}`,
		`HP  : ${player.hp}`,
	];

	let y = screen_h / 2;

	data.forEach((info, i) => {
		if (i === 0) {
			ctx.fillStyle = 'yellow';
		} else {
			ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
		}
		const measure = ctx.measureText(info);
		const width = measure.width;
		const x = screen_w / 2 - width / 2;
		ctx.fillText(info, x, y);

		const height =
			measure.actualBoundingBoxAscent + measure.actualBoundingBoxDescent;

		y += height * 1.5;
	});
};

export { gameClear };
