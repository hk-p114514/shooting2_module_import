// ゲームの初期化
import {
	enemy,
	gameSpeed,
	star,
	star_max,
	item,
	vars,
	player,
} from './variables';
import { drawAll, updateAll } from '../functions/useObjectProcess';
import { finishRound } from '../functions/system/finishRound';
import { rand } from '../functions/random';
import { makeItem } from '../functions/itemFunctions/makeItem';
import { makeEnemy } from '../classes/instance/makeEnemy';
import { information } from '../functions/info/gameInfo';
import { makeStars } from '../classes/instance/makeStars';

export const gameInit = () => {
	// Starクラスのインスタンスを作成
	// makeStars(star, star_max);
	let healCount = 2;
	const tenSeconds = 60;
	// ゲームループ
	const gameLoop = () => {
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
				if (vars.gameWave === 0) {
					// ピンクのヒヨコのみを出す
					if (!rand(0, 30)) {
						enemy.push(makeEnemy(0, []));
					}
					if (vars.gameCount > tenSeconds * 30) {
						// 3０秒経過したらウェーブを１段階上げる
						vars.gameWave++;
						vars.gameCount = 0;
						vars.starSpeed = 200;
					}
				} else if (vars.gameWave === 1) {
					//  黄色のヒヨコのみを出す
					if (!rand(0, 30)) {
						enemy.push(makeEnemy(1, []));
					}
					if (vars.gameCount > tenSeconds * 20) {
						// ２０秒経過したらウェーブを１段階上げる
						vars.gameWave++;
						vars.gameCount = 0;
						vars.starSpeed = 300;
					}
				} else if (vars.gameWave === 2) {
					//  黄色とピンクのヒヨコをランダムで出す
					if (rand(0, 20) === 1) {
						enemy.push(makeEnemy(rand(0, 1), []));
					}
					if (
						!rand(0, 99) &&
						healCount == 2 &&
						vars.gameCount > tenSeconds * 20
					) {
						//  20秒経過したら回復アイテムを出す
						item.push(makeItem(0, 0, 400));
						healCount = 1;
					}
					if (vars.gameCount > tenSeconds * 30) {
						// 30秒経過したらウェーブを１段階上げる
						vars.gameWave++;
						vars.gameCount = 0;
						vars.starSpeed = 600;
					}
				} else if (vars.gameWave === 3) {
					//  ボスキャラ出現
					vars.gameCount++;
					if (vars.gameCount === tenSeconds * 5) {
						enemy.push(makeEnemy(2, [, , , 200]));
						vars.bossEncounter = true;
					} else if (
						vars.gameCount >= tenSeconds * 90 &&
						healCount == 1 &&
						!rand(0, 99)
					) {
						item.push(makeItem(0));
						healCount--;
					}
					// 敵がいなくなったらループ or ゲームクリア <
					if (enemy.length === 0 && vars.gameCount > tenSeconds * 6) {
						//  8秒程度経過 && 最終ラウンドまでクリアしたらゲームクリアを表示する
						setTimeout(() => {
							vars.gameClear = true;
							vars.gameRound++;
							if (vars.gameRound >= vars.maxRound) {
								finishRound(vars.callData);
								vars.callData = 1;
							}
						}, 8000);
					}
				}
			}
		}
		updateAll();
		drawAll();
		information();
	};
	// ゲームループ呼び出し
	setInterval(gameLoop, gameSpeed);
};
