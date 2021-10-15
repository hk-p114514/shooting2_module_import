"use strict";

import { key, vars } from "../init/variables";

const keyControl = (): void => {
  //キーボードが押された時
  document.onkeydown = (e) => {
    const pushedKey = e.key;
    console.log(`key : ${pushedKey}`);

    if (pushedKey === "ArrowUp") {
      key.ArrowUp = true;
    }

    if (pushedKey === "ArrowDown") {
      key.ArrowDown = true;
    }

    if (pushedKey === "ArrowLeft") {
      key.ArrowLeft = true;
    }

    if (pushedKey === "ArrowRight") {
      key.ArrowRight = true;
    }

    // ゲームが終わったあとにrを押すとリロードする
    if (
      (vars.gameOver || vars.gameClear) &&
      pushedKey === "r" &&
      vars.inputOnFocus
    ) {
      document.location.reload();
    }

    if (
      pushedKey !== "Control" && //Ctrl
      pushedKey !== "r" && //R
      pushedKey !== "f" && //F
      !(vars.gameOver || vars.gameClear)
    ) {
      e.preventDefault();
    }
  };

  //キーボードが離された時
  document.onkeyup = (e) => {
    const unPushedKey = e.key;
    if (unPushedKey === "ArrowUp") {
      key.ArrowUp = false;
    }

    if (unPushedKey === "ArrowDown") {
      key.ArrowDown = false;
    }

    if (unPushedKey === "ArrowRight") {
      key.ArrowRight = false;
    }

    if (unPushedKey === "ArrowLeft") {
      key.ArrowLeft = false;
    }

    if (unPushedKey === " ") {
      key.space = false;
    }

    if (unPushedKey === "Shift") {
      key.shift = false;
    }
  };
};

export { keyControl };
