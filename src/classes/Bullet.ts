import { Character } from './Character';
import { enemy, explosion, player, vars } from '../init/variables';
import { checkHit } from '../functions/hit';
import { Explosion } from './Explosion';
import { moreExplosion } from '../functions/moreExplosion';

class Bullet extends Character {
	r: number;
	constructor(x: number, y: number, vx: number, vy: number) {
		super(6, x, y, vx, vy);
		this.r = 4;
	}

	update() {
		super.update();

		for (let i = 0; i < enemy.length; i++) {
			if (!enemy[i].kill) {
				if (
					checkHit(this.x, this.y, this.r, enemy[i].x, enemy[i].y, enemy[i].r)
				) {
					//もし敵にあたっていたら、自機の弾を消す
					this.kill = true;

					//敵の hp を減らす
					enemy[i].hp -= player.power;

					//もし敵の hp が０以下ならば、死亡判定をする
					if (enemy[i].hp <= 0 && !(vars.gameClear || vars.gameOver)) {
						enemy[i].kill = true;
						//set sub_score <= score
						vars.sub_score = score;
						// @ts-ignore
						vars.score += enemy[i].score;
						
						//敵を撃破して、自分のパワーを上昇
						player.power = player.power + 0.2;
						
						//スコアが1000の倍数を超えた場合に、スペシャルアッタクの回数を+1
						if((vars.score/1000)>(vars.sub_score/1000)){
							player.specialMagazine = player.specialMagazine + 1; 
						}
            
 						//vars.score += enemy[i].score;

						//スコアを加算していく
						//スコアをサーバに渡す処理

						//爆発エフェクト
						moreExplosion(
							enemy[i].x,
							enemy[i].y,
							enemy[i].vx >> 3,
							enemy[i].vy >> 3
						);
					} else {
						explosion.push(new Explosion(0, this.x, this.y, 0, 0));
					}

					if (enemy[i].maxHp >= 1000) {
						vars.bossHp = enemy[i].hp;

						vars.bossMhp = enemy[i].maxHp;
					}
					break;
				}
			}
		}
	}

	draw() {
		super.draw();
	}
}

export { Bullet };
