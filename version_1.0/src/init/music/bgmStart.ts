import { rand } from '../../functions/random';
import { bgmFadeIn } from './bgmFadeIn';
const bgmNumber: number = 3;
const BGM_NUMBERS = Array.from({ length: bgmNumber }, (_, i) => ++i);

const makeBGM = (bgm: string[]): HTMLAudioElement[] => {
	const object: HTMLAudioElement[] = bgm.map(
		(bgm) => new Audio(`musics/${bgm}.mp3`),
	);

	return object;
};

const bgm: HTMLAudioElement[] = makeBGM(
	BGM_NUMBERS.map((number) => `bgm${number}`),
);
const use = bgm[rand(0, bgm.length - 1)];

const bgmStart = (): void => {
	use.play();
	use.loop = true;
	use.volume = 0;
	bgmFadeIn();
};

export { bgmStart, use };
