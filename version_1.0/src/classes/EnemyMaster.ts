class EnemyMaster {
	enemyNumber: number;
	r: number;
	hp: number;
	score: number;
	moveFunction: Function;
	constructor(
		enemyNumber: number,
		r: number,
		hp: number,
		score: number,
		moveFunction: Function,
	) {
		this.enemyNumber = enemyNumber;
		this.r = r;
		this.hp = hp;
		this.score = score;
		this.moveFunction = moveFunction;
	}
}

export { EnemyMaster };
