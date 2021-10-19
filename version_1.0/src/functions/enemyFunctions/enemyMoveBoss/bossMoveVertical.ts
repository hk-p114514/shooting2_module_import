import { Enemy } from '../../../classes/Enemy';
import { rand } from '../../random';

const bossMoveVertical = (
	boss: Enemy,
	maxVy: number,
	y: number,
	limitY: number,
) => {
	limitY -= boss.diameter;
	// まだ下に下がれれば
	if (y < limitY && boss.vy < maxVy) {
		boss.vy += rand(1, maxVy);
	} else if (y >= limitY && boss.vy >= -maxVy) {
		boss.vy -= rand(1, maxVy);
	}
};

export { bossMoveVertical };
