"use strict";

import { EnemyShot } from "../EnemyShot";

const makeEnemyShot = (
  snum: number,
  x: number,
  y: number,
  vx: number,
  vy: number,
  delay: number = 0
): EnemyShot => {
  return new EnemyShot(snum, x, y, vx, vy, delay);
};

export { makeEnemyShot };
