const gameOver = (
	ctx: CanvasRenderingContext2D,
	fontSize: number,
	fontFamily: string,
	color: string,
	canvas_w: number,
	canvas_h: number,
	heightGap: number,
	score: number,
) => {
	// ========== ゲームオーバー時のメッセージ ==========

	ctx.font = `${fontSize}px ${fontFamily}`;
	ctx.fillStyle = 'red';

	let message1 = 'GAME OVER';
	let message2 = "push 'R' to one more!";
	let x = canvas_w / 8;
	let y = canvas_h / 4;

	ctx.fillText(message1, x, y);

	// x -= 70;
	y += heightGap;
	ctx.fillStyle = color;
	ctx.fillText(message2, x, y);

	x = canvas_w / 6;
	ctx.fillText(`SCORE : ${score}`, x, y + heightGap);
};

export { gameOver };
