import { Enemy } from '../../classes/Enemy/Enemy';

const changeSprite = (enemy: Enemy, start: number, sprites: number) => {
	// スプライトの変更
	// スプライトのパターン（アニメーションを表現）
	const ptn = [];
	for (let i = 0; i < sprites; i++) {
		ptn.push(start + i);
	}

	enemy.snum = ptn[(enemy.count >> 3) & 3];
};

export { changeSprite };
