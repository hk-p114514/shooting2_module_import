"use strict";

import { Bullet } from "../Bullet";

const makeBullet = (x: number, y: number, vx: number, vy: number): Bullet => {
  return new Bullet(x, y, vx, vy);
};

export { makeBullet };
