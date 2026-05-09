
        function setup() {
          createCanvas(700, 450);
          noStroke();
        }
        
        function draw() {
          // 渐变天空
          let skyTop = color(25, 35, 60);
          let skyBot = color(120, 150, 200);
          for (let y = 0; y < height/2; y++) {
            let inter = map(y, 0, height/2, 0, 1);
            let c = lerpColor(skyTop, skyBot, inter);
            stroke(c);
            line(0, y, width, y);
          }
        
          // 远山
          noStroke();
          fill(70, 90, 130);
          ellipse(150, 320, 350, 180);
          ellipse(500, 300, 400, 200);
        
          // 草地
          fill(45, 80, 50);
          rect(0, 350, width, 100);
        
          // 画树
          artTree(80, 360, 0.8);
          artTree(180, 360, 1.1);
          artTree(290, 360, 0.9);
          artTree(400, 360, 1.2);
          artTree(520, 360, 0.85);
          artTree(630, 360, 1.05);
        }
        
        // 艺术树函数（已修复错误）
        function artTree(x, y, s) {
          push();
          translate(x, y);
          
          // 缩放（用 s 代替 scale，避免冲突）
          scale(s);
        
          // 微风摆动
          let wind = sin(frameCount * 0.03 + x * 0.05) * 8;
          
          // 树干
          fill(60, 40, 30);
          rect(-6, -80, 12, 80);
        
          // 树冠晃动
          push();
          translate(wind, -15);
          
          fill(20, 70, 40, 220);
          ellipse(0, -95, 55, 65);
          fill(30, 90, 50, 200);
          ellipse(-22, -75, 45, 55);
          ellipse(22, -75, 45, 55);
          fill(40, 110, 60, 180);
          ellipse(0, -70, 50, 60);
          
          pop();
          pop();
        }
