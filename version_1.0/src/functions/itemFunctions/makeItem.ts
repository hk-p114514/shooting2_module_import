"use strict";

import { Item } from "../../classes/Item";
import { field_w } from "../../init/variables";
import { rand } from "../random";

const makeItem = (
  itemNumber: number,
  vx: number = 0,
  vy: number = 400
): Item => {
  return new Item(itemNumber, rand(field_w / 3, field_w / 1.5) << 8, 0, vx, vy);
};

export { makeItem };
