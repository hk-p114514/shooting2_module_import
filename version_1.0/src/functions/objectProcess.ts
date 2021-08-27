import { Character } from '../classes/Character';

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
const drawObject = (character: Character[]) => {
	for (let i = 0; i < character.length; i++) {
		character[i].draw();
	}
};

export { updateObject, drawObject };
