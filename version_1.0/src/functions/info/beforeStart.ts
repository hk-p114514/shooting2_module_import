const beforeStart = (
	ctx: CanvasRenderingContext2D,
	fontSize: number,
	fontFamily: string,
	heightGap: number,
	canvas_w: number,
	canvas_h: number,
) => {
	// ゲーム開始前の表示
	ctx.font = `${fontSize}px ${fontFamily}`;
	ctx.fillStyle = 'lime';

	const message = "PUSH 'SPACE' ";
	const message2 = 'TO GAME START';

	let x = canvas_w / message.length;
	let y = canvas_h / 4;

	ctx.fillText(message, x, y);
	x += message.length / 2;
	y += heightGap;
	ctx.fillText(message2, x, y);
};

export { beforeStart };
