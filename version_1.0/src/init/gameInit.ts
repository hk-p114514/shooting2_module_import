//ゲームの初期化
import { enemy, gameSpeed, star, star_max, item, vars } from './variables';
import { drawAll, updateAll } from '../functions/useObjectProcess';
import { finishRound } from '../functions/finishRound';
import { rand } from '../functions/random';
import { Star } from '../classes/Star';
import { makeItem } from '../functions/itemFunctions/makeItem';
import { makeEnemy } from '../classes/instance/makeEnemy';
import { information } from '../functions/info/gameInfo';

export const gameInit = () => {
	//Starクラスのインスタンスを作成
	for (let i = 0; i < star_max; i++) {
		star[i] = new Star();
		star[i].draw();
	}

	let healCount = 2;

	//ゲームループ
	const gameLoop = () => {
		if (!(vars.gameClear || vars.gameOver)) {
			//段階に分けて、要求する速度を上げて行く（段々速くなる）
			if (vars.starRequest > vars.starSpeed) {
				vars.starSpeed++;
			} else if (vars.starRequest < vars.starSpeed) {
				vars.starRequest--;
			}

			if (vars.gameStart) {
				vars.gameTimer++;
				vars.gameCount++;
				//敵を出現
				if (vars.gameWave === 0) {
					if (!rand(0, 30)) {
						//ピンクのヒヨコのみを出す
						enemy.push(makeEnemy(0, []));
					}

					if (vars.gameCount > 60 * 30) {
						//3０秒経過したらウェーブを１段階上げる
						vars.gameWave++;
						vars.gameCount = 0;
						vars.starSpeed = 200;
					}
				} else if (vars.gameWave === 1) {
					if (!rand(0, 30)) {
						// 黄色のヒヨコのみを出す
						enemy.push(makeEnemy(1, []));
					}

					if (vars.gameCount > 60 * 20) {
						//２０秒経過したらウェーブを１段階上げる
						vars.gameWave++;
						vars.gameCount = 0;
						vars.starSpeed = 300;
					}
				} else if (vars.gameWave === 2) {
					if (rand(0, 20) === 1) {
						// 黄色とピンクのヒヨコをランダムで出す
						enemy.push(makeEnemy(rand(0, 1), []));
					}
					if (
						rand(1, 100) === 1 &&
						healCount == 2 &&
						vars.gameCount > 60 * 20
					) {
						// 20秒経過したら回復アイテムを出す
						item.push(makeItem(0, 0, 400));
						healCount = 1;
					}

					if (vars.gameCount > 60 * 30) {
						//30秒経過したらウェーブを１段階上げる
						vars.gameWave++;
						vars.gameCount = 0;
						vars.starSpeed = 600;
					}
				} else if (vars.gameWave === 3) {
					vars.gameCount++;

					// ボスキャラ出現
					if (vars.gameCount === 60 * 5) {
						enemy.push(makeEnemy(2, [, , , 200]));
						vars.bossEncount = true;
					} else if (
						vars.gameCount >= 60 * 90 &&
						healCount == 1 &&
						rand(1, 100) === 1
					) {
						item.push(makeItem(0));
						healCount--;
					}

					//敵がいなくなったらループ or ゲームクリア <
					if (enemy.length === 0 && vars.gameCount > 60 * 6) {
						//8秒程度経過したらゲームクリアを表示する
						setTimeout(() => {
							vars.gameClear = true;
							finishRound(vars.callData);
							vars.callData = 1;
						}, 8000);
					}
				}
			}
		}

		updateAll();
		drawAll();
		information();
	};

	const width = document.body.clientWidth;
	scrollBy(width / 4, 0);
	//ゲームループ呼び出し
	setInterval(gameLoop, gameSpeed);
};
