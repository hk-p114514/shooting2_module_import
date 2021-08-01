//派手な爆発
import { explosion } from "../init/variables";
import { rand } from "./random";
import { makeExplosion } from "../classes/instance/makeExplosion";

const moreExplosion = (x: number, y: number, vx: number, vy: number) => {
  explosion.push(makeExplosion(0, x, y, vx, vy));
  for (let i = 0; i < 10; i++) {
    let evx = vx + (rand(-10, 10) << 6);
    let evy = vy + (rand(-10, 10) << 6);
    explosion.push(makeExplosion(i, x, y, evx, evy));
  }
};

export { moreExplosion };
