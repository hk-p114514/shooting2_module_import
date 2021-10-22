import { toRad } from '../functions/toRad';

class Vector {
	// x方向の成分
	vx: number;
	// y方向の成分
	vy: number;
	// ベクトルの大きさ
	magnitude: number;
	// ベクトルの向く角度
	angle: number;
	constructor(vx: number, vy: number) {
		this.vx = vx;
		this.vy = vy;
		this.magnitude = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
		this.angle = Math.atan2(this.vy, this.vx);
	}

	// 直交座標系に変換
	transformToCartesianCoordinate = (magnitude: number, angle: number) => {
		const vx = magnitude * Math.cos(angle);
		const vy = magnitude * Math.sin(angle);

		return { vx, vy };
	};

	// 角度を変化させる
	varyingAngle = (angle: number) => {
		angle = toRad(angle);
		angle += this.angle;
		const cartesian = this.transformToCartesianCoordinate(
			this.magnitude,
			angle,
		);

		this.vx = cartesian.vx;
		this.vy = cartesian.vy;
	};
}

export { Vector };
