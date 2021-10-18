import { Enemy } from '../../../classes/Enemy';
import { sharedMove } from './sharedMove';

const lvl1 = (enemy: Enemy) => {
	// ======== TEMPLATE ========
	// const breakOutX: number = 30;
	// // 敵キャラが降下可能な最大限の高さ(低さ)
	// const limitY: number = -field_h / 2;
	// // 敵とプレイヤーが近づく距離
	// const distance: number = 300;
	// // 攻撃回数
	// const attackTimes: number = 50;
	// // 弾速
	// const bulletSpeed: number = 250;
	// // 弾の軌道変化までの秒数
	// const moveCount: number = 2;

	sharedMove(enemy);
};

export { lvl1 };
