import { afterGame } from '../init/variables';
import { database } from '../database';

export const finishGame = (): void => {
	if (afterGame) {
		afterGame.classList.remove('playing');
	}
	database();
};
