import { Boss } from '../../../classes/Boss';
import { enemySpriteStart } from '../../../init/spriteInit';
import { enemyMasterIndex } from '../../../init/variables';
import { randArr } from '../../randArr';
import { enemyFunctions } from '../enemyFunctions';
import { bossMoveBattle } from './bossMoveBattle';
import { bossShotDefault } from './bossShotDefault';
import { makeFollowers } from './makeFollowers';

const lvl2 = (boss: Boss) => {
	bossMoveBattle(boss, { pattern: 'h' });

	const speed: number[] =
		boss.hp > boss.maxHp / 3 ? [250, 500, 1000] : [300, 1000, 2000];
	const angles: number[] = [-100, 0, 100];
	const i = boss.changeIndex;

	// 弾の発射
	/*
	 * 横移動
	 * 角度変化あり
	 * 弾速変化あり
	 */
	bossShotDefault(boss, {
		speed: speed[i],
		directionGap: i + 10,
		changeDir: true,
		moveCount: 2,
		moveAngle: angles[(i % angles.length) - 1],
		addMagnitude: randArr([0, 100, 250]),
	});

	makeFollowers(
		boss,
		enemyMasterIndex.yellow,
		enemyFunctions.yellow,
		enemySpriteStart.yellow,
		{ followerNumber: 1 },
	);
};

export { lvl2 };
