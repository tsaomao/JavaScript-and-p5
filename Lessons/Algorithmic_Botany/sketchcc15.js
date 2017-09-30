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
}

function draw() {
  // draw() gets called on a cycle (so it can keep rendering).
  background(51);
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
}
