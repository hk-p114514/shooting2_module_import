"use strict";

import { Item } from "../../classes/Item";
import { field_w, item } from "../../init/variables";
import { rand } from "../random";

const makeItemAppear = (itemNumber: number, vx: number, vy: number): void => {
  item.push(
    new Item(itemNumber, rand(field_w / 3, field_w / 1.5) << 8, 0, vx, vy)
  );
};

export { makeItemAppear };
