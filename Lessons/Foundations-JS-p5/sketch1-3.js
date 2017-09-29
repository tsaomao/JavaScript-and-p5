function setup() {
  // setup() gets called once
  // The Coding Train has a line drawing of a rectangle.
  // Assume p5 defaults now to filled with black.
  createCanvas(640, 360);
  // set fill to white
  fill(255)
}

function draw() {
  // draw() gets called on a cycle (so it can keep rendering).
  rect(100, 200, 75, 125);
  line(75, 125, 150, 175);
  arc(50, 50, 80, 80, 0, PI+QUARTER_PI, CHORD);
}
