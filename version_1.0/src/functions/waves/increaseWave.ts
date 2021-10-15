import { vars } from '../../init/variables';

const tenSeconds = 60;

const increaseWave = (seconds: number) => {
	console.log('increaseWave');

	// seconds秒経ったら、
	if (vars.gameCount > tenSeconds * seconds) {
		// 段階を一つ上げ、
		vars.gameWave++;
		// 段階毎のカウントをリセットする
		vars.gameCount = 0;
	}
	console.log('end increaseWave');
};

export { increaseWave };
