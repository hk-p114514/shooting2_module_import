import { Character } from './Character';
import {
	bossHp,
	bossMhp,
	enemy,
	explosion,
	gameClear,
	gameOver,
	player,
	score,
} from '../init/variables';
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
			// @ts-ignore
			if (!enemy[i].kill) {
				if (
					// @ts-ignore
					checkHit(this.x, this.y, this.r, enemy[i].x, enemy[i].y, enemy[i].r)
				) {
					//もし敵にあたっていたら、自機の弾を消す
					this.kill = true;

					//敵の hp を減らす
					// @ts-ignore
					enemy[i].hp -= player.power;

					//もし敵の hp が０以下ならば、死亡判定をする
					// @ts-ignore
					if (enemy[i].hp <= 0 && !(gameClear || gameOver)) {
						// @ts-ignore
						enemy[i].kill = true;
						// @ts-ignore
						score += enemy[i].score;
						
						//敵を撃破して、自分のパワーを上昇
						player.power = player.power + 0.2;
						
						//hutao_nekomata's chenges------^
						if(score%1000==0){
							player.specialMagazine = player.specialMagazine + 1; 
						}
						//------------------------------^

						//スコアを加算していく
						//スコアをサーバに渡す処理

						//爆発エフェクト
						moreExplosion(
							// @ts-ignore
							enemy[i].x,
							// @ts-ignore
							enemy[i].y,
							// @ts-ignore
							enemy[i].vx >> 3,
							// @ts-ignore
							enemy[i].vy >> 3
						);
					} else {
						// @ts-ignore
						explosion.push(new Explosion(0, this.x, this.y, 0, 0));
					}

					// @ts-ignore
					if (enemy[i].maxHp >= 1000) {
						// @ts-ignore
						bossHp = enemy[i].hp;
						// @ts-ignore
						bossMhp = enemy[i].maxHp;
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
