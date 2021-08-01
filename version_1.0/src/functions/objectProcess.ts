import { Character } from "../classes/Character";

//オブジェクトをアップデート
const updateObject = (object: Character[]) => {
  for (let i = object.length - 1; i >= 0; i--) {
    object[i].update();
    if (object[i].kill) {
      object.splice(i, 1);
    }
  }
};

//オブジェクトを描画
const drawObject = (object: Character[]) => {
  for (let i = 0; i < object.length; i++) {
    object[i].draw();
  }
};

export { updateObject, drawObject };
