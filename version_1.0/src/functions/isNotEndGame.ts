import { vars } from '../init/variables';

const isNotEndGame = (): boolean => {
	return !(vars.gameOver || vars.gameClear);
};

export { isNotEndGame };
