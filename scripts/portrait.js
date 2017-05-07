var dots = new Array();
var stop = false;
var c = 1;
var i = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();
  noFill();
}

function draw() {
	for (var i = 0; i < 10; i++) {
		var d = new Dot();
		d.render();
	}

	c++;
}

function Dot(x, y) {
	colorMode(RGB, 255, 255, 255, 1);
	this.sizeX = randomGaussian(15, 10);
	this.sizeY = randomGaussian(this.sizeX, 1);

	this.x = random(windowWidth);
	this.y = random(windowHeight);
}

Dot.prototype.render = function() {
	noStroke();
	var size = randomGaussian(1, 1);
	triangle(size + this.x, size * 2 + this.y, this.x, this.y, size * 2 + this.x, this.y);
	fill(randomGaussian(192, 5),
		randomGaussian(192, 5),
		randomGaussian(192, 5),
		randomGaussian(0.8, 0.1));
	rotate(PI/randomGaussian(3.0, 1));
}
