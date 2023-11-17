let stars = [];

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  for (let i = 0; i < 500; i++) {
    let star = {
      x: random(0, width),
      y: random(0, height),
      size: random(1, 3)
    };
    stars.push(star);
  }
  frameRate(30); // Adjust frame rate for smoother animation
}

function draw() {
  background(0, 20); // Light trails effect with reduced opacity

  for (let i = 0; i < stars.length; i++) {
    let star = stars[i];

    // Check if the mouse is close to the star
    if (dist(mouseX, mouseY, star.x, star.y) < 50) {
      fill(random(100, 255), random(100, 255), random(100, 255));
      drawStar(star.x, star.y, star.size * 10, star.size, 5); // Larger and colorful stars when mouse is close
    } else {
      fill(255);
      drawStar(star.x, star.y, star.size, star.size / 2, 5); // Regular stars
    }
  }
}

function drawStar(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
