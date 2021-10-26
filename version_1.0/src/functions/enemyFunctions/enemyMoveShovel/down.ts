import { Enemy } from '../../../classes/Enemy';

const down = (enemy: Enemy, vy: number) => {
	enemy.vy = vy;
};

export { down };
