import { Enemy } from '../../classes/Enemy';
import { Player } from '../../classes/Player';

const enemyBeforeAttack = (
	enemy: Enemy,
	player: Player,
	acceleration: number,
	vxMax: number,
	vxMin: number = -vxMax,
) => {
	//一度攻撃する前の処理
	if (enemy.x < player.x && enemy.vx < vxMax) {
		// プレイヤーより左にいる、かつ、x軸のベクトル量が120以内なら
		// 右に進む（プレイヤーのいる方に進む）
		enemy.accelerationX(acceleration);
	} else if (enemy.vx > vxMin) {
		// プレイヤーより右にいる、かつ、x軸のベクトル量が-120以上なら
		// 左に進む（プレイヤーのいる方に進む）
		enemy.accelerationX(-acceleration);
	}
};

export { enemyBeforeAttack };
