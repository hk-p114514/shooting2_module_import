import { Enemy } from '../../../classes/Enemy';
import { enemyMaster, enemyMasterIndex } from '../../../init/variables';
import { correctionToCalcValue } from '../../correctionToCalcValue';
import { rand } from '../../random';
import { toRad } from '../../toRad';
import { enemyBullet } from '../enemyBullet';

const bossShotDefault = (boss: Enemy) => {
	if (boss.flag > 1) {
		// ボスキャラの半径
		const bossR = enemyMaster[enemyMasterIndex.bigYellow].r;

		//敵キャラから目標への角度(ラジアン)
		const angle = toRad(boss.direction);
		const speed: number = 300;

		const xGap = correctionToCalcValue(Math.cos(angle) * bossR);
		const yGap = correctionToCalcValue(Math.sin(angle) * bossR);

		enemyBullet(boss, speed, {
			delay: 0.5,
			fixedAngle: angle,
			xGap: xGap,
			yGap: yGap,
		});

		boss.direction += boss.directionGap;

		if (boss.direction >= 360) {
			boss.direction = 0;
			if (rand(0, 2) === 0) {
				//360度周期　＆　３分の１の確率で弾の角度を変える
				boss.directionGap = rand(3.5, 60);
			}
		}
	}
};

export { bossShotDefault };
