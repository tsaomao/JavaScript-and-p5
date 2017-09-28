function setup() {
  // setup() gets called once
  // The Coding Train has a line drawing of a rectangle.
  // Assume p5 defaults now to filled with black.
  createCanvas(200, 200);
  // set fill to white
  fill(255)
}

function draw() {
  // draw() gets called on a cycle (so it can keep rendering).
  rect(50, 50, 20, 20);
}
