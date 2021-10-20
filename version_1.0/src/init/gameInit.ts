// ゲームの初期化
import { gameSpeed, vars } from './variables';
import { drawAll, updateAll } from '../functions/useObjectProcess';
import { information } from '../functions/info/gameInfo';
import { waves } from '../functions/waves/waves';
import { bgmStart } from './music/bgmStart';

export const gameInit = () => {
	// // Starクラスのインスタンスを作成
	// //makeStars(star, star_max);
	// ゲームループ

	// bgmループ
	bgmStart();
	const gameLoop = (): void => {
		if (!(vars.gameClear || vars.gameOver) && vars.gameStart) {
			waves[vars.gameRound][vars.gameWave]();
			vars.gameTimer++;
			vars.gameCount++;
		}
		updateAll();
		drawAll();
		information();
	};
	// ゲームループ呼び出し
	setInterval(gameLoop, gameSpeed);
};
