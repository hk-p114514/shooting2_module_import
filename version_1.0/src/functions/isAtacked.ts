import { player, vars } from "../init/variables";
import { finishRound } from "./finishRound";

export const isAttacked = () => {
  if (player.hp > 0) {
    player.hp -= 1;
    console.log("HIT !!!");
    player.stun = 60;
    player.damage = 10;
  } else {
    player.hp = -1;

    vars.gameOver = true;
    finishRound(vars.callData);

    vars.callData = 1;
  }
};
