import { rand } from '../../functions/random';
import { bgmFadeIn, bgmFadeOut } from './bgmFadeInFadeOut';
const bgmNumber: number = 3;
const BGM_NUMBERS = Array.from({ length: bgmNumber }, (_, i) => ++i);

const makeBGM = (bgm: string[]): HTMLAudioElement[] => {
	const object: HTMLAudioElement[] = bgm.map(
		(bgm) => new Audio(`musics/${bgm}.mp3`),
	);

	return object;
};

const musics: HTMLAudioElement[] = makeBGM(
	BGM_NUMBERS.map((number) => `bgm${number}`),
);
const bgm = musics[rand(0, musics.length - 1)];

const bgmStart = (): void => {
	bgm.play();
	bgm.loop = true;
	bgm.volume = 0;
	bgmFadeIn();
	bgmFadeOut();
};

export { bgmStart, bgm };
