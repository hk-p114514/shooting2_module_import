"use strict";

import { Explosion } from "../Explosion";

const makeExplosion = (
  timer: number,
  x: number,
  y: number,
  vx: number,
  vy: number
): Explosion => {
  return new Explosion(timer, x, y, vx, vy);
};

export { makeExplosion };
