"use strict";

import { key } from "../init/variables";

const changeKey = (pushedKey: string, isPushed: boolean): void => {
  if (pushedKey === "ArrowUp") {
    key.ArrowUp = isPushed;
  }

  if (pushedKey === "ArrowDown") {
    key.ArrowDown = isPushed;
  }

  if (pushedKey === "ArrowLeft") {
    key.ArrowLeft = isPushed;
  }

  if (pushedKey === "ArrowRight") {
    key.ArrowRight = isPushed;
  }

  if (pushedKey === " ") {
    key.space = isPushed;
  }

  if (pushedKey === "Shift") {
    key.shift = isPushed;
  }

  if (pushedKey === "f") {
    key.f = isPushed;
  }
};

export { changeKey };
