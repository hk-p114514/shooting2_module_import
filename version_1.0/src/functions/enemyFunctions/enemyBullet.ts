//敵の弾発射
import { enemyShot, player } from '../../init/variables';
import { rand } from '../random';
import { Enemy } from '../../classes/Enemy';
import { makeEnemyShot } from '../../classes/instance/makeEnemyShot';
import { toRad } from '../toRad';
import { shotSprite } from '../../init/spriteInit';

export const enemyBullet = (
	enemy: Enemy,
	speed: number,
	{
		/* ================ */
		// 発射する位置をずらす
		xGap = 0,
		yGap = 0,
		/* ================ */
		gap = 0, // 発射する角度を時機狙いからずらす
		fixedAngle = NaN, // 発射角が決まっている場合は直接指定できる(rad)
		delay = 0, // 発射遅延
		/* ランダム発射オプション */
		// ランダムで発射する場合true
		isRandom = false,
		begin = -player.r,
		end = player.r,
		/* ================== */
		moveCount = 0, // (moveCount)秒 後に弾を動作させる
		moveAngle = 30, // 弾の軌道を変える角度
		addMagnitude = 0, // 弾の軌道を変える際に変化させるベクトル量
	} = {},
) => {
	//敵キャラからプレイヤーへの角度
	let angle = Number.isNaN(fixedAngle)
		? Math.atan2(player.y - enemy.y, player.x - enemy.x)
		: fixedAngle;

	if (isRandom) {
		let r = rand(begin, end);

		// 敵キャラからプレイヤーへ向うベクトルを少しずらす
		// 角度をラジアンに直す
		angle += toRad(r);
	} else {
		gap = toRad(gap);
		// ランダムで無い場合(真っ直ぐ飛んでく)
		angle += gap ? gap : 0;
	}

	// とんでくスピード
	const vx = Math.cos(angle) * speed;
	const vy = Math.sin(angle) * speed;

	enemyShot.push(
		makeEnemyShot(shotSprite.es2_1, enemy.x + xGap, enemy.y + yGap, vx, vy, {
			delay: delay || 0,
			moveCount: moveCount,
			moveAngle: moveAngle,
			addMagnitude: addMagnitude,
		}),
	);
};
