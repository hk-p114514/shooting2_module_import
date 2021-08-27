import { vars } from '../../init/variables';

const tenSeconds = 60;

const increaseWave = (seconds: number) => {
	// seconds秒経ったら、
	if (vars.gameCount > tenSeconds * seconds) {
		// 段階を一つ上げ、
		vars.gameWave++;
		// 段階毎のカウントをリセットする
		vars.gameCount = 0;
	}
};

export { increaseWave };
