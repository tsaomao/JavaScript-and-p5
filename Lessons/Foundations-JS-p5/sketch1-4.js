function setup() {
  // setup() gets called once
  // The Coding Train has a line drawing of a rectangle.
  createCanvas(480, 270);
  // Assume p5 defaults now to filled with black.
  // set fill to white
  fill(255)
}

function draw() {
  // draw() gets called on a cycle (so it can keep rendering).
  // white
  //background(255);
  // grey
  // Also: background(150);
  background(150, 150, 150);
  ellipseMode(CENTER);
  rectMode(CENTER);

  // Body
  // Also can use a 4th argument with fill (transparency/alpha)
  fill(255,0,0);
  rect(240, 145, 20, 100);

  // Head
  // Also can use a 4th argument with fill (transparency/alpha)
  // fill(0, 0, 255);
  fill(0, 0, 255, 50);
  ellipse(240, 115, 60, 60);

  // Eyes
  fill(0, 255, 0);
  ellipse(221, 115, 16, 32);
  ellipse(259, 115, 16, 32);

  // Legs
  line(230, 195, 220, 205);
  line(250, 195, 260, 205);
}
