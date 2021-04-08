import { EnemyMaster } from '../classes/EnemyMaster';
import { Player } from '../classes/Player';

export const scoreSubmit = document.getElementById('score-submit');

export const logoutButton = document.getElementById('logout-button');

//入力欄にフォーカスがあるときは、Rでのリロードをキャンセルする
export let inputOnFocus = true;

// export const  info: boolean = true;

export const debug = false;

//認証画面の表示をゲームの終了後のみにする
export const afterGame = document.getElementById('after-game');

//右クリックの回数を数える
export let rightClick = 0;

//スムージング
export const SMOOOTHING = false;

export let drawCount = 0;
export let fps = 0;
export let lastTime = Date.now();
//画面サイズ
export const screen_w = 360;
export const screen_h = 500;

//キャンバスのサイズ
export const canvas_w = screen_w * 2;
export const canvas_h = screen_h * 2;

//フィールドのサイズ
export const field_w = screen_w + 120;
export const field_h = screen_h + 120;

//キャンバス
export const canvas: any = document.getElementById('canvas');
export const ctx = canvas.getContext('2d');

//フィールド（仮想画面）
export const vcanvas = document.createElement('canvas');
export const vctx = vcanvas.getContext('2d');

//カメラの座標
export let camera_x = 0;
export let camera_y = 0;

//星の数
export const star_max = 300;

//星の実体
export let star: any[] = [];

//キーボードの状態
export let key: boolean[] = [];

//銃弾
export let bullet: any = [];

//敵キャラの種類
export let enemyMaster = [
	new EnemyMaster(0, 10, 1, 100), //ピンクのヒヨコ
	new EnemyMaster(1, 10, 1, 100), //黄色のヒヨコ
	new EnemyMaster(2, 70, 1000, 10000), //ボスヒヨコ（黄色）
	new EnemyMaster(3, 15, 5, 10), //ボスヒヨコ（黄色）の子供
];

//敵キャラ
export let enemy = [];

//ボスの体力の最大値
export let bossMhp = 0;
export let bossHp = 0;

//敵キャラの割合
// export let enemyRate = [0, 1];

//敵の攻撃
export let enemyShot = [];

//ボスの出現フラグ
export let bossEncount = false;

//自機の情報
export let player = new Player();

//爆発の情報
export let explosion = [];

//ゲームスピード
export const gameSpeed = 1000 / 60;

//ゲームクリアフラグ
export let gameClear = false;

//ゲームオーバーフラグ
export let gameOver = false;

//ゲーム全体の経過フレーム
export let gameTimer = 0;

//ゲームのカウント（経過フレームをウェイブ毎に持つ）
export let gameCount = 0;

//ゲームのウェイブ（段階）
export let gameWave = 0;

//ゲームのラウンド数（ボスを倒した数）
export let gameRound = 0;

//スコア
export let score = 0;

//背景の星の速度
export let starSpeed = 100;

//要求する星の速度
export let starRequest = 100;
