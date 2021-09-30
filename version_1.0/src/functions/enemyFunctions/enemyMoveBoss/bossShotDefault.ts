import { Enemy } from '../../../classes/Enemy';
import { makeEnemyShot } from '../../../classes/instance/makeEnemyShot';
import { enemyShot } from '../../../init/variables';
import { rand } from '../../random';

const bossShotDefault = (boss: Enemy) => {
	if (boss.flag > 1) {
		let angle, vx, vy, bossR;
		bossR = 70;
		//敵キャラから目標への角度(ラジアン)
		angle = (boss.direction * Math.PI) / 180;

		vx = Math.cos(angle) * 300;
		vy = Math.sin(angle) * 300;
		let xGap = (Math.cos(angle) * bossR) << 8;
		let yGap = (Math.sin(angle) * bossR) << 8;
		enemyShot.push(
			makeEnemyShot(15, boss.x + xGap, boss.y + yGap, vx, vy, { delay: 0.5 }),
		);
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
