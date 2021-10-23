import { Player } from '../../classes/Player';

const printSpecialBar = (
	player: Player,
	screen_w: number,
	heightGap: number,
	x: number,
	y: number,
	ctx: CanvasRenderingContext2D,
) => {
	if (player.special) {
		//特殊攻撃の残り時間バーのサイズ
		let size = ((screen_w / 4) * player.specialTime) / player.specialMaxTime;
		let maxSize = screen_w / 4;
		//残り時間を表示
		ctx.fillStyle = 'rgba(0, 255, 0, 0.8)';
		ctx.fillRect(x, y, size, x);
		ctx.strokeStyle = 'lime';
		ctx.strokeRect(x, y, maxSize, x);
	} else if (!player.special) {
		ctx.fillText(`SPECIAL : ${player.specialMagazine}`, x, y + heightGap);
	}
};

export { printSpecialBar };
