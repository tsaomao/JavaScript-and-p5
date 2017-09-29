// matter.js module aliases
var Engine = Matter.Engine,
  // We're gonna do our own rendering in p5.js
  // Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;

var engine;
var world;
var box1;

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
  // create an object
  box1 = new Box(200, 100, 50, 50);
}

function draw() {
  // draw() gets called on a cycle (so it can keep rendering).
  background(51);
  // query physics engine for box location
  box1.show();
}
