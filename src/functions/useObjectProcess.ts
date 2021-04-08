//******************************** 移動の処理 ********************************
import {drawObject, updateObject} from "./objectProcess";
import {
	bossHp, bossMhp,
	bullet,
	camera_x,
	camera_y, ctx,
	enemy,
	enemyShot,
	explosion,
	field_h,
	field_w, gameClear, gameOver,
	player, screen_h, screen_w,
	star, vcanvas,
	vctx
} from "../init/variables";

const updateAll = () => {
	updateObject(star);
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
	// @ts-ignore
	vctx.fillStyle = player.damage ? 'red' : 'black';
	// @ts-ignore
	vctx.fillRect(camera_x - 10, camera_y - 10, field_w, field_h);

	drawObject(star);

	//ゲームオーバー時に表示を消す
	if (!gameOver && !gameClear) {
		drawObject(explosion);
		drawObject(enemyShot);
		drawObject(bullet);
		player.draw();
	}
	drawObject(enemy);

	//　自機の範囲  0 ~ field_w
	//カメラの範囲  0 ~ (field_w - screen_w)
	// @ts-ignore
	camera_x = ((player.x >> 8) / field_w) * (field_w - screen_w);
	// @ts-ignore
	camera_y = ((player.y >> 8) / field_h) * (field_h - screen_h);

	//ボスのHPを表示
	if (bossHp > 0) {
		//HPバーのサイズ
		let size = ((screen_w - 20) * bossHp) / bossMhp;
		let maxSize = screen_w - 20;

		//残りHPを表示
		// @ts-ignore
		vctx.fillStyle = 'rgba(255, 0, 0, 0.8)';
		// @ts-ignore
		vctx.fillRect(camera_x + 10, camera_y + 10, size, 10);

		//バーの枠を表示
		// @ts-ignore
		vctx.strokeStyle = 'yellow';
		// @ts-ignore
		vctx.strokeRect(camera_x + 10, camera_y + 10, size, 10);

		//最大HPを示す枠
		// @ts-ignore
		vctx.strokeRect(camera_x + 10, camera_y + 10, maxSize, 10);
	}

	//仮想画面から実際の画面にコピー
	ctx.drawImage(
		vcanvas,
		camera_x,
		camera_y,
		screen_w,
		screen_h,
		0,
		0,
		screen_w,
		screen_h
	);
};

export { updateAll, drawAll };
