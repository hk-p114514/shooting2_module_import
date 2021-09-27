import { makeEnemy } from '../../../classes/instance/makeEnemy';
import { enemy, item, vars } from '../../../init/variables';
import { oneWave, tenSeconds } from '../../../main';
import { makeItem } from '../../itemFunctions/makeItem';
import { rand } from '../../random';
import { increaseWave } from '../increaseWave';
import { levelUp } from '../levelUp';

const testWave: Function[] = [
	// 0
	(): void => {
		// 群青色ののみを出す
		if (!rand(0, 30)) {
			enemy.push(makeEnemy(4, []));
		}
		// 3０秒経過したらウェーブを１段階上げる
		increaseWave(oneWave);
	},

	// 1
	(): void => {
		// 群青色のヒヨコのみを出す
		if (!rand(0, 30)) {
			enemy.push(makeEnemy(4, []));
		}
		// ２０秒経過したらウェーブを１段階上げる
		increaseWave(oneWave);
	},

	// 2
	(): void => {
		// 群青色のヒヨコのみを出す
		if (rand(0, 20) === 1) {
			enemy.push(makeEnemy(4, []));
		}
		if (
			!rand(0, 99) &&
			vars.healCount == 2 &&
			vars.gameCount > tenSeconds * 20
		) {
			//  20秒経過したら回復アイテムを出す
			item.push(makeItem(0, 0, 400));
			vars.healCount = 1;
		}
		// 30秒経過したらウェーブを１段階上げる
		increaseWave(oneWave);
	},

	// 3 (ボス)
	(): void => {
		//  ボスキャラ出現
		vars.gameCount++;
		if (vars.gameCount === tenSeconds * 5) {
			// 群青色のヒヨコを出す
			enemy.push(makeEnemy(4, []));
			vars.bossEncounter = true;
		} else if (
			vars.gameCount >= tenSeconds * 90 &&
			vars.healCount == 1 &&
			!rand(0, 99)
		) {
			item.push(makeItem(0));
			vars.healCount--;
		}
		// 敵がいなくなったらループ or ゲームクリア
		if (enemy.length === 0 && vars.gameCount > tenSeconds * 6) {
			levelUp();
			return;
		}
	},
];

export { testWave };
