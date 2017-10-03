function Branch(begin, end) {
  this.begin = begin;
  this.end = end;
  this.finished = false;

  this.jitter = function() {
    this.end.x += random(-1, 1);
    this.end.y += random(-1, 1);
  }

  this.show = function() {
    stroke(255);
    line(this.begin.x, this.begin.y, this.end.x, this.end.y);
  }

  this.rightBranch = function() {
    // Create directional vector from current line
    var dir = p5.Vector.sub(this.end, this.begin);
    // Rotate directional vector 45 degrees (PI / 4)
    dir.rotate(PI / 6);
    // Scale directional vector
    dir.mult(0.67);
    // Add rotated directional avector to current end vector to find new End vector
    var newEnd = p5.Vector.add(this.end, dir);

    var right = new Branch(this.end, newEnd);

    return right;
  }

  this.leftBranch = function() {
    // Create directional vector from current line
    var dir = p5.Vector.sub(this.end, this.begin);
    // Rotate directional vector 45 degrees (PI / 4)
    dir.rotate(-PI / 4);
    // Scale directional vector
    dir.mult(0.67);
    // Add rotated directional avector to current end vector to find new End vector
    var newEnd = p5.Vector.add(this.end, dir);

    var left = new Branch(this.end, newEnd);

    return left;
  }
}
