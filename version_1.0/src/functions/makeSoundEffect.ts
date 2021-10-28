'use strict';

import { isNotEndGame } from './isNotEndGame';

const makeSoundEffect = (audio: HTMLAudioElement, volume: number = 0.5) => {
	if (isNotEndGame()) {
		audio.currentTime = 0;
		audio.volume = volume;
		audio.play();
	}
};

export { makeSoundEffect };
