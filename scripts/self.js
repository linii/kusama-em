var img;

function preload() {
	img = loadImage("kusama_ny.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();
}

function draw() {
	for (var i = 0; i < 10; i++) {
		var d = new Dot();
		d.render();
	}
}

function Dot(x, y) {
	colorMode(RGB, 255, 255, 255, 1);
	this.sizeX = randomGaussian(1, 0.5);
	this.sizeY = randomGaussian(1, 0.5);

	this.x = random(windowWidth);
	this.y = random(windowHeight);
}

Dot.prototype.render = function() {
	noStroke();
	image(img, this.x, this.y, this.sizeX, this.sizeY);
	rotate(PI/randomGaussian(3.0, 1));
}
