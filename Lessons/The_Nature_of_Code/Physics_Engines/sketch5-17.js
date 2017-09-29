// matter.js module aliases
var Engine = Matter.Engine,
  // We're gonna do our own rendering in p5.js
  // Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;

var engine;
var world;
var boxes = [];

function setup() {
  // setup() gets called once
  createCanvas(400, 400);
  // make shapes get filled with white instead of default black
  fill(255);
  // create an engine
  engine = Engine.create();
  // create world var to keep track of the world
  world = engine.world;
  // make sure the world is running
  Engine.run(engine);
}

function mousePressed() {
  boxes.push(new Box(mouseX, mouseY, 20, 20));
}

function draw() {
  // draw() gets called on a cycle (so it can keep rendering).
  background(51);
  // query physics engine for box location
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].show();
  }
}
