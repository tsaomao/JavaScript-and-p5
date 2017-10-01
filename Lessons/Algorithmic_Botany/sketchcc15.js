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
var toplen;
var maxLevels; // of recursion, for this canvas size
var tree = [];
var leaves = [];
var root;

var count = 0;

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

  // Set up tree root trunk
  var a = createVector(width/2, height);
  var b = createVector(width/2, height - 100);
  root = new Branch(a, b);

  tree[0] = root;
}

function draw() {
  // draw() gets called on a cycle (so it can keep rendering).
  background(51);

  for (var i = 0; i < tree.length; i++) {
    tree[i].show();
    // tree[i].jitter();
  }

  for (var i = 0; i < leaves.length; i++) {
    fill(255, 0, 100, 100);
    noStroke();
    ellipse(leaves[i].x, leaves[i].y, 8, 8);
    leaves[i].y += random(0, 2);
  }
}

function mousePressed() {
  for(var i = tree.length - 1; i >= 0; i--) {
    if (!tree[i].finished) {
      tree.push(tree[i].rightBranch());
      tree.push(tree[i].leftBranch());
      tree[i].finished = true;
    }
  }
  count++;

  if (count === 6) {
    for (var i = 0; i < tree.length; i++) {
      if (!tree[i].finished){
        var leaf = tree[i].end.copy();
        leaves.push(leaf);
      }
    }
  }
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
