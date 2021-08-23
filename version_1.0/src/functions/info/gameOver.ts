import { printInfo } from './printInfo';

const gameOver = (
	ctx: CanvasRenderingContext2D,
	fontFamily: string,
	color: string,
	screen_w: number,
	screen_h: number,
	heightGap: number,
	score: number,
) => {
	// ========== ゲームオーバー時のメッセージ ==========

	ctx.font = `200% ${fontFamily}`;
	ctx.fillStyle = 'red';

	const message1 = 'GAME OVER';
	const message2 = "push 'R' to Play Again!";
	const message3 = `SCORE : ${score}`;

	const message1Width = ctx.measureText(message1).width;
	// let x = screen_w / 2 - message1Width / 2;
	let y = screen_h / 2;

	const data = [message1, message2, message3];

	data.forEach((info, i) => {
		if (i == 1) {
			ctx.fillStyle = color;
		} else {
			ctx.fillStyle = '';
		}
		const width = ctx.measureText(info).width;
		const x = screen_w / 2 - width / 2;
		ctx.fillText(info, x, y);
		y += heightGap;
	});
};

export { gameOver };
