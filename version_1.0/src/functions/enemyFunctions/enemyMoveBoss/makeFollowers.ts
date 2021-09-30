import { Enemy } from '../../../classes/Enemy';
import { makeEnemy } from '../../../classes/instance/makeEnemy';
import { enemy } from '../../../init/variables';

const makeFollowers = (boss: Enemy, follower: number) => {
	if (boss.hp < boss.maxHp / 2) {
		let count = boss.count % (60 * 5);
		if (count / 10 < 4 && count % 10 === 0) {
			//雑魚キャラを出現
			let angle, vx, vy, bossR;
			bossR = 70;
			//敵キャラから目標への角度
			angle = 90 + 45 - ((count / 10) * 30 * Math.PI) / 180;

			vx = Math.cos(angle) * 300;
			vy = Math.sin(angle) * 300;
			let xGap = (Math.cos(angle) * bossR) << 8;
			let yGap = (Math.sin(angle) * bossR) << 8;
			enemy.push(makeEnemy(follower, [boss.x + xGap, boss.y + yGap, vx, vy]));
		}
	}
};

export { makeFollowers };
