import { bullet, field_h, field_w, key, vars } from "../init/variables";
import { drawSprite } from "../functions/drawSprite";
import { makeBullet } from "./instance/makeBullet";

class Player {
  x: number;
  y: number;
  r: number;
  damage: number;
  speed: number;
  anime: number;
  reload: number;
  magazine: number;
  stun: number;
  count: number;
  maxHp: number;
  hp: number;
  power: number;
  special: boolean;
  specialTime: number;
  specialMagazine: number;
  specialMaxTime: number;
  constructor() {
    this.x = (field_w / 2) << 8;
    this.y = (field_h - 50) << 8;
    this.r = 5;
    this.damage = 0; // ダメージエフェクトを出すタイミングを知らせる
    this.speed = 1024; //256で１フレームに１ピクセル動く
    this.anime = 0;
    this.reload = 0;
    this.magazine = 0;
    this.stun = 0;
    this.count = 0;
    this.maxHp = 5;
    //自機HP
    this.hp = 5;

    //自機の攻撃力
    this.power = 1;

    //特殊攻撃のon off
    this.special = false;

    //特殊攻撃の効果時間
    this.specialTime = 0;

    //特殊攻撃の回数上限
    this.specialMagazine = 2;

    //特殊攻撃の持続時間 (15秒)
    this.specialMaxTime = 60 * 15;
  }

  //自機の移動
  update() {
    // キャラクターの生存フレームを数える
    this.count++;

    // 各値をへらす
    this.subtractionOfPlayerValues();

    // キー操作を伴う処理
    this.keyOperation();

    //範囲チェック
    this.limitRangeOfMovement();
  }

  //描画
  draw = () => {
    if (this.stun && this.count & 1) {
      return;
    }
    drawSprite(2 + (this.anime >> 2), this.x, this.y);
    drawSprite(9 + (this.anime >> 2), this.x, this.y + (24 << 8));
    //(this.anime >> 2)は this.anime / 4 と同じだが、小数点が出ない
  };

  private limitRangeOfMovement = () => {
    if (this.x <= 1) {
      this.x = 20;
    }

    if (this.x >= field_w << 8) {
      this.x = (field_w << 8) - 1;
    }

    if (this.y < 0) {
      this.y = 0;
    }

    if (this.y >= (field_h << 8) - 1) {
      this.y = (field_h << 8) - 1;
    }
  };

  private keyOperation = () => {
    if (vars.isPushedSpace) {
      this.useSpecialAttack();

      this.slowSpeedPlayer();

      this.attack();
      this.playerMove();

      // プレイヤーのアニメーション変更
      if (this.anime > 0) {
        this.anime--;
      }

      if (this.anime < 0) {
        this.anime++;
      }
    } else {
      this.gameStart();
    }
  };

  private subtractionOfPlayerValues = () => {
    if (this.specialTime) {
      this.specialTime--;
    } else {
      this.special = false;
    }

    if (this.damage) {
      // ダメージエフェクトを出す時間（カウント）をへらしていく
      this.damage--;
    }

    if (this.stun) {
      this.stun--;
    }

    if (this.reload > 0) {
      this.reload--;
    }
  };

  private useSpecialAttack = () => {
    if (key.f && !this.special && this.specialMagazine) {
      //特殊攻撃（広範囲弾）は１５秒まで
      this.special = true;
      this.specialTime = this.specialMaxTime;
      this.specialMagazine--;
    }
  };

  private slowSpeedPlayer = () => {
    // shift
    if (key.shift) {
      this.speed = 256;
    } else if (this.speed !== 1024) {
      this.speed = 1024;
    }
  };

  private attack = () => {
    // space
    if (key.space && this.reload === 0) {
      bullet.push(makeBullet(this.x + (4 << 8), this.y, 0, -2000));
      bullet.push(makeBullet(this.x - (4 << 8), this.y, 0, -2000));

      if (this.special) {
        //斜めに発射
        bullet.push(makeBullet(this.x, this.y, 500, -1900));
        bullet.push(makeBullet(this.x, this.y, -500, -1900));

        bullet.push(makeBullet(this.x, this.y, 200, -2000));
        bullet.push(makeBullet(this.x, this.y, -200, -2000));
      }

      //60で約１秒間に一回発射できる
      this.reload = 5;
      this.magazine++;
      if (this.magazine >= 4) {
        this.reload = 20;
        this.magazine = 0;
      }
    }
  };

  private playerMove = () => {
    // 上
    if (key.ArrowUp) {
      this.y -= this.speed;
    }

    // 下
    if (key.ArrowDown) {
      this.y += this.speed;
    }

    // 左
    if (key.ArrowLeft) {
      this.x -= this.speed;
      if (this.anime > -8) {
        this.anime--;
      }
    }

    // 右
    if (key.ArrowRight) {
      this.x += this.speed;
      if (this.anime < 8) {
        this.anime++;
      }
    }
  };

  private gameStart = () => {
    if (key.space && !vars.isPushedSpace) {
      // スペース
      //ゲームをスタートする
      vars.isPushedSpace = true;
      const intervalId = setInterval(() => {
        vars.gameStartCount -= 1;
        if (vars.gameStartCount === 0) {
          clearInterval(intervalId);
        }
      }, 1000);
    }
  };
}

export { Player };
