import { Enemy } from '../../../classes/Enemy';
import { rand } from '../../random';

const bossMoveVertical = (
	boss: Enemy,
	maxVy: number,
	y: number,
	limitY: number,
) => {
	limitY -= boss.diameter;
	const ceiling = boss.diameter;
	const vy = boss.vy;

	switch (boss.vp) {
		case 0:
			if (vy <= maxVy) {
				// 天井に着いたら、下に移動
				boss.accelerationY(rand(1, maxVy));
			}

			if (y >= limitY) {
				boss.vp = 1;
			}
			break;
		case 1:
			if (vy >= -maxVy) {
				// 床に着いたら上に動く
				boss.accelerationY(-rand(1, maxVy));
			}

			if (y <= ceiling) {
				boss.vp = 0;
			}
			break;
		default:
	}

	console.log(`vy : ${boss.vy}`);
};

export { bossMoveVertical };
