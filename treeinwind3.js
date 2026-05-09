let img;
let particles = [];
let step = 2; // 控制粒子密度，值越小粒子越多、效果越细腻

// 先预加载图片
function preload() {
  img = loadImage('rose.jpg');
}

function setup() {
  createCanvas(700, 800);
  img.resize(width, height); // 让图片适配画布大小
  noStroke();
  
  // 初始化粒子
  initParticles();
}

function draw() {
  // 画一层淡淡的背景，制造拖影感
  background(10, 15, 30, 15);

  // 更新并绘制所有粒子
  for (let p of particles) {
    // 微风扰动效果，让画面有呼吸感
    let wind = sin(frameCount * 0.02 + p.off) * 1.2;
    
    fill(p.color);
    rect(p.x + wind, p.y, 2, 2); // 3x3的像素粒子
  }
}

// 初始化粒子，按图片像素采样
function initParticles() {
  img.loadPixels();
  
  for (let y = 0; y < img.height; y += step) {
    for (let x = 0; x < img.width; x += step) {
      let idx = (x + y * img.width) * 4;
      let r = img.pixels[idx];
      let g = img.pixels[idx + 1];
      let b = img.pixels[idx + 2];
      let a = img.pixels[idx + 3];
      
      // 过滤掉图片里过暗或透明的部分，让主体更突出
      if (r + g + b > 30 && a > 50) {
        particles.push({
          x: x,
          y: y,
          color: color(r, g, b, 200), // 加入透明度，让粒子有层次感
          off: random(0, TWO_PI) // 每个粒子随机相位，让晃动不同步
        });
      }
    }
  }
}
