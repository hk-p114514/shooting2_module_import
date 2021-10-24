import { Boss } from '../../../classes/Boss';
import { randArr } from '../../randArr';
import { bossMoveBattle } from './bossMoveBattle';
import { bossShotDefault } from './bossShotDefault';

const lvl2 = (boss: Boss) => {
	bossMoveBattle(boss, { pattern: 'h' });

	const speed: number[] = [300, 1000, 1500];
	const angles: number[] = [-100, -90, 0, 90, 100];
	const i = boss.changeIndex;

	// 弾の発射
	/*
	 * 横移動
	 * 角度変化あり
	 * 弾速変化あり
	 */
	bossShotDefault(boss, {
		speed: speed[i],
		directionGap: i,
		changeDir: true,
		moveCount: 2,
		moveAngle: angles[(i % angles.length) - 1],
		addMagnitude: randArr([0, 200, 500]),
	});
};

export { lvl2 };
