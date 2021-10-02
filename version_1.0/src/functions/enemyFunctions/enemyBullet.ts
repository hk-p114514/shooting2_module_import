//敵の弾発射
import { enemyShot, player } from '../../init/variables';
import { rand } from '../random';
import { Enemy } from '../../classes/Enemy';
import { makeEnemyShot } from '../../classes/instance/makeEnemyShot';

export const enemyBullet = (
	enemy: Enemy,
	speed: number,

	{
		xGap = 0,
		yGap = 0,
		gap = 0,
		fixedAngle = NaN,
		delay = 0,
		isRandom = false,
		begin = 0,
		end = 0,
		moveCount = 0,
	} = {},
) => {
	//敵キャラからプレイヤーへの角度
	let angle = Number.isNaN(fixedAngle)
		? Math.atan2(player.y - enemy.y, player.x - enemy.x)
		: fixedAngle;

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

	// とんでくスピード
	const vx = Math.cos(angle) * speed;
	const vy = Math.sin(angle) * speed;

	enemyShot.push(
		makeEnemyShot(15, enemy.x + xGap, enemy.y + yGap, vx, vy, {
			delay: delay || 0,
			moveCount: moveCount,
		}),
	);
};
