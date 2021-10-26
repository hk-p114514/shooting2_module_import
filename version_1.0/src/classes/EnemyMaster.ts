class EnemyMaster {
	enemyNumber: number;
	r: number;
	hp: number;
	score: number;
	moveFunction: Function;
	width: number;
	height: number;
	isSquare: boolean;
	constructor(
		enemyNumber: number,
		r: number,
		hp: number,
		score: number,
		moveFunction: Function = () => {},
		{ isSquare = false, width = r, height = r } = {},
	) {
		this.enemyNumber = enemyNumber;
		this.r = r;
		this.hp = hp;
		this.score = score;
		this.moveFunction = moveFunction;
		this.width = width;
		this.height = height;
		this.isSquare = isSquare;
	}
}

export { EnemyMaster };
