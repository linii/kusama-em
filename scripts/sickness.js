var dots = new Array();

function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();
  noFill();
}

function draw() {
	for (var i = 0; i < dots.length; i++) {
		dots[i].flux();
	}
}

function mouseDragged() {
	var d = new Dot();
	d.render();
	append(dots, d);
}

function Dot(x, y) {
	colorMode(RGB, 255, 255, 255, 1);

	this.sizeX = randomGaussian(15, 10);
	this.sizeY = randomGaussian(this.sizeX, 1);

	this.r = randomGaussian(230, 5);
	this.g = randomGaussian(0, 2) + 2;
	this.a = randomGaussian(0.6, 0.2);
	this.s = randomGaussian(1, 0.5);

	this.x = random(windowWidth);
	this.y = random(windowHeight);
}

Dot.prototype.render = function() {
	stroke(this.r, this.g, 0, this.a);
	strokeWeight(this.s);
	fill(255);
	ellipse(this.x, this.y, this.sizeX, this.sizeY);
}

Dot.prototype.flux = function() {
	var scaleX = randomGaussian(1.0, 0.01);
	var scaleY = randomGaussian(1.0, 0.01);
	ellipse(this.x, this.y, this.sizeX, this.sizeY);
	scale(scaleX, scaleY);
	// print(scaleX);
}
