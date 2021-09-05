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
import { DEBUG } from '../../main';
import { beforeStart } from './beforeStart';
import { countDown } from './countDown';
import { gameClear } from './gameClear';
import { gameOver } from './gameOver';
import { printInfo } from './printInfo';
import { printSpecialBar } from './printSpecialBar';

const information = () => {
	const fontFamily: string = "'M PLUS Rounded 1c', sans-serif";
	const defaultColor = 'rgba(255, 255, 255, 0.7)';
	if (ctx) {
		ctx.font = `15px ${fontFamily}`;
		ctx.fillStyle = defaultColor;
		const fontSize = 30;

		if (!vars.afterPushedSpace) {
			beforeStart(ctx, fontFamily, 40, screen_w, screen_h);
		} else if (!vars.gameStart) {
			countDown(ctx, fontFamily, screen_w, screen_h);
		} else if (vars.gameOver) {
			gameOver(ctx, fontFamily, defaultColor, screen_w, screen_h, vars.score);
		} else if (vars.gameClear) {
			gameClear(ctx, fontSize, fontFamily);
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
