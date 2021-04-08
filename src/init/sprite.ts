//ファイルの読み込み
let spriteImage = new Image();
spriteImage.src = './sprite.png';
spriteImage.onerror = () => (spriteImage.src = './sprite.png');

export { spriteImage };
