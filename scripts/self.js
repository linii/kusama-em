var img;

function preload() {
	img = loadImage("kusama_ny.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // noCursor();
}

function draw() {
	for (var i = 0; i < randomGaussian(mouseX/5); i++) {
		var d = new Dot();
		d.render();
	}
}

function Dot(x, y) {
}

Dot.prototype.render = function() {
	noStroke();
	var pos =  mouseX / 2.5;
	image(img, mouseX, mouseY, randomGaussian(img.width / pos), randomGaussian(img.height / pos), 0, 0);
	rotate(PI/randomGaussian(3.0));
}
