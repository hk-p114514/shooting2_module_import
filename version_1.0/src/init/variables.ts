import { EnemyMaster } from '../classes/EnemyMaster';
import { Enemy } from '../classes/Enemy';
import { Player } from '../classes/Player';
import { ItemMaster } from '../classes/ItemMaster';
import { Explosion } from '../classes/Explosion';
import { EnemyShot } from '../classes/EnemyShot';
import { Item } from '../classes/Item';
import { Star } from '../classes/Star';
import { Bullet } from '../classes/Bullet';
import { Background } from '../classes/Background';
import { waves } from '../functions/waves/waves';
import { enemyMovePink } from '../functions/enemyFunctions/enemyMovePink/enemyMovePink';
import { enemyMoveYellow } from '../functions/enemyFunctions/enemyMoveYellow/enemyMoveYellow';
import { enemyMoveBoss } from '../functions/enemyFunctions/enemyMoveBoss/enemyMoveBoss';
import { enemyMoveRobot } from '../functions/enemyFunctions/enemyMoveBoss/enemyMoveRobot';
import { enemyMoveBlue } from '../functions/enemyFunctions/enemyMoveBlue/enemyMoveBlue';

// ******************************* 定数 *******************************

export const scoreSubmit = document.getElementById('score-submit');
export const logoutButton = document.getElementById('logout-button');

//認証画面の表示をゲームの終了後のみにする
export const afterGame = document.getElementById('after-game');

//スムージング
export const SMOOTHING = false;

//画面サイズ
const side: number = 650;
export const screen_w = side;
export const screen_h = side;

//キャンバスのサイズ
export const canvas_w = screen_w * 2;
export const canvas_h = screen_h * 2;

//フィールドのサイズ
export const field_increase = 120;
export const field_w = screen_w + field_increase;
export const field_h = screen_h + field_increase;

//キャンバス
export const canvas = document.getElementById('canvas') as HTMLCanvasElement;
export const ctx = canvas.getContext('2d');

//フィールド（仮想画面）
export const vcanvas = document.createElement('canvas');
export const vctx = vcanvas.getContext('2d');

//星の数
export const star_max = 20;

//自機の情報
export const player = new Player();

// 背景の情報
export const background = new Background(
	'./images/hamako_bottom.png',
	'./images/hamako_top.png',
);

//アイテムの種類
export const itemMaster: ItemMaster[] = [new ItemMaster(0, 15, 1)];

//ゲームスピード
export const gameSpeed = 1000 / 60;

const normalEnemy = {
	// 通常敵キャラの半径
	r: 10,
	// 通常敵キャラの体力
	hp: 1,
	// 通常敵キャラを倒した際の取得スコア
	score: 100,
};

//敵キャラの種類
export const enemyMaster = [
	new EnemyMaster(
		0,
		normalEnemy.r,
		normalEnemy.hp,
		normalEnemy.score,
		enemyMovePink,
	), //ピンクのヒヨコ

	new EnemyMaster(
		1,
		normalEnemy.r,
		normalEnemy.hp,
		normalEnemy.score,
		enemyMoveYellow,
	), //黄色のヒヨコ

	new EnemyMaster(2, 70, 1000, 10000, enemyMoveBoss), //ボスヒヨコ（黄色）
	new EnemyMaster(3, 15, 5, 10, enemyMoveRobot), //ボスヒヨコの子分(ロボ)
	new EnemyMaster(
		4,
		normalEnemy.r,
		normalEnemy.hp,
		normalEnemy.score,
		enemyMoveBlue,
	), // 群青色のヒヨコ
];

// 変更がなされるのは配列の中身であり、本質的な変数の書き換えが行われないので、
// 以下のインスタンスの配列はvarsに含める必要が無い。
// (むしろ各配列がvarsの役割を果たしていると言ったほうがニュアンスとしては正しいとも言える)

//キーボードの状態
export const key = {
	ArrowUp: false,
	ArrowDown: false,
	ArrowLeft: false,
	ArrowRight: false,
	shift: false,
	space: false,
	special: false,
};

//背景の星
export const star: Star[] = [];
//銃弾
export const bullet: Bullet[] = [];
//敵キャラ
export const enemy: Enemy[] = [];
//アイテム
export const item: Item[] = [];
//敵の攻撃
export const enemyShot: EnemyShot[] = [];
//爆発の情報
export const explosion: Explosion[] = [];

// ******************************* 変数 *******************************

// 複数箇所で書き換えが行われる変数
export const vars = {
	// スコア
	score: 0,

	// ボスのHP
	bossHp: 0,

	// ボスのHPのマックス値
	bossMhp: 0,

	drawCount: 0,

	// 経過したfps
	fps: 0,

	lastTime: Date.now(),

	//ゲームスタートのためにユーザがスペースを押したかどうかを感知する
	afterPushedSpace: false,

	//ゲームスタートフラグ
	gameStart: false,

	//ゲームが始まる前のカウント
	gameStartCount: 3,

	//ゲームオーバーフラグ
	gameOver: false,

	//ゲームクリアフラグ
	gameClear: false,

	//データベースの呼び出し回数
	callData: 0,

	//カメラの座標
	camera_x: 0,

	camera_y: 0,

	//入力欄にフォーカスがあるときは、Rでのリロードをキャンセルする
	inputOnFocus: true,

	//右クリックの回数を数える
	rightClick: 0,

	//ボスの出現フラグ
	bossEncounter: false,

	//ゲーム全体の経過フレーム
	gameTimer: 0,

	//ゲームのカウント（経過フレームをウェイブ毎に持つ）
	gameCount: 0,

	//ゲームのウェイブ（段階）
	gameWave: 0,

	//ゲームのラウンド数（ボスを倒した数）
	gameRound: 0,

	// ラウンドの最大数
	maxRound: waves.length,

	// レベルアップフラグ
	isLevelUp: false,

	//背景の星の速度
	starSpeed: 100,

	// 回復アイテムの出現回数
	healCount: 2,
};

export const isPlaying: boolean = !vars.gameClear || !vars.gameOver;
