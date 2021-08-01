"use strict";

import { rand } from "../../functions/random";
import { field_w } from "../../init/variables";
import { Enemy } from "../Enemy";

const makeEnemy = (
  enemyNumber: number,
  /* デフォルト値を設定 */ [
    x = rand(0, field_w) << 8,
    y = 0,
    vx = 0,
    vy = rand(300, 1200),
  ]
): Enemy => {
  return new Enemy(enemyNumber, x, y, vx, vy);
};

export { makeEnemy };
