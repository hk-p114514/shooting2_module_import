import { Character } from './Character';
import { itemMaster, player } from '../init/variables';
import { checkHit } from '../functions/hit';
import { itemMoveDefault } from '../functions/itemFunctions/itemMoveDefault';
import { heal } from '../functions/heal';

class Item extends Character {
	itemNumber: number;
	r: number;
	isUsed: boolean;
	constructor(
		itemNumber: number,
		x: number,
		y: number,
		vx: number,
		vy: number
	) {
		super(0, x, y, vx, vy);
		this.itemNumber = itemMaster[itemNumber].itemNumber;
		this.r = itemMaster[itemNumber].r;
		this.isUsed = false;
	}

	update() {
		super.update();

		//個別のアップデート
		itemFunctions[this.itemNumber](this);

		//	当たり判定
		if (checkHit(this.x, this.y, this.r, player.x, player.y, player.r)) {
			//当たったときの処理
			heal(this);
		}
	}

	draw() {
		super.draw(1);
	}
}

const itemFunctions = [itemMoveDefault];

export { Item };
