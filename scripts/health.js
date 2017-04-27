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
	var sizeX = randomGaussian(15, 10);
	var sizeY = randomGaussian(sizeX, 1);

	var x = random(windowWidth);
	var y = random(windowHeight);

	var d = new Dot(sizeX, sizeY, x, y);

	d.render();
	append(dots, d);
}

function Dot(sizeX, sizeY, x, y) {
	colorMode(RGB, 255, 255, 255, 1);

	this.sizeX = sizeX;
	this.sizeY = sizeY;
	this.x = x;
	this.y = y;

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
	// scale(scaleX, scaleY);
	// print(scaleX);
}
