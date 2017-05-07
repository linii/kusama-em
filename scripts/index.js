function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
	var d = new Dot();
	d.render();
}

function Dot(x, y) {
	colorMode(RGB, 255, 255, 255, 1);

	this.sizeX = randomGaussian(15, 10);
	this.sizeY = randomGaussian(this.sizeX, 1);
	this.x = random(windowWidth);
	this.y = random(windowHeight);
}

Dot.prototype.render = function() {
	fill(red);
	ellipse(this.x, this.y, 10, 10);
}
