import { rand } from './functions/random';
import { keyControl } from './functions/key/keyControl';

import {
	afterGame,
	canvas,
	canvas_h,
	canvas_w,
	scoreSubmit,
	vcanvas,
	vars,
	player,
	DEBUG,
	oneWave,
} from './init/variables';
import { gameStart } from './init/gameStart';

(() => {
	if (DEBUG) {
		player.hp = 500;
		// player.hp = 0;
		player.power = 50;
		console.log('DEBUG MODE');
		console.log(`oneWave : ${oneWave}`);
	}
})();

// キーを操作したとき
keyControl();

// スコア投稿のinputタグにフォーカスした際、rキーを押してもリロードしないようにする
if (scoreSubmit !== null) {
	scoreSubmit.addEventListener('click', () => {
		vars.inputOnFocus = false;
	});
	scoreSubmit.addEventListener('focusout', () => {
		vars.inputOnFocus = true;
	});
}

if (afterGame !== null) {
	// スコア投稿エリアを非表示
	afterGame.classList.add('playing');
}

const jumpUrl = [
	'https://student.hamako-ths.ed.jp/~ei2030/games/shooting/index.html',
	'https://student.hamako-ths.ed.jp/~ei2030/games/tetorisu/netarisu_ranking/main/index.html',
	'https://student.hamako-ths.ed.jp/~ei2030/games/tetorisu/speedUp_tetorisu/index.html',
];

//右クリック禁止
if (!DEBUG) {
	document.oncontextmenu = () => {
		if (vars.rightClick > 5) {
			console.log('The page is corrupted.');
			location.href = jumpUrl[rand(0, jumpUrl.length - 1)];
		}
		vars.rightClick++;
		return false;
	};
}

canvas.width = canvas_w;
canvas.height = canvas_h;
vcanvas.width = canvas_w;
vcanvas.height = canvas_h;

//オンロード時にゲームを開始
window.onload = gameStart;
