import { gameOver, player } from '../init/variables';
import { finishGame } from './finishGame';

export const isAttacked = (object: any) => {
	player.hp -= 1;
	if (player.hp <= -1) {
		// @ts-ignore
		gameOver = true;
		finishGame();
	} else {
		object.hp--;
		if (object.hp < 0) {
			object.kill = true;
		}
		player.damage = 10;
		player.stun = 60;
	}
};
