//敵の弾発射
import { enemyShot, player } from '../../init/variables';
import { rand } from '../random';
import { EnemyShot } from '../../classes/EnemyShot';

export const enemyBullet = (object: any, speed: number) => {
	let angle, vx, vy;

	//敵キャラからプレイヤーへの角度
	angle = Math.atan2(player.y - object.y, player.x - object.x);

	angle += (rand(-10, 10) * Math.PI) / 180;

	vx = Math.cos(angle) * speed;
	vy = Math.sin(angle) * speed;

	// @ts-ignore
	enemyShot.push(new EnemyShot(15, object.x, object.y, vx, vy, 0));
};
