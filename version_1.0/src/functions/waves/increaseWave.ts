import { vars } from '../../init/variables';

const tenSeconds = 60;

const increaseWave = (seconds: number) => {
	if (vars.gameCount > tenSeconds * seconds) {
		// ２０秒経過したらウェーブを１段階上げる
		vars.gameWave++;
		vars.gameCount = 0;
	}
};

export { increaseWave };
