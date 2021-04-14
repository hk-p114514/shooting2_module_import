//##############################	ゲームの情報を表示	 ##############################
import {
	canvas_h,
	canvas_w,
	ctx,
	player,
	screen_h,
	screen_w,
	vars,
} from '../init/variables';
import { rand } from './random';

export const information = () => {
	ctx.font = '15px Impact';
	ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';

	if (!vars.isPushedSpace) {
		ctx.font = '30px Verdana';
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
		ctx.font = '100px Verdana';
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
		// ゲームオーバー時のメッセージ

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

		x = canvas_w / 6;
		ctx.font = 'bold 20px sans-serif';
		ctx.fillText(`SCORE : ${vars.score}`, x, y + 50);
	} else if (vars.gameClear) {
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
		let time = (vars.gameTimer / 60).toFixed(2);
		ctx.fillText(`TIME  : ${time} s`, x, y);
		ctx.fillText(`SCORE : ${vars.score}`, x, y + 20);
		ctx.fillText(`HP  : ${player.hp}`, x, y + 40);
		ctx.fillText(`SPECIAL : ${player.specialMagazine}`, x, y + 60);
	} else {
		vars.drawCount++;

		if (vars.lastTime + 1000 <= Date.now()) {
			vars.fps = vars.drawCount;

			vars.drawCount = 0;

			vars.lastTime = Date.now();
		}

		if (player.hp === player.maxHp) {
			ctx.fillStyle = 'rgba(0, 255, 0, 0.9)';
		}
		ctx.fillText(`HP : ${player.hp}`, 10, screen_h - 20);
		ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';

		ctx.fillText(`SCORE : ${vars.score}`, 10, screen_h - 40);

		//右下にタイマーを表示
		let time = (vars.gameTimer / 60).toFixed(2);
		ctx.fillText(`TIME : ${time}`, screen_w - 90, screen_h - 20);

		//タイマーの上にラウンド数を表示
		// ctx.fillText(`Round : ${vars.gameRound}`, screen_w - 86, screen_h - 40);
		
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
		//POWERの表示
		ctx.fillText(`POWER : ${player.power}`, 10, screen_h - 80);
		let zettaiti = Math.abs(255-player.power*20);
		ctx.fileStyle = 'rgba(255,255,${zettaiti},0.8)';
		
	}
};
