//ボスヒヨコ(黄色)の行動パターン ##################################################
import { rand } from '../../random';
import { enemy, enemyShot, field_w } from '../../../init/variables';
import { Enemy } from '../../../classes/Enemy';
import { makeEnemy } from '../../../classes/instance/makeEnemy';
import { makeEnemyShot } from '../../../classes/instance/makeEnemyShot';

export const enemyMoveBoss = (boss: Enemy) => {
	if (!boss.flag && boss.y >> 8 >= 120) {
		boss.flag = 1;
	}

	if (boss.flag === 1) {
		boss.vy -= 1;
		if (boss.vy <= 0) {
			boss.flag = 2;
			boss.vy = 0;
		}
	} else if (boss.flag === 2) {
		if (boss.vx < 300) {
			boss.vx += rand(1, 300);
		}

		if (boss.x >> 8 > field_w - 100) {
			boss.flag = 3;
		}
	} else if (boss.flag === 3) {
		if (boss.vx > -300) {
			boss.vx -= rand(1, 300);
		}

		if (boss.x >> 8 < 100) {
			boss.flag = 2;
		}
	}

	//弾の発射
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
			enemy.push(makeEnemy(3, [boss.x + xGap, boss.y + yGap, vx, vy]));
		}
	}

	//スプライトの変更
	boss.snum = 75;
};
