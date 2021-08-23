import { introduction } from '../functions/introduction';
import { DEBUG } from '../main';
import { gameInit } from './gameInit';

const gameStart = (): void => {
	if (!DEBUG) {
		introduction();
	}
	gameInit();
};

export { gameStart };
