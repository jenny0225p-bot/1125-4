let spriteSheet;
const totalFrames = 10;
const frameW = 88; // 單一影格的寬度 (963px / 10 frames = 96.3px)
const frameH = 160; // 單一影格的高度
const scaleFactor = 2; // 放大倍率，可依喜好調整
const animSpeed = 8; // 動畫速度，數字越小動畫越快 (每 4 個 draw() 迴圈換一幀)

function preload() {
  // 預先載入圖片資源
  // 路徑指向 '1' 資料夾下的 'stop' 子資料夾中的 'stop.png'
  spriteSheet = loadImage('1/stop/stop.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  noSmooth(); // 讓像素風格的圖片放大後保持清晰，不會模糊
}

function draw() {
  // 設定背景顏色
  background('#d1b3c4');

  // 計算目前要顯示的影格索引 (frame index)
  // frameCount 是 p5.js 的內建變數，會從 0 開始累加
  const idx = floor(frameCount / animSpeed) % totalFrames;
  const sx = idx * frameW; // 來源圖片的 x 座標，根據目前影格計算
  const sy = 0; // 來源圖片的 y 座標 (因為是水平排列，所以 y 都是 0)

  // 在畫布中央繪製動畫影格
  image(
    spriteSheet,
    width / 2, height / 2, // 在畫布上繪製的目標中心位置
    frameW * scaleFactor,   // 在畫布上繪製的寬度 (放大後)
    frameH * scaleFactor,   // 在畫布上繪製的高度 (放大後)
    sx, sy,                 // 從來源圖片 (spriteSheet) 擷取的左上角座標
    frameW, frameH          // 從來源圖片擷取的寬高 (單一影格的原始尺寸)
  );
}

function windowResized() {
  // 當瀏覽器視窗大小改變時，自動調整畫布大小
  resizeCanvas(windowWidth, windowHeight);
}

function windowResized() {
  // 當瀏覽器視窗大小改變時，自動調整畫布大小
  resizeCanvas(windowWidth, windowHeight);
}
