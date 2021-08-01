"use strict";

import { Star } from "../classes/Star";

//オブジェクトをアップデート
const updateStars = (star: Star[]) => {
  for (let i = star.length - 1; i >= 0; i--) {
    star[i].update();
  }
};

//オブジェクトを描画
const drawStars = (star: Star[]) => {
  for (let i = 0; i < star.length; i++) {
    star[i].draw();
  }
};

export { updateStars, drawStars };
