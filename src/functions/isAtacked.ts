import { gameOver, player } from '../init/variables';
import { finishRound } from './finishRound';

export const isAttacked = (object: any) => {
	player.hp -= 1;
	if (player.hp <= -1) {
		// @ts-ignore
		gameOver = true;
		finishRound();
	} else {
		object.hp--;
		if (object.hp < 0) {
			object.kill = true;
		}
		player.damage = 10;
		player.stun = 60;
	}
};
