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
  // Light trails effect
  background(0, 20); // Reduce opacity to leave trails

  for (let i = 0; i < stars.length; i++) {
    let star = stars[i];

    // Glittering effect: Randomly change brightness
    let brightness = random(150, 255);

    // Check if the mouse is close to the star for an interactive effect
    if (dist(mouseX, mouseY, star.x, star.y) < 50) {
      fill(random(100, 255), random(100, 255), random(100, 255));
      star.size = random(4, 15); // Larger size for closer stars
    } else {
      fill(brightness);
      star.size = random(1, 3); // Regular glittering effect
    }

    ellipse(star.x, star.y, star.size);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
