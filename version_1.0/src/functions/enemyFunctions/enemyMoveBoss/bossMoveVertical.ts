import { Enemy } from '../../../classes/Enemy';
import { rand } from '../../random';

const bossMoveVertical = (
	boss: Enemy,
	maxVy: number,
	y: number,
	limitY: number,
) => {
	limitY -= boss.diameter;
	const vy = boss.vy;

	// 限界を超えたとき
	if (y < boss.diameter) {
		boss.vy += rand(1, maxVy - vy);
	} else if (y >= limitY) {
		boss.vy -= rand(1, maxVy - vy);
	}
	console.log(`vy : ${boss.vy}`);
};

export { bossMoveVertical };
