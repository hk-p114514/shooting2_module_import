//敵の弾発射
import { enemyShot, player } from '../../init/variables';
import { rand } from '../random';
import { Enemy } from '../../classes/Enemy';
import { makeEnemyShot } from '../../classes/instance/makeEnemyShot';

export const enemyBullet = (
	object: Enemy,
	speed: number,
	start: number,
	end: number,
	delay?: number,
	hit: boolean = true,
) => {
	let angle, vx, vy;

	//敵キャラからプレイヤーへの角度
	angle = Math.atan2(player.y - object.y, player.x - object.x);

	let r = rand(start, end);
	while (!hit && r <= player.r) {
		r = rand(start, end);
	}

	angle += (r * Math.PI) / 180;

	vx = Math.cos(angle) * speed;
	vy = Math.sin(angle) * speed;

	enemyShot.push(makeEnemyShot(15, object.x, object.y, vx, vy, delay || 0));
};
