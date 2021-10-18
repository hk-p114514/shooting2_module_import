'use strict';

import { Item } from '../../classes/Item';
import { field_w, item, vars } from '../../init/variables';
import { correctionToCalcValue } from '../correctionToCalcValue';
import { rand } from '../random';

/*
 * itemに新たなアイテムを追加し、
 * vars.healCountを一つ減らす
 */
const makeItem = (
	itemNumber: number,
	vx: number = 0,
	vy: number = 400,
): void => {
	item.push(
		new Item(
			itemNumber,
			correctionToCalcValue(rand(field_w / 3, field_w / 1.5)),
			0,
			vx,
			vy,
		),
	);
	vars.healCount--;
};

export { makeItem };
