//敵の弾発射
import { enemyShot, player } from '../../init/variables';
import { rand } from '../random';
import { EnemyShot } from '../../classes/EnemyShot';
import { Enemy } from '../../classes/Enemy';

export const enemyBullet = (
	object: Enemy,
	speed: number,
	start: number,
	end: number,
	delay?: number
) => {
	let angle, vx, vy;

	//敵キャラからプレイヤーへの角度
	angle = Math.atan2(player.y - object.y, player.x - object.x);

	angle += (rand(start, end) * Math.PI) / 180;

	vx = Math.cos(angle) * speed;
	vy = Math.sin(angle) * speed;

	enemyShot.push(new EnemyShot(15, object.x, object.y, vx, vy, delay || 0));
};
