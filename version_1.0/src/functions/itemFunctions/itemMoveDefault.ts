import { Item } from "../../classes/Item";

const itemMoveDefault = (object: Item) => {
  //ゆっくりと下に落ちるだけの処理

  //スプライトの変更、パターン（アニメーションがある場合）
  object.snum = 79;
};

export { itemMoveDefault };
