// matter.js module aliases
var Engine = Matter.Engine,
  // We're gonna do our own rendering in p5.js
  // Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;

var engine;
var world;
var boxes = [];

var ground;

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

function mouseDragged() {
  boxes.push(new Box(mouseX, mouseY, random(5, 40), random(5, 40)));
}

function keyTyped() {
  if (key === ' ') {
    // Make a big box
    boxes.push(new Box(mouseX, 10, random(200, 400), random(200, 400)));
  } else if (key === 'c') {
    // Clear works by setting all boxes to a dead height and then they get swept
    // out at the next cleanup.
    boxes.forEach(function(elem) {
      elem.body.position.y = height + 100;
    });
  }
}

function cleanUpDeadBoxes(arr1) {
  // Dead boxes are any that have a position lower than the lowest y value of
  // the ground. Flush these from the boxes array to remove from memory.
  // Array is passed by reference
  // Gather the dead
  boxcleanups = arr1.filter(theDead);
  arr1 = arr1.filter(filterBoxes);
  // Process the dead (remove them from the world)
  boxcleanups.forEach(function(elem) {
    elem.destroy();
  });
  return arr1;
}

function filterBoxes(abox) {
    return abox.body.position.y < (height - 50);
}

function theDead(abox) {
    return abox.body.position.y >= (height - 50);
}

function draw() {
  // draw() gets called on a cycle (so it can keep rendering).
  background(51);
  // query physics engine for box location
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].show();
  }
  // render the ground
  fill(120);
  noStroke();
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, width, 100);
  boxes = cleanUpDeadBoxes(boxes);
}
