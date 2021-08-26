import { vars } from '../../init/variables';

const levelUp = (): void => {
	vars.gameRound++;
	vars.gameCount = 0;
	vars.gameWave = 0;
	console.log(
		`Level UP!\ngameCount : ${vars.gameCount}\ngameWave : ${vars.gameWave}`,
	);
};

export { levelUp };
