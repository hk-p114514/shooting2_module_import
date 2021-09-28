//敵の弾発射
import { enemyShot, player } from '../../init/variables';
import { rand } from '../random';
import { Enemy } from '../../classes/Enemy';
import { makeEnemyShot } from '../../classes/instance/makeEnemyShot';

export const enemyBullet = (
	enemy: Enemy,
	speed: number,
	{ gap = 0, delay = 0, isRandom = false, begin = 0, end = 0 } = {},
) => {
	// 射角
	let angle: number = 0,
		// とんでくスピード
		vx: number = 0,
		vy: number = 0;

	//敵キャラからプレイヤーへの角度
	angle = Math.atan2(player.y - enemy.y, player.x - enemy.x);

	if (isRandom) {
		let r = rand(begin, end);
		while (r <= player.r) {
			r = rand(begin, end);
		}

		// 敵キャラからプレイヤーへ向うベクトルを少しずらす
		angle += (r * Math.PI) / 180;
	} else {
		// ランダムで無い場合(真っ直ぐ飛んでく)
		angle += gap ? gap : 0;
	}

	vx = Math.cos(angle) * speed;
	vy = Math.sin(angle) * speed;

	enemyShot.push(makeEnemyShot(15, enemy.x, enemy.y, vx, vy, delay || 0));
};
