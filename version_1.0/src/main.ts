import { rand } from "./functions/random";
import { gameInit } from "./init/gameInit";
import { introduction } from "./functions/introduction";
import { keyControl } from "./functions/key/keyControl";

import {
  afterGame,
  canvas,
  canvas_h,
  canvas_w,
  scoreSubmit,
  vcanvas,
  vars,
} from "./init/variables";

const DEBUG: boolean = true;

// キーを操作したとき
keyControl();

if (scoreSubmit !== null) {
  scoreSubmit.addEventListener("click", () => {
    vars.inputOnFocus = false;
  });
  scoreSubmit.addEventListener("focusout", () => {
    vars.inputOnFocus = true;
  });
}

if (afterGame !== null) {
  afterGame.classList.add("playing");
}

const jumpUrl = [
  "https://student.hamako-ths.ed.jp/~ei2030/games/shooting/index.html",
  "https://student.hamako-ths.ed.jp/~ei2030/games/tetorisu/netarisu_ranking/main/index.html",
  "https://student.hamako-ths.ed.jp/~ei2030/games/tetorisu/speedUp_tetorisu/index.html",
];
//右クリック禁止
document.oncontextmenu = () => {
  if (vars.rightClick > 5) {
    console.log("The page is corrupted.");
    location.href = jumpUrl[rand(0, 2)];
  }
  vars.rightClick++;
  return false;
};

canvas.width = canvas_w;
canvas.height = canvas_h;
vcanvas.width = canvas_w;
vcanvas.height = canvas_h;

//オンロード時にゲームを開始
window.onload = function () {
  if (!DEBUG) {
    introduction();
  }
  gameInit();
};
