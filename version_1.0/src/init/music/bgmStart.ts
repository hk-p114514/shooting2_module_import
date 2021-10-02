import { rand } from '../../functions/random';
import { bgmFadeIn } from './bgmFadeIn';

const makeBGM = (bgm: string[]) => {
	const object: HTMLAudioElement[] = bgm.map(
		(bgm) => new Audio(`musics/${bgm}.mp3`),
	);

	return object;
};

const bgm: HTMLAudioElement[] = makeBGM(['bgm1', 'bgm2']);
const use = bgm[rand(0, bgm.length - 1)];

const bgmStart = (): void => {
	use.play();
	use.loop = true;
	use.volume = 0;
	bgmFadeIn();
};

export { bgmStart, use };
