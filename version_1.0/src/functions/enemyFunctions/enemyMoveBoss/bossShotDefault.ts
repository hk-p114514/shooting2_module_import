import { Boss } from '../../../classes/Boss';
import { LastBoss } from '../../../classes/LastBoss';
import { enemyMaster, enemyMasterIndex } from '../../../init/variables';
import { correctionToCalcValue } from '../../correctionToCalcValue';
import { rand } from '../../random';
import { toRad } from '../../toRad';
import { enemyBullet } from '../enemyBullet';

const bossShotDefault = (
	boss: Boss | LastBoss,
	{
		speed = 300,
		directionGap = 0,
		changeDir = false,
		changeFrequency = 3,
		minDir = 3.5,
		maxDir = 360,
		moveCount = 0,
		moveAngle = 30,
		addMagnitude = 0,
	} = {},
): void => {
	if (boss.flag > 1) {
		// ボスキャラの半径
		const bossR = enemyMaster[enemyMasterIndex.bigYellow].r;

		//敵キャラから目標への角度(ラジアン)
		const angle = toRad(boss.direction);

		const xGap = correctionToCalcValue(Math.cos(angle) * bossR);
		const yGap = correctionToCalcValue(Math.sin(angle) * bossR);

		enemyBullet(boss, speed, {
			delay: 0.5,
			fixedAngle: angle,
			xGap: xGap,
			yGap: yGap,
			moveCount: moveCount,
			moveAngle: moveAngle,
			addMagnitude: addMagnitude,
		});

		boss.direction += boss.directionGap + directionGap;

		if (boss.direction >= 360) {
			boss.direction = 0;
			if (!rand(0, changeFrequency - 1) && changeDir) {
				//360度周期　＆　３分の１の確率で弾の角度を変える
				boss.directionGap = rand(minDir, maxDir);
			}
		}
	}
};

export { bossShotDefault };
