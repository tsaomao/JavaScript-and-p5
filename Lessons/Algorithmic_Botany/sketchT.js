// Template includes basic matter js cleanup
// matter.js module aliases
var Engine = Matter.Engine,
  // We're gonna do our own rendering in p5.js
  // Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;

var engine;
var world;

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
  // make a thing for boxes to bounce off of
  // note option to make this body static, so it's not affected
  // by gravity
  var options = {
    isStatic: true
  }
  // height and width must be global variables
  ground = Bodies.rectangle(width/2, height - 50, width, 100, options);
  World.add(world, ground);
}

function draw() {
  // draw() gets called on a cycle (so it can keep rendering).
  background(51);

  // render the ground
  fill(120);
  noStroke();
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, width, 100);
}
