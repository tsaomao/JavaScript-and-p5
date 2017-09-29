function setup() {
  // setup() gets called once
  // The Coding Train has a line drawing of a rectangle.
  // Assume p5 defaults now to filled with black.
  createCanvas(480, 270);
  // set fill to white
  fill(255)
}

function draw() {
  // draw() gets called on a cycle (so it can keep rendering).
  background(255);
  ellipseMode(CENTER);
  rectMode(CENTER);

  // Body
  rect(240, 145, 20, 100);

  // Head
  ellipse(240, 115, 60, 60);

  // Eyes
  ellipse(221, 115, 16, 32);
  ellipse(259, 115, 16, 32);

  // Legs
  line(230, 195, 220, 205);
  line(250, 195, 260, 205);
}
