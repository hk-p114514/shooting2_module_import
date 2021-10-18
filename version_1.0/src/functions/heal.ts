import { Item } from '../classes/Item';
import { vars, player } from '../init/variables';

export const heal = (item: Item) => {
	//プレイヤーを回復させる
	if (
		!(vars.gameOver || vars.gameClear) &&
		player.hp < player.maxHp &&
		!item.isUsed
	) {
		//体力の限界値を超えていなければ、体力（hp）を１回復する
		player.hp += 1;
	}
	//回復してもしなくても、当たったら消す
	item.isUsed = true;
	item.kill = true;
};
