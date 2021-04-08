//ゲームの初期化
import {
	bossEncount,
	enemy,
	field_w,
	gameClear,
	gameCount,
	gameOver,
	gameSpeed,
	gameTimer,
	gameWave,
	star,
	star_max,
	starRequest,
	starSpeed,
} from './variables';
import { information } from '../functions/gameInfo';
import { drawAll, updateAll } from '../functions/useObjectProcess';
import { finishGame } from '../functions/finishGame';
import { Enemy } from '../classes/Enemy';
import { rand } from '../functions/random';
import { Star } from '../classes/Star';

export const gameInit = () => {
	//Starクラスのインスタンスを作成
	for (let i = 0; i < star_max; i++) {
		star[i] = new Star();
		star[i].draw();
	}

	//ゲームループ
	const gameLoop = () => {
		if (!(gameClear || gameOver)) {
			// @ts-ignore
			gameTimer++;
			// @ts-ignore
			gameCount++;

			//段階に分けて、要求する速度を上げて行く（段々速くなる）
			if (starRequest > starSpeed) {
				// @ts-ignore
				starSpeed++;
			} else if (starRequest < starSpeed) {
				// @ts-ignore
				starRequest--;
			}

			//敵を出現
			if (gameWave === 0) {
				if (rand(0, 30) === 1) {
					//ピンクのヒヨコのみを出す
					enemy.push(
						// @ts-ignore
						new Enemy(0, rand(0, field_w) << 8, 0, 0, rand(300, 1200))
					);
				}

				if (gameCount > 60 * 30) {
					//２０秒経過したらウェーブを１段階上げる
					// @ts-ignore
					gameWave++;
					// @ts-ignore
					gameCount = 0;
					// @ts-ignore
					starSpeed = 200;
				}
			} else if (gameWave === 1) {
				if (rand(0, 30) === 1) {
					enemy.push(
						// @ts-ignore
						new Enemy(1, rand(0, field_w) << 8, 0, 0, rand(300, 1200))
					);
				}

				if (gameCount > 60 * 20) {
					//２０秒経過したらウェーブを１段階上げる
					// @ts-ignore
					gameWave++;
					// @ts-ignore
					gameCount = 0;
					// @ts-ignore
					starSpeed = 300;
				}
			} else if (gameWave === 2) {
				if (rand(0, 20) === 1) {
					enemy.push(
						// @ts-ignore
						new Enemy(rand(0, 1), rand(0, field_w) << 8, 0, 0, rand(300, 1200))
					);
				}

				if (gameCount > 60 * 30) {
					//30秒経過したらウェーブを１段階上げる
					// @ts-ignore
					gameWave++;
					// @ts-ignore
					gameCount = 0;
					// @ts-ignore
					starSpeed = 600;
				}
			} else if (gameWave === 3) {
				// @ts-ignore
				gameCount++;

				// ボスキャラ出現
				if (gameCount === 60 * 5) {
					// @ts-ignore
					enemy.push(new Enemy(2, (field_w / 2) << 8, 0, 0, 200));
					// @ts-ignore
					bossEncount = true;
				}

				//敵がいなくなったらループ or ゲームクリア <
				if (enemy.length === 0 && gameCount > 60 * 6) {
					//8秒程度経過したらゲームクリアを表示する
					setTimeout(() => {
						// @ts-ignore
						gameClear = true;
						finishGame();
					}, 8000);
				}
			}
		}

		updateAll();
		drawAll();
		information();
	};

	//ゲームループ呼び出し
	setInterval(gameLoop, gameSpeed);
};
