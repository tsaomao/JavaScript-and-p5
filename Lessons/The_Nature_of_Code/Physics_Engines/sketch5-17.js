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
  // create an object
  box1 = Bodies.rectangle(100, 100, 80, 80);
  // make sure the world is running
  Engine.run(engine);
  // Add the body to the world (so physics can affect it)
  World.add(world, box1);
}

function draw() {
  // draw() gets called on a cycle (so it can keep rendering).
  background(51);
  // query physics engine for box location
  rect(box1.position.x, box1.position.y, 80, 80);
}
