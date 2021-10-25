import { Enemy } from '../../../classes/Enemy';
import { field_h } from '../../../init/variables';
import { rand } from '../../random';

const bossMoveVertical = (
	boss: Enemy,
	maxVy: number,
	y: number,
	limitY: number = field_h,
) => {
	limitY -= boss.r;
	const ceiling = boss.r;
	const vy = boss.vy;
	let vp = boss.getVp();

	switch (vp) {
		case 0:
			if (vy <= maxVy) {
				// 天井に着いたら、下に移動
				boss.accelerationY(rand(1, maxVy));
			}

			if (y >= limitY) {
				vp = 1;
			}

			break;
		case 1:
			if (vy >= -maxVy) {
				// 床に着いたら上に動く
				boss.accelerationY(-rand(1, maxVy));
			}

			if (y <= ceiling) {
				vp = 0;
			}

			break;
		default:
	}

	boss.vp = vp;
};

export { bossMoveVertical };
