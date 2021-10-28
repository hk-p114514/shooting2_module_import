'use strict';

import { key } from '../../init/variables';

const changeKey = (pushedKey: string, isPushed: boolean): void => {
	// 特殊攻撃開始
	if (pushedKey === 'f' || pushedKey === 'F') {
		key.special = isPushed;
	}

	// 攻撃(スペース)
	if (pushedKey === ' ' && isPushed) {
		// スペースを押す度にON/OFFが切り替わる
		key.space = !key.space;
	}

	// 上
	if (pushedKey === 'ArrowUp' || pushedKey === 'i' || pushedKey === 'I') {
		key.ArrowUp = isPushed;
	}

	// 右
	if (pushedKey === 'ArrowRight' || pushedKey === 'l' || pushedKey === 'L') {
		key.ArrowRight = isPushed;
	}

	// 下
	if (pushedKey === 'ArrowDown' || pushedKey === 'k' || pushedKey === 'K') {
		key.ArrowDown = isPushed;
	}

	// 左
	if (pushedKey === 'ArrowLeft' || pushedKey === 'j' || pushedKey === 'J') {
		key.ArrowLeft = isPushed;
	}

	// 減速(Shift)
	if (pushedKey === 'Shift' || pushedKey === 'd') {
		key.shift = isPushed;
	}
};

export { changeKey };
