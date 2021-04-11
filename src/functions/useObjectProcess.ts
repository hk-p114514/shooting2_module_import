//******************************** 移動の処理 ********************************
import { drawObject, updateObject } from './objectProcess';
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
} from '../init/variables';

const updateAll = () => {
	updateObject(star);
	updateObject(item);
	updateObject(bullet);
	updateObject(enemyShot);
	updateObject(enemy);
	updateObject(explosion);

	//自機の移動
	player.update();
};

//******************************** 描画の処理 ********************************
const drawAll = () => {
	//呼び出す度にフィールドを黒く塗りつぶす = フィールドをクリアする
	if (vctx !== null) {
		vctx.fillStyle = player.damage ? 'red' : 'black';
		vctx.fillRect(vars.camera_x - 10, vars.camera_y - 10, field_w, field_h);
	}

	drawObject(star);

	//ゲームオーバー時に表示を消す
	if (!vars.gameOver && !vars.gameClear) {
		drawObject(explosion);
		drawObject(item);
		drawObject(enemyShot);
		drawObject(bullet);
		player.draw();
	}
	drawObject(enemy);

	//　自機の範囲  0 ~ field_w
	//カメラの範囲  0 ~ (field_w - screen_w)

	vars.camera_x = ((player.x >> 8) / field_w) * (field_w - screen_w);

	vars.camera_y = ((player.y >> 8) / field_h) * (field_h - screen_h);

	//ボスのHPを表示
	if (vars.bossHp > 0) {
		//HPバーのサイズ
		let size = ((screen_w - 20) * vars.bossHp) / vars.bossMhp;
		let maxSize = screen_w - 20;

		if (vctx !== null) {
			//残りHPを表示
			vctx.fillStyle = 'rgba(255, 0, 0, 0.8)';
			vctx.fillRect(vars.camera_x + 10, vars.camera_y + 10, size, 10);

			//バーの枠を表示
			vctx.strokeStyle = 'yellow';
			vctx.strokeRect(vars.camera_x + 10, vars.camera_y + 10, size, 10);

			//最大HPを示す枠
			vctx.strokeRect(vars.camera_x + 10, vars.camera_y + 10, maxSize, 10);
		}
	}

	//仮想画面から実際の画面にコピー
	ctx.drawImage(
		vcanvas,
		vars.camera_x,
		vars.camera_y,
		screen_w,
		screen_h,
		0,
		0,
		screen_w,
		screen_h
	);
};

export { updateAll, drawAll };
