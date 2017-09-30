// Template includes basic matter js cleanup
// matter.js module aliases
var Engine = Matter.Engine,
  // We're gonna do our own rendering in p5.js
  // Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;

var engine;
var world;

// Canvas positioning
var cnv;

// Branch/Recursion related variables
var shortenFactor = 0.67;
var shortestBranch = 4; // pixels
var rotAngle;
var jitterAngle;
var toplen;
var maxLevels; // of recursion, for this canvas size

// Controls
var explanatoryText;
var absExplanatoryTextPos;
var slider;
var sliderLabel;
var absAngleSliderPos;
var jitterSlider;
var jitterSliderLabel;
var absJitterSliderPos;

// Keep record of jitter angles


function setup() {
  // setup() gets called once
  cnv = createCanvas(windowWidth - 100, windowHeight - 200);
  centerCanvas();

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

  // Controls
  explanatoryText = createElement('p', "Note: Jitter doesn't work the way I want it to. I need to figure out how to store the randomness for later retrieval while building the branches.")
  absExplanatoryTextPos = explanatoryText.position();
  sliderLabel = createElement('p', 'Angle (0 to pi/2):');
  absAngleSliderPos = sliderLabel.position();
  slider = createSlider(0, PI/2, rotAngle, 0.01);
  jitterSliderLabel = createElement('p', 'Angle Jitter (0 to pi/8):')
  absJitterSliderPos = jitterSliderLabel.position();
  jitterSlider = createSlider(0, PI/8, 0, 0.01);

  adjustControlPositions();
}

function draw() {
  // draw() gets called on a cycle (so it can keep rendering).
  background(51);

  // get slider value for rotAngle
  rotAngle = slider.value();
  jitterAngle = jitterSlider.value();

  // draw trunk
  stroke(255);
  strokeWeight(4);
  translate(width/2, height);
  branch(toplen, maxLevels);
}

function resizeCanvas_m() {
  var width = windowWidth - 100;
  var height = windowHeight - 200;
  resizeCanvas(width, height);
}

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function windowResized() {
  centerCanvas();
  resizeCanvas_m();
  adjustControlPositions();
}

function adjustControlPositions(elem) {
  //sliderLabel.position((windowWidth - width)/2, cnv.position().y + (height / 2) + 10);
  //slider.position(sliderLabel.position().x + sliderLabel.width, sliderLabel.position().y);
  explanatoryText.position(cnv.position().x, absExplanatoryTextPos.y);

  sliderLabel.position(cnv.position().x, absAngleSliderPos.y - 10);
  slider.position(sliderLabel.position().x + 120, sliderLabel.position().y);

  jitterSliderLabel.position(cnv.position().x, absJitterSliderPos.y - 60);
  jitterSlider.position(jitterSliderLabel.position().x + 200, jitterSliderLabel.position().y);
}

function branch(len, weight) {
  var jitterFudge = random([-1, 1]) * random(jitterAngle);
  // My first impulse was to define a temporary variable for weight
  // forgetting, of course, that recursion takes care of this for you
  // as it drills down the execution path/flow.
  strokeWeight(weight);
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > shortestBranch) {
    // push() saves the current transformation
    push();
    rotate(rotAngle + jitterFudge);
    branch(len * shortenFactor, weight - 1);
    // pop() restores the transformation
    pop();
    // save again
    push();
    rotate(-rotAngle + jitterFudge);
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
