import { Character } from './Character';
import { itemMaster, player } from '../init/variables';
import { checkHit } from '../functions/checkHit';
import { itemMoveDefault } from '../functions/itemFunctions/itemMoveDefault';
import { heal } from '../functions/heal';
import { ItemMaster } from './ItemMaster';
/*
 * - Itemクラスを使う際の注意 - *
 *   Itemクラスのインスタンスを作る際、アイテムの識別に使う番号、
 *   itemNumberを受け取りますが、この値がitemMasterの配列長を超えていると
 *   itemMaster[itemNumber]がundefinedとなってしまいます。
 */

class Item extends Character {
	itemNumber: number;
	r: number;
	isUsed: boolean;
	item: ItemMaster;
	constructor(itemNumber: number, x: number, y: number, vx: number, vy: number) {
		super(0, x, y, vx, vy);
		this.item = itemMaster[itemNumber];
		this.itemNumber = this.item.itemNumber;
		this.r = itemMaster[itemNumber].r;
		this.isUsed = false;
	}

	update() {
		super.update();

		//個別のアップデート
		itemFunctions[itemMaster[this.itemNumber].functionNumber](this);

		//	当たり判定
		if (checkHit(this.x, this.y, this.r, player.x, player.y, player.r)) {
			//当たったときの処理
			heal(this);
		}
	}

	draw() {
		super.draw({ file: itemMaster[this.itemNumber].fileNumber });
	}
}

const itemFunctions = [itemMoveDefault];

export { Item };
