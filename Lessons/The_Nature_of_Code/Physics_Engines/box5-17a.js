function Box(x, y, w, h) {
  // Box() encapsulates body state and rendering in
  // one function for ease of use in the matter.js
  // world/World
  var redval = 0;
  var greenval = 0;
  var blueval = 0;

  var options = {
    friction: 0.3,
    restitution: 0.6
  }
  this.body = Bodies.rectangle(x, y, w, h, options);
  this.w = w;
  this.h = h;
  World.add(world, this.body);

  // Random color
  redval = random(10, 250);
  greenval = random(10, 250);
  blueval = random(10, 250);

  this.show = function() {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    // This rotates objects to the same angle as they
    // tip and rotate in matter.js
    rotate(angle);
    // This reconciles p5.js's rendering of shapes
    // to matter.js's conceptualization of objects
    rectMode(CENTER);
    // Be more thoughtful about rendering
    strokeWeight(1);
    stroke(255);
    fill(redval, greenval, blueval);
    // Render box as p5.js rect
    rect(0, 0, this.w, this.h);
    pop();
  }

  // Removes the box from the world
  this.destroy = function() {
    World.remove(world, this.body);
  }
}
