import { Boss } from '../../classes/Boss';
import { Enemy } from '../../classes/Enemy';
import { makeEnemy } from '../../classes/instance/makeEnemy';
import {
	enemyMasterIndex as e,
	field_w,
	itemMasterIndex as i,
	oneWave,
	tenSeconds,
	vars,
} from '../../init/variables';
import { remodelEnemy } from '../enemyFunctions/remodelEnemy';
import { makeItem } from '../itemFunctions/makeItem';
import { rand } from '../random';
import { secToCount } from '../secToCount';
import { increaseWave } from './increaseWave';
import { isPossibleLvUp } from './isPossibleLvUp';
import { levelUp } from './levelUp';

const lvl2Waves: Function[] = [
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
		increaseWave(oneWave);
	},

	// 2
	(): void => {
		const enemies = [e.pink, e.yellow];
		//  黄色とピンクのヒヨコをランダムで出す
		makeEnemy(enemies[rand(0, enemies.length - 1)], { probability: 20 });
		if (!rand(0, 99) && vars.healCount == 2 && vars.gameCount > secToCount(20)) {
			//  20秒経過したら回復アイテムを出す
			makeItem(i.heal);
		}
		// 30秒経過したらウェーブを１段階上げる
		increaseWave(oneWave * 3);
	},

	// 3 (ボス)
	(): void => {
		//  ボスキャラ出現
		vars.gameCount++;
		let boss: Enemy;
		if (vars.gameCount >= secToCount(5) && !vars.bossEncounter) {
			boss = makeEnemy(e.bigYellow, {
				vy: 200,
				changeMax: 3,
				isBoss: true,
				x: field_w / 2,
			});
			remodelEnemy(boss, { score: boss.score / 2, hp: boss.hp / 2 });
		} else if (
			vars.gameCount >= secToCount(tenSeconds * 2) &&
			vars.healCount >= 1 &&
			!rand(0, 999)
		) {
			makeItem(i.heal);
		}
		console.log(`count : ${vars.gameCount}\nheal : ${vars.healCount}`);

		// 敵がいなくなったらループ or ゲームクリア
		if (isPossibleLvUp()) {
			levelUp();
			return;
		}
	},
];

export { lvl2Waves };
