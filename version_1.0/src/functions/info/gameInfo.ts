//##############################	ゲームの情報を表示	 ##############################
import {
	canvas_h,
	canvas_w,
	ctx,
	player,
	screen_h,
	screen_w,
	vars,
} from '../../init/variables';
import { printInfo } from './printInfo';
import { printSpecialBar } from './printSpecialBar';

const information = () => {
	const fontFamily: string = "'M PLUS Rounded 1c', sans-serif";
	const defaultColor = 'rgba(255, 255, 255, 0.7)';
	if (ctx) {
		ctx.font = `15px ${fontFamily}`;
		ctx.fillStyle = defaultColor;
		const fontSize = 30;

		if (!vars.isPushedSpace) {
			// ゲーム開始前の表示
			ctx.font = `${fontSize}px ${fontFamily}`;
			ctx.fillStyle = 'lime';

			const message = "PUSH 'SPACE' ";
			const message2 = 'TO GAME START';

			let x = canvas_w / message.length;
			let y = canvas_h / 4;

			ctx.fillText(message, x, y);

			x += message.length / 2;
			y += 40;
			ctx.fillText(message2, x, y);
		} else if (!vars.gameStart) {
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
		} else if (vars.gameOver) {
			// ========== ゲームオーバー時のメッセージ ==========

			ctx.font = `${fontSize}px ${fontFamily}`;
			ctx.fillStyle = 'red';

			let message1 = 'GAME OVER';
			let message2 = "push 'R' to one more!";
			let x = canvas_w / 8;
			let y = canvas_h / 4;

			ctx.fillText(message1, x, y);

			x -= 70;
			y += 40;
			ctx.fillStyle = defaultColor;
			ctx.fillText(message2, x, y);

			x = canvas_w / 6;
			ctx.font = 'bold 20px sans-serif';
			ctx.fillText(`SCORE : ${vars.score}`, x, y + 50);
		} else if (vars.gameClear) {
			// ========== ゲームクリア時のメッセージ ==========

			ctx.font = `${fontSize}px ${fontFamily}`;
			ctx.fillStyle = 'Yellow';

			const message1 = 'GAME CLEAR';
			const x = canvas_w / 8;
			let y = canvas_h / 4;

			ctx.fillText(message1, x, y);
			ctx.font = `15px ${fontFamily}`;
			ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';

			y += fontSize;
			const time = (vars.gameTimer / 60).toFixed(1);
			const heightGap = 20;
			const data: string[] = [
				`TIME  : ${time} s`,
				`SCORE : ${vars.score}`,
				`HP  : ${player.hp}`,
			];

			printInfo(data, x, y, heightGap, ctx);
		} else {
			// ゲームプレイ中のメインとなる処理
			vars.drawCount++;

			if (vars.lastTime + 1000 <= Date.now()) {
				vars.fps = vars.drawCount;
				vars.drawCount = 0;
				vars.lastTime = Date.now();
			}

			const heightGap = 20;
			const startY = screen_h - 20;
			{
				const data: string[] = [];
				const startX = 10;

				data.push(`HP : ${player.hp}`);
				data.push(`SCORE : ${vars.score}`);
				ctx.fillStyle = defaultColor;

				const nextHeight = printInfo(data, startX, startY, heightGap, ctx);

				printSpecialBar(player, screen_w, screen_h, startX, nextHeight, ctx);
			}
			{
				//右下にタイマーを表示
				const data: string[] = [];
				const startX = screen_w - 100;
				const time = (vars.gameTimer / 60).toFixed(1);
				ctx.fillStyle = defaultColor;

				data.push(`TIME : ${time}`);
				data.push(`Round : ${vars.gameRound}`);

				printInfo(data, startX, startY, heightGap, ctx);
			}
		}
	}
};

export { information };
