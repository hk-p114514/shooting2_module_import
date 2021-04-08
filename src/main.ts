import { rand } from './functions/random';
import {
	afterGame,
	canvas,
	canvas_h,
	canvas_w,
	ctx,
	debug,
	gameClear,
	gameOver,
	inputOnFocus,
	key,
	rightClick,
	scoreSubmit,
	SMOOOTHING,
	vcanvas,
} from './init/variables';

//キーボードが押された時
document.onkeydown = (e) => {
	key[e.keyCode] = true;

	if ((gameOver || gameClear) && e.keyCode === 82 /* R */ && inputOnFocus) {
		document.location.reload();
	}

	if (
		e.keyCode !== 17 && //Ctrl
		e.keyCode !== 82 && //R
		e.keyCode !== 70 && //F
		!(gameOver || gameClear)
	) {
		e.preventDefault();
	}
};

//キーボードが離された時
document.onkeyup = (e) => {
	key[e.keyCode] = false;
};

import { gameInit } from './init/gameInit';

if (scoreSubmit !== null) {
	scoreSubmit.addEventListener('click', () => {
		// @ts-ignore
		inputOnFocus = false;
	});
	scoreSubmit.addEventListener('focusout', () => {
		// @ts-ignore
		inputOnFocus = true;
	});
}

if (afterGame !== null) {
	afterGame.classList.add('playing');
}

const jumpUrl = [
	'https://student.hamako-ths.ed.jp/~ei2030/games/shooting/index.html',
	'https://student.hamako-ths.ed.jp/~ei2030/games/tetorisu/netarisu_ranking/main/index.html',
	'https://student.hamako-ths.ed.jp/~ei2030/games/tetorisu/speedUp_tetorisu/index.html',
];
//右クリック禁止
document.oncontextmenu = () => {
	if (rightClick > 5) {
		console.log('The page is corrupted.');
		location.href = jumpUrl[rand(0, 2)];
	}
	// @ts-ignore
	rightClick++;
	return false;
};

if (debug) {
	console.log('ready OK');
}
canvas.width = canvas_w;
canvas.height = canvas_h;

//画像の引き伸ばし（ぼやけ）を回避
ctx.mozimageSmoothingEnabled = SMOOOTHING;
ctx.webkitSmoothingEnabled = SMOOOTHING;
ctx.msimageSmoothingEnabled = SMOOOTHING;
ctx.msimageSmoothingEnabled = SMOOOTHING;

vcanvas.width = canvas_w;
vcanvas.height = canvas_h;

//オンロード時にゲームを開始
window.onload = function () {
	//alertは「OK」が押されるまで、次の処理を待機できる。
	alert('矢印キーで移動、');
	alert('スペースで射撃だ！');
	alert('SHIFTキーで減速できるぞ！');
	alert('Fキーを押すと...?');
	alert('始まるぞ！！！');
	gameInit();
};
