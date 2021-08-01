import { Character } from "./Character";

class Explosion extends Character {
  timer: number;
  private startSnum: number = 16;
  private endSnum: number = 26;
  constructor(timer: number, x: number, y: number, vx: number, vy: number) {
    super(0, x, y, vx, vy);
    this.timer = timer;
  }

  update() {
    if (this.timer > 0) {
      this.timer--;
      return;
    }
    super.update();
  }

  draw() {
    if (!this.timer) {
      this.snum = this.startSnum + (this.count >> 2);
      if (this.snum > this.endSnum) {
        this.kill = true;
        return;
      }
      super.draw();
    } else {
      return;
    }
  }
}

export { Explosion };
