var c = 0;
function setup() {
  createCanvas(displayWidth, displayHeight);
  frameRate(20);
}

function draw() {
	var d = new Dot();
	d.render();
	c++;
}

function Dot(x, y) {
	this.x = random(windowWidth - c, windowWidth);
	this.y = random(0, c);
}

Dot.prototype.render = function() {
	fill(255, 30, 80, randomGaussian(30));
	noStroke();
	arc(this.x, this.y + 10, randomGaussian(70), randomGaussian(70), 0, randomGaussian(QUARTER_PI), CHORD);
}
