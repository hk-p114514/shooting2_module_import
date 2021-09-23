import { vars } from '../../init/variables';
import { finishRound } from '../system/finishRound';

const levelUp = (): void => {
	vars.gameRound++;
	vars.gameCount = 0;
	vars.gameWave = 0;
	if (vars.gameRound >= vars.maxRound) {
		vars.gameClear = true;
		finishRound(vars.callData);
		vars.callData = 1;
	}
};

export { levelUp };
