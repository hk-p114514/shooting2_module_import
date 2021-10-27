'use strict';

import { isNotEndGame } from './isNotEndGame';

const makeSoundEffect = (audio: HTMLAudioElement) => {
	if (isNotEndGame()) {
		audio.currentTime = 0;
		audio.volume = 1;
		audio.play();
	}
};

export { makeSoundEffect };
