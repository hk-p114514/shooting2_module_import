class EnemyMaster {
	enemyNumber: number;
	r: number;
	hp: number;
	score: number;
	constructor(enemyNumber: number, r: number, hp: number, score: number) {
		this.enemyNumber = enemyNumber;
		this.r = r;
		this.hp = hp;
		this.score = score;
	}
}

export { EnemyMaster };
