import { Player } from '../../classes/Player';
import { vars } from '../../init/variables';
import { finishRound } from './finishRound';

const gameOver = (player: Player): void => {
	player.hp = -1;
	vars.gameOver = true;
	finishRound(vars.callData);
};

export { gameOver };
