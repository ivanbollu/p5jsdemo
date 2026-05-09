let particles = [];

function setup() {
  createCanvas(600, 800);
  noStroke();
  generateRoseParticles(); // 直接生成粒子，不用图片
}

function draw() {
  // 唯美暗背景 + 轻微拖影
  background(10, 12, 25, 20);
  
  // 绘制所有像素粒子
  for (let p of particles) {
    // 微风晃动（每颗不一样，超自然）
    let wind = sin(frameCount * 0.025 + p.offset) * 1.8;
    
    fill(p.col);
    rect(p.x + wind, p.y, 3, 3); // 像素小方块
  }
}

// 直接生成玫瑰粒子（不用图片！不报错！）
function generateRoseParticles() {
  let cx = width / 2;
  let cy = height / 2 + 80;

  // 花瓣粒子
  for (let i = 0; i < 1200; i++) {
    let r = random(80, 240);
    let angle = random(TWO_PI);
    let x = cx + cos(angle) * r * random(0.8, 1);
    let y = cy + sin(angle) * r * random(0.5, 1) - 80;

    // 玫瑰渐变色彩
    let rCol = random(180, 240);
    let gCol = random(40, 90);
    let bCol = random(80, 140);
    
    particles.push({
      x: x,
      y: y,
      col: color(rCol, gCol, bCol, 220),
      offset: random(TWO_PI)
    });
  }

  // 花茎粒子
  for (let i = 0; i < 150; i++) {
    particles.push({
      x: cx + random(-6, 6),
      y: cy + 80 + random(150),
      col: color(30, 100, 50, 220),
      offset: random(TWO_PI)
    });
  }
}
