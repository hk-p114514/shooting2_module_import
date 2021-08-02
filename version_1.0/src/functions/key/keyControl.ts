"use strict";

import { vars } from "../../init/variables";
import { changeKey } from "./changeKey";

const keyControl = (): void => {
  let pushedKey: string = "";

  // キーが押されたとき
  document.onkeydown = (e: KeyboardEvent) => {
    pushedKey = e.key;
    changeKey(pushedKey, true);

    // ゲームが終わったあとにrを押すとリロードする
    if (
      (vars.gameOver || vars.gameClear) &&
      pushedKey === "r" &&
      vars.inputOnFocus
    ) {
      document.location.reload();
    }

    if (
      pushedKey !== "r" &&
      pushedKey !== "f" &&
      !(vars.gameOver || vars.gameClear)
    ) {
      e.preventDefault();
    }
  };

  // キーが離された時
  document.onkeyup = (e: KeyboardEvent) => {
    pushedKey = e.key;
    changeKey(pushedKey, false);
  };
};

export { keyControl };
