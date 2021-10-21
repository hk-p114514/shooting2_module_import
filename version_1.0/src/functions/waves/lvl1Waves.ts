import { Enemy } from '../../classes/Enemy';
import { makeEnemy } from '../../classes/instance/makeEnemy';
import {
	enemyMasterIndex as e,
	field_w,
	itemMasterIndex as i,
	oneWave,
	vars,
} from '../../init/variables';
import { remodelEnemy } from '../enemyFunctions/remodelEnemy';
import { makeItem } from '../itemFunctions/makeItem';
import { rand } from '../random';
import { secToCount } from '../secToCount';
import { increaseWave } from './increaseWave';
import { isPossibleLvUp } from './isPossibleLvUp';
import { levelUp } from './levelUp';

const lvl1Waves: Function[] = [
	// 0
	(): void => {
		// ピンクのヒヨコのみを出す
		makeEnemy(e.pink, { probability: 30 });

		// 3０秒経過したらウェーブを１段階上げる
		increaseWave(oneWave * 2);
	},

	// 1
	(): void => {
		//  黄色のヒヨコのみを出す
		makeEnemy(e.yellow, { probability: 30 });
		// ２０秒経過したらウェーブを１段階上げる
		increaseWave(oneWave * 2);
	},

	// 2
	(): void => {
		//  黄色とピンクのヒヨコをランダムで出す
		const enemies: number[] = [e.pink, e.yellow];
		makeEnemy(enemies[rand(0, enemies.length - 1)], { probability: 20 });
		if (
			!rand(0, 99) &&
			vars.healCount == 2 &&
			vars.gameCount > secToCount(20)
		) {
			//  20秒経過したら回復アイテムを出す
			makeItem(i.heal);
		}
		// 30秒経過したらウェーブを１段階上げる
		increaseWave(oneWave * 1.5);
	},

	// 3 (ボス)
	(): void => {
		let boss: Enemy;
		//  ボスキャラ出現
		if (vars.gameCount >= secToCount(5) && !vars.bossEncounter) {
			boss = makeEnemy(e.bigYellow, {
				vy: 200,
				x: field_w / 2,
			});
			remodelEnemy(boss, { hp: boss.hp / 4, score: boss.score / 4 });
			vars.bossMhp = boss.hp;
			vars.bossEncounter = true;
		} else if (
			vars.gameCount >= secToCount(90) &&
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
