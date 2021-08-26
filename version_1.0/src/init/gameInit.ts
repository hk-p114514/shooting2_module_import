// ゲームの初期化
import { gameSpeed, vars } from './variables';
import { drawAll, updateAll } from '../functions/useObjectProcess';
import { information } from '../functions/info/gameInfo';
import { makeStars } from '../classes/instance/makeStars';
import { waves } from '../functions/waves/waves';

export const gameInit = () => {
	// Starクラスのインスタンスを作成
	// makeStars(star, star_max);
	// ゲームループ
	const gameLoop = (): void => {
		if (!(vars.gameClear || vars.gameOver)) {
			// 段階に分けて、要求する速度を上げて行く（段々速くなる）
			if (vars.starRequest > vars.starSpeed) {
				vars.starSpeed++;
			} else if (vars.starRequest < vars.starSpeed) {
				vars.starRequest--;
			}

			if (vars.gameStart) {
				vars.gameTimer++;
				vars.gameCount++;
				waves[vars.gameRound][vars.gameWave]();
			}
		}
		updateAll();
		drawAll();
		information();
	};
	// ゲームループ呼び出し
	setInterval(gameLoop, gameSpeed);
};
