import { Enemy } from '../../../classes/Enemy';
import { makeEnemy } from '../../../classes/instance/makeEnemy';
import { enemySpriteStart } from '../../../init/spriteInit';
import { bossEnemy } from '../../../init/variables';
import { correctionToMapValue } from '../../correctionToMapValue';
import { secToCount } from '../../secToCount';
import { toRad } from '../../toRad';
import { enemyFunctions } from '../enemyFunctions';

const makeFollowers = (
	boss: Enemy,
	follower: number,
	{ followerNumber = 4, vx = 300, vy = 300, makeFollowerCount = 1 } = {},
) => {
	if (boss.hp < boss.maxHp / 2) {
		// ボスの体力が半分以下かつ
		const count = boss.count % secToCount(5);
		makeFollowerCount = count / (makeFollowerCount * 10);

		if (makeFollowerCount < followerNumber && count % 10 === 0) {
			//雑魚キャラを出現
			const bossR = boss.r;

			//敵キャラから目標への角度
			const angle = toRad(makeFollowerCount * 30);

			vx = Math.cos(angle) * vx;
			vy = Math.sin(angle) * vy;

			const x = correctionToMapValue(Math.cos(angle) * bossR + boss.x);
			const y = correctionToMapValue(Math.sin(angle) * bossR + boss.y);
			const e = makeEnemy(follower, {
				x: x,
				y: y,
				vx: vx,
				vy: vy,
			});

			e.moveFunction = enemyFunctions.chicken;
			e.moveFunctionArg = enemySpriteStart.chicken;
		}
	}
};

export { makeFollowers };
