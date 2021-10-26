import { field_h, field_w } from '../init/variables';
import { drawSprite } from '../functions/drawSprite';
import { correctionToCalcValue } from '../functions/correctionToCalcValue';
import { Player } from './Player';

class Character {
	snum: number;
	x: number;
	y: number;
	vx: number;
	vy: number;
	kill: boolean;
	count: number; // 60で大体一秒
	audio: HTMLAudioElement | null;
	constructor(
		snum: number,
		x: number,
		y: number,
		vx: number,
		vy: number,
		audio: HTMLAudioElement | null = null,
	) {
		this.snum = snum;
		this.x = x;
		this.y = y;
		this.vx = vx;
		this.vy = vy;
		this.kill = false;
		this.count = 0;
		this.audio = audio;
	}

	update() {
		this.count++;
		this.x += this.vx;
		this.y += this.vy;

		this.checkIsOutRange();
	}

	checkIsOutRange = () => {
		// 256倍(>> 8)されていたフィールドの縦横幅を座標値に戻す
		const fw = correctionToCalcValue(field_w);
		const fh = correctionToCalcValue(field_h);

		if (this.x < 0 || this.x > fw || this.y < 0 || this.y > fh) {
			// キャラクターが範囲外に出ていたらkill(計算外)する
			this.kill = true;
		}
	};

	draw({ file = 0 } = {}) {
		drawSprite(this.snum, this.x, this.y, { file: file });
	}

	public makeSounds = () => {
		if (this.audio) {
			this.audio.currentTime = 0;
			this.audio.volume = 1;
			this.audio.play();
		}
	};

	calcDistance(a: Character, player: Player): number {
		const dx = a.x - player.x;
		const dy = a.y - player.y;

		return Math.sqrt(dx * dx + dy * dy);
	}

	moveX(move: number) {
		this.x += move;
	}

	moveY(move: number) {
		this.y += move;
	}

	accelerationX(acceleration: number) {
		this.vx += acceleration;
	}

	accelerationY(acceleration: number) {
		this.vy += acceleration;
	}
}

export { Character };
