//##############################	ゲームの情報を表示	 ##############################
import {
	canvas_h,
	canvas_w,
	ctx,
	drawCount,
	fps,
	gameClear,
	gameOver,
	gameTimer,
	lastTime,
	player,
	score,
	screen_h,
	screen_w,
} from '../init/variables';

export const information = () => {
	ctx.font = '15px Impact';
	ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
	if (gameOver) {
		ctx.font = '30px Verdana';
		ctx.fillStyle = 'red';
		let message1 = 'GAME OVER';
		let message2 = "push 'R' to one more!";
		let x = canvas_w / 8;
		let y = canvas_h / 4;
		ctx.fillText(message1, x, y);
		x -= 70;
		y += 40;
		ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
		ctx.fillText(message2, x, y);
		ctx.font = '15px Verdana';
		ctx.fillText(`SCORE : ${score}`, 10, screen_h - 40);
		ctx.fillText(`HP : ${player.hp}`, 10, screen_h - 60);
	} else if (gameClear) {
		//ゲームクリア時のメッセージ
		ctx.font = '30px Verdana';
		ctx.fillStyle = 'Yellow';
		let message1 = 'GAME CLEAR';
		let x = canvas_w / 8;
		let y = canvas_h / 4;

		ctx.fillText(message1, x, y);
		ctx.font = '15px Verdana';
		ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
		y += 30;
		let time = (gameTimer / 60).toFixed(2);
		ctx.fillText(`TIME  : ${time} s`, x, y);
		ctx.fillText(`SCORE : ${score}`, x, y + 20);
		ctx.fillText(`HP  : ${player.hp}`, x, y + 40);
	} else {
		// @ts-ignore
		drawCount++;
		if (lastTime + 1000 <= Date.now()) {
			// @ts-ignore
			fps = drawCount;
			// @ts-ignore
			drawCount = 0;
			// @ts-ignore
			lastTime = Date.now();
		}

		ctx.fillText(`HP : ${player.hp}`, 10, screen_h - 20);
		ctx.fillText(`SCORE : ${score}`, 10, screen_h - 40);

		//右下にタイマーを表示
		let time = (gameTimer / 60).toFixed(2);
		ctx.fillText(`TIME : ${time}`, screen_w - 90, screen_h - 20);

		//タイマーの上にラウンド数を表示
		// ctx.fillText(`Round : ${gameRound}`, screen_w - 86, screen_h - 40);

		if (player.special) {
			//特殊攻撃の残り時間バーのサイズ
			let size = ((screen_w / 4) * player.specialTime) / player.specialMaxTime;
			let maxSize = screen_w / 4;

			//残り時間を表示
			ctx.fillStyle = 'rgba(0, 255, 0, 0.8)';
			ctx.fillRect(10, screen_h - 70, size, 10);

			ctx.strokeStyle = 'lime';
			ctx.strokeRect(10, screen_h - 70, maxSize, 10);
		} else if (!player.special) {
			ctx.fillText(`SPECIAL : ${player.specialMagazine}`, 10, screen_h - 60);
		}
	}
};
