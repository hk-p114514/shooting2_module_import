import { vars } from '../variables';
import { bgm } from './bgmStart';
const oneSecond: number = 1000;
const downVolume: number = 0.1;
const maxSoundLevel: number = 0.5;

const bgmFadeIn = () => {
	if (bgm.volume < maxSoundLevel) {
		bgm.volume += downVolume;
		setTimeout(bgmFadeIn, oneSecond);
	}
};

const bgmFadeOut = () => {
	if (
		vars.gameOver ||
		(bgm.volume > 0 &&
			bgm.duration - bgm.currentTime <= maxSoundLevel / downVolume)
	) {
		bgm.volume -= downVolume;
		setTimeout(bgmFadeOut, oneSecond);
	}
};

export { bgmFadeIn, bgmFadeOut };
