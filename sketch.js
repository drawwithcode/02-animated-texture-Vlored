let angle;
let a = 20;
let b = 40;
let c = 50;
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
}

function draw() {
  angle = PI / 80 - (PI * ((sin(frameCount / 20) * PI) / 4)) / 100;
  background("black");
  translate(windowWidth / 2, windowHeight / 2);
  stroke(a + frameCount, b, c + frameCount);
  noFill();

  for (let i = 0; i < 360; i++) {
    let r = 8 * i * 0.8;
    rect(-r / 2, -r / 2, r, r);
    rotate(angle);
  }
}
