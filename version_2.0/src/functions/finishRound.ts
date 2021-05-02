import { afterGame } from '../init/variables';
import { database } from '../database';

export const finishRound = (callData: number): void => {
	if (afterGame) {
		afterGame.classList.remove('playing');
		if (callData === 0) {
			database();
		}
	}
};
