import { canvas } from '../../init/variables';

const beforeStart = (
	ctx: CanvasRenderingContext2D,
	fontFamily: string,
	heightGap: number,
	screen_w: number,
	screen_h: number,
) => {
	ctx.beginPath();
	// ゲーム開始前の表示

	// フォント設定は後のctx関数に影響するので関数のはじめに行う
	ctx.font = `200% ${fontFamily}`;
	ctx.fillStyle = 'lime';

	const message1 = "PUSH 'SPACE'";
	const message2 = 'TO GAME START';

	const message1Width = ctx.measureText(message1).width;
	const message2Width = ctx.measureText(message2).width;

	let x = screen_w / 2 - message1Width / 2;
	let y = screen_h / 2;

	ctx.fillText(message1, x, y);

	x = screen_w / 2 - message2Width / 2;
	y += heightGap;
	ctx.fillText(message2, x, y);

	ctx.closePath();
};

export { beforeStart };
