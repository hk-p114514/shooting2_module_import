//ボスヒヨコ(黄色)の行動パターン ##################################################
import { rand } from "../random";
import { enemy, enemyShot, field_w } from "../../init/variables";
import { Enemy } from "../../classes/Enemy";
import { EnemyShot } from "../../classes/EnemyShot";

export const enemyMoveBoss = (object: Enemy) => {
  if (!object.flag && object.y >> 8 >= 120) {
    object.flag = 1;
  }

  if (object.flag === 1) {
    object.vy -= 1;
    if (object.vy <= 0) {
      object.flag = 2;
      object.vy = 0;
    }
  } else if (object.flag === 2) {
    if (object.vx < 300) {
      object.vx += rand(1, 300);
    }

    if (object.x >> 8 > field_w - 100) {
      object.flag = 3;
    }
  } else if (object.flag === 3) {
    if (object.vx > -300) {
      object.vx -= rand(1, 300);
    }

    if (object.x >> 8 < 100) {
      object.flag = 2;
    }
  }

  //弾の発射
  if (object.flag > 1) {
    let angle, vx, vy, bossR;
    bossR = 70;
    //敵キャラから目標への角度(ラジアン)
    angle = (object.direction * Math.PI) / 180;

    vx = Math.cos(angle) * 300;
    vy = Math.sin(angle) * 300;
    let xGap = (Math.cos(angle) * bossR) << 8;
    let yGap = (Math.sin(angle) * bossR) << 8;
    enemyShot.push(
      new EnemyShot(15, object.x + xGap, object.y + yGap, vx, vy, 30)
    );
    object.direction += object.directionGap;

    if (object.direction >= 360) {
      object.direction = 0;
      if (rand(0, 2) === 0) {
        //360度周期　＆　３分の１の確率で弾の角度を変える
        object.directionGap = rand(3.5, 60);
      }
    }
  }

  if (object.hp < object.maxHp / 2) {
    let count = object.count % (60 * 5);
    if (count / 10 < 4 && count % 10 === 0) {
      //雑魚キャラを出現
      let angle, vx, vy, bossR;
      bossR = 70;
      //敵キャラから目標への角度
      angle = 90 + 45 - ((count / 10) * 30 * Math.PI) / 180;

      vx = Math.cos(angle) * 300;
      vy = Math.sin(angle) * 300;
      let xGap = (Math.cos(angle) * bossR) << 8;
      let yGap = (Math.sin(angle) * bossR) << 8;
      enemy.push(new Enemy(3, object.x + xGap, object.y + yGap, vx, vy));
    }
  }

  //スプライトの変更
  object.snum = 75;
};
