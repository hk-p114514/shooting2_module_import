"use strict";

import { key } from "../../init/variables";

const changeKey = (pushedKey: string, isPushed: boolean): void => {
  console.log(`key : ${pushedKey}`);

  if (pushedKey === "f") {
    key.special = isPushed;
  }

  if (pushedKey === " ") {
    key.space = isPushed;
  }

  if (pushedKey === "ArrowUp" || pushedKey === "i" || pushedKey === "I") {
    key.ArrowUp = isPushed;
  }

  if (pushedKey === "ArrowRight" || pushedKey === "l" || pushedKey === "L") {
    key.ArrowRight = isPushed;
  }

  if (pushedKey === "ArrowDown" || pushedKey === "k" || pushedKey === "K") {
    key.ArrowDown = isPushed;
  }

  if (pushedKey === "ArrowLeft" || pushedKey === "j" || pushedKey === "J") {
    key.ArrowLeft = isPushed;
  }

  if (pushedKey === "Shift" || pushedKey === "d") {
    key.shift = isPushed;
  }
};

export { changeKey };
