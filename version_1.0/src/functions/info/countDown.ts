import { vars } from '../../init/variables';

const countDown = (
	ctx: CanvasRenderingContext2D,
	fontFamily: string,
	screen_w: number,
	screen_h: number,
) => {
	ctx.beginPath();
	// ゲーム開始直前のカウントダウン処理
	ctx.font = `500% ${fontFamily}`;
	ctx.fillStyle = 'lime';

	const message: string | number = vars.gameStartCount || 'GO!';
	const messageWidth = ctx.measureText(message.toString()).width;

	let x = screen_w / 2 - messageWidth / 2;
	let y = screen_h / 2;

	ctx.fillText(message.toString(), x, y);

	if (vars.gameStartCount <= 0) {
		setTimeout(() => {
			vars.gameStart = true;
		}, 1000);
	}
	ctx.closePath();
};

export { countDown };
