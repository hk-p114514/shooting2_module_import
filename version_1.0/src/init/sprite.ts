//ファイルの読み込み

// 敵キャラやプレイヤー等メインのスプライトファイル
const spriteImage = new Image();
spriteImage.src = './sprite.png';

// アイテム等のスプライトファイル
const stdItems = new Image();
stdItems.src = './itemSprites/sticon_set.png';

const images = [spriteImage, stdItems];

export { images };
