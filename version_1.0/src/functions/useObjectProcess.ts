//******************************** 移動の処理 ********************************
import {
	bullet,
	ctx,
	enemy,
	enemyShot,
	explosion,
	field_h,
	field_w,
	item,
	player,
	screen_h,
	screen_w,
	star,
	vcanvas,
	vctx,
	vars,
	background,
} from '../init/variables';
import { correctionToMapValue } from './correctionToMapValue';
import { bossInfo } from './enemyFunctions/enemyMoveBoss/bossInfo';
import { drawObject, updateObject } from './objectProcess';
import { drawStars, updateStars } from './starProcess';
import { copyCanvas } from './system/copyCanvas';

const updateAll = () => {
	updateStars(star);
	updateObject(item);
	updateObject(bullet);
	updateObject(enemyShot);
	updateObject(enemy);
	updateObject(explosion);

	//自機の移動
	player.update();

	// 背景の移動
	background.update();
};

//******************************** 描画の処理 ********************************
const drawAll = () => {
	const gap = 10;
	if (vctx) {
		// ここで背景画像を表示
		background.draw(vctx);
		if (player.damage) {
			vctx.fillStyle = 'rgba(255, 0, 0, 0.7)';
		} else {
			vctx.fillStyle = 'rgba(50, 50, 50, 0.2)';
		}
		vctx.fillRect(vars.camera_x - gap, vars.camera_y - gap, field_w, field_h);
	}

	drawStars(star);

	//ゲームオーバー時に表示を消す
	if (!vars.gameOver && !vars.gameClear) {
		drawObject(item);
		drawObject(enemyShot);
	}
	drawObject(explosion);
	drawObject(bullet);
	player.draw();
	drawObject(enemy);

	//　自機の範囲  0 ~ field_w
	//カメラの範囲  0 ~ (field_w - screen_w)
	vars.camera_x =
		(correctionToMapValue(player.x) / field_w) * (field_w - screen_w);
	vars.camera_y =
		(correctionToMapValue(player.y) / field_h) * (field_h - screen_h);

	// ボス出現時、ボスのHP情報を表示する
	bossInfo(vctx, gap);

	// 実際のキャンバスに描画結果をコピーして表示
	copyCanvas(ctx, vcanvas);
};

export { updateAll, drawAll };
