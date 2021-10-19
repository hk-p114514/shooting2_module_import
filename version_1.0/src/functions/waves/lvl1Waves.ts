import { makeEnemy } from '../../classes/instance/makeEnemy';
import {
	enemyMasterIndex as e,
	itemMasterIndex as i,
	vars,
} from '../../init/variables';
import { oneWave, tenSeconds } from '../../main';
import { remodelEnemy } from '../enemyFunctions/remodelEnemy';
import { makeItem } from '../itemFunctions/makeItem';
import { rand } from '../random';
import { increaseWave } from './increaseWave';
import { isPossibleLvUp } from './isPossibleLvUp';
import { levelUp } from './levelUp';

const lvl1Waves: Function[] = [
	// 0
	(): void => {
		// ピンクのヒヨコのみを出す
		makeEnemy(e.pink, { probability: 30 });
		makeEnemy(e.egg, { probability: 30 });
		makeEnemy(e.shell, { probability: 30 });
		makeEnemy(e.chicken, { probability: 30 });

		// 3０秒経過したらウェーブを１段階上げる
		increaseWave(oneWave);
	},

	// 1
	(): void => {
		//  黄色のヒヨコのみを出す
		makeEnemy(e.yellow, { probability: 30 });
		// ２０秒経過したらウェーブを１段階上げる
		increaseWave(oneWave);
	},

	// 2
	(): void => {
		//  黄色とピンクのヒヨコをランダムで出す
		const enemies: number[] = [e.pink, e.yellow];
		makeEnemy(enemies[rand(0, enemies.length - 1)], { probability: 20 });
		if (
			!rand(0, 99) &&
			vars.healCount == 2 &&
			vars.gameCount > tenSeconds * 20
		) {
			//  20秒経過したら回復アイテムを出す
			makeItem(i.heal);
		}
		// 30秒経過したらウェーブを１段階上げる
		increaseWave(oneWave);
	},

	// 3 (ボス)
	(): void => {
		//  ボスキャラ出現
		if (vars.gameCount >= tenSeconds * 5 && !vars.bossEncounter) {
			const boss = makeEnemy(e.bigYellow, { vy: 200 });
			remodelEnemy(boss, { hp: 2 });
			vars.bossEncounter = true;
		} else if (
			vars.gameCount >= tenSeconds * 90 &&
			vars.healCount == 1 &&
			!rand(0, 99)
		) {
			makeItem(i.heal);
		}

		// 敵がいなくなったらループ or ゲームクリア
		if (isPossibleLvUp()) {
			levelUp();
			return;
		}
	},
];

export { lvl1Waves };
