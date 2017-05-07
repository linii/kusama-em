var c = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();
  noFill();
  frameRate(100);
}

function draw() {
	var d = new Dot();
	d.render();
	c++;
}

function Dot(x, y) {
	colorMode(RGB, 255, 255, 255, 1);
	this.sizeX = randomGaussian(15, 10);
	this.sizeY = randomGaussian(this.sizeX, 1);

	this.x = random(windowWidth/2 - c/5, windowWidth/2 + c/5);
	this.y = random(windowHeight/2 - c/5, windowHeight/2 + c/5);
}

Dot.prototype.render = function() {
	noStroke();
	var size = randomGaussian(2);
	triangle(size + this.x, size * 2 + this.y, this.x, this.y, size * 2 + this.x, this.y);
	fill(randomGaussian(192, 5),
	randomGaussian(192, 5),
	randomGaussian(192, 5),
	randomGaussian(0.8));
	rotate(PI/randomGaussian(3.0, 1));
}
