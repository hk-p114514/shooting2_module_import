import { use } from './bgmStart';

const bgmFadeIn = () => {
	if (use.volume < 0.5) {
		use.volume += 0.1;
		setTimeout(bgmFadeIn, 1000);
	}
};

export { bgmFadeIn };
