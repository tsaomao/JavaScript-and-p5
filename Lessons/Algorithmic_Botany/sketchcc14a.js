// Template includes basic matter js cleanup
// matter.js module aliases
var Engine = Matter.Engine,
  // We're gonna do our own rendering in p5.js
  // Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;

var engine;
var world;

// Branch/Recursion related variables
var shortenFactor = 0.67;
var shortestBranch = 4; // pixels
var rotAngle;
var toplen;
var maxLevels; // of recursion, for this canvas size

// Controls
var slider;

function setup() {
  // setup() gets called once
  createCanvas(windowWidth - 100, windowHeight - 100);
  // make shapes get filled with white instead of default black
  fill(255);
  // create an engine
  engine = Engine.create();
  // create world var to keep track of the world
  world = engine.world;
  // make sure the world is running
  Engine.run(engine);

  toplen = height/6;
  maxLevels = findlevels(toplen);
  rotAngle = PI/4;

  slider = createSlider(0, TWO_PI, rotAngle, 0.01);
}

function draw() {
  // draw() gets called on a cycle (so it can keep rendering).
  background(51);

  // get slider value for rotAngle
  rotAngle = slider.value();

  // draw trunk
  stroke(255);
  strokeWeight(4);
  translate(width/2, height);
  branch(toplen, maxLevels);
}

function branch(len, weight) {
  // My first impulse was to define a temporary variable for weight
  // forgetting, of course, that recursion takes care of this for you
  // as it drills down the execution path/flow.
  strokeWeight(weight);
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > shortestBranch) {
    // push() saves the current transformation
    push();
    rotate(rotAngle);
    branch(len * shortenFactor, weight - 1);
    // pop() restores the transformation
    pop();
    // save again
    push();
    rotate(-rotAngle);
    branch(len * shortenFactor, weight - 1);
    // restore again
    pop();
  }
  // line(0, 0, 0, -len*0.67);
}

function findlevels(len) {
  // Interrogate canvas dimensions, dynamically, to figure out
  // how many recursive levels to expect
  // returns integer
  var levels = 0;
  while (len > shortestBranch) {
    len = len * shortenFactor;
    levels = levels + 1;
  }
  return levels;
}
