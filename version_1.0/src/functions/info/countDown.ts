import { vars } from '../../init/variables';

const countDown = (
	ctx: CanvasRenderingContext2D,
	fontFamily: string,
	canvas_w: number,
	canvas_h: number,
) => {
	// ゲーム開始直前のカウントダウン処理
	ctx.font = `100px ${fontFamily}`;
	ctx.fillStyle = 'lime';

	let x = canvas_w / 5;
	let y = canvas_h / 4;
	if (vars.gameStartCount === 0) {
		x = canvas_w / 8;
	}
	ctx.fillText(`${vars.gameStartCount || 'GO!'}`, x, y);

	if (vars.gameStartCount <= 0) {
		setTimeout(() => {
			vars.gameStart = true;
		}, 1000);
	}
};

export { countDown };
