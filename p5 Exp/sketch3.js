function setup() {
	createCanvas(600, 400);
	background(250, 250, 100);
}

function draw() {
	noStroke();
	fill(250, 200, 200, 50);
	ellipse(mouseX, mouseY, 25, 25);
	
	//fill(200, 250, 200);
	//rect(400, mouseY, 50, 50);
}

function mousePressed() {
	// event
	background(255, 255, 100);
}