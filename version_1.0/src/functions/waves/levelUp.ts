import { vars } from '../../init/variables';
import { finishRound } from '../system/finishRound';

const levelUp = (): void => {
	// ゲーム内変数のリセット
	vars.gameRound++;
	vars.gameCount = 0;
	vars.gameWave = 0;
	vars.bossEncounter = false;
	if (vars.gameRound >= vars.maxRound) {
		vars.gameClear = true;
		finishRound(vars.callData);
		vars.callData = 1;
	}
};

export { levelUp };
