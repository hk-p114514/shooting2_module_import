import { player, vars } from '../init/variables';
import { gameOver } from './system/gameOver';

export const isAttacked = () => {
	if (!player.stun && !player.special) {
		if (player.hp > 0) {
			player.hp -= 1;
			player.stun = 60;
			player.damage = 10;
		} else {
			gameOver(player);
			vars.callData = 1;
		}
	}
};
