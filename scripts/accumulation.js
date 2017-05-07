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
	if (!stop && c % i == 0) {
		var d = new Dot();
		d.render();
		append(dots, d);
		i += 2;
	}

	c++;
}

function mouseMoved() {
	stop = true;
}

function Dot(x, y) {
	colorMode(RGB, 255, 255, 255, 1);

	this.sizeX = randomGaussian(15, 10);
	this.sizeY = randomGaussian(this.sizeX, 1);
	this.x = random(windowWidth);
	this.y = random(windowHeight);

	this.r = randomGaussian(230, 5);
	this.g = randomGaussian(0, 2) + 2;
	this.a = randomGaussian(0.6, 0.2);
	this.s = randomGaussian(1, 0.5);
}

Dot.prototype.render = function() {
	stroke(this.r, this.g, 0, this.a);
	strokeWeight(this.s);
	fill(255);
	ellipse(this.x, this.y, this.sizeX, this.sizeY);
}

Dot.prototype.flux = function() {
	var scaleX = randomGaussian(4.0, 2.0);
	var scaleY = randomGaussian(4.0, 2.0);
	ellipse(this.x, this.y, this.sizeX + scaleX, this.sizeY + scaleY);
}
