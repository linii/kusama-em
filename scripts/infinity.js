var x = 0;
var size;
var n = 0;

function setup() {
   createCanvas(windowWidth, windowHeight);
   noLoop();
   size = 5;
   noCursor();
 }

function draw() {
   // background(204);
   strokeWeight(random(0, size/10));
   stroke('red');
   // fill('red');
   ellipse(windowWidth - (x * size) % windowWidth, n * size, randomGaussian(size, size/8), randomGaussian(size, size/8));
   x += 1;
   if (x % int(windowWidth / size) - 1 == 0) {
   		print(int(windowWidth / size));
   		n +=1;
   }
 }
function mousePressed() {
   redraw();
 }

