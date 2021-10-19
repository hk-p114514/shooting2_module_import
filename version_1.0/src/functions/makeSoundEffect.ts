'use strict';

const makeSoundEffect = (audio: HTMLAudioElement) => {
	audio.currentTime = 0;
	audio.volume = 1;
	audio.play();
};

export { makeSoundEffect };
