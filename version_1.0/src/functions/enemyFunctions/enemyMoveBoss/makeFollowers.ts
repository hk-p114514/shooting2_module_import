import { Enemy } from '../../../classes/Enemy';
import { makeEnemy } from '../../../classes/instance/makeEnemy';
import { bossEnemy } from '../../../init/variables';
import { correctionToCalcValue } from '../../correctionToCalcValue';
import { toRad } from '../../toRad';

const makeFollowers = (boss: Enemy, follower: number) => {
	if (boss.hp < boss.maxHp / 2) {
		let count = boss.count % (60 * 5);
		if (count / 10 < 4 && count % 10 === 0) {
			//雑魚キャラを出現
			let angle, vx, vy, bossR;
			bossR = bossEnemy.r;
			//敵キャラから目標への角度
			// angle = 90 + 45 - ((count / 10) * 30 * Math.PI) / 180;
			angle = toRad((count / 10) * 30);

			vx = Math.cos(angle) * 300;
			vy = Math.sin(angle) * 300;
			let xGap = correctionToCalcValue(Math.cos(angle) * bossR);
			let yGap = correctionToCalcValue(Math.sin(angle) * bossR);
			makeEnemy(follower, {
				x: boss.x + xGap,
				y: boss.y + yGap,
				vx: vx,
				vy: vy,
			});
		}
	}
};

export { makeFollowers };
