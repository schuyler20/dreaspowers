var sarah=300;


//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
    strokeWeight(9);
    stroke(255,100);
}

//The draw function happens over and over again
function draw() {
  background(173,145,230); //an RGB color for the canvas' background
  //circle
  stroke(255,403 ,127) // an RGB color for the circle's border
  fill(255,500,135,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(mouseX,mouseY,20,20); // center of canvas, 20px dia
 fill(345,120,555,sarah);
 rect(100,100,75,75);
 }

function mousePressed(){
	sarah=sarah-30;
}

let x = [],
  y = [],
  segNum = 20,
  segLength = 18;

for (let i = 0; i < segNum; i++) {
  x[i] = 0;
  y[i] = 0;
}

function setup() {
  createCanvas(710, 400);
  strokeWeight(9);
  stroke(255, 100);
}

function draw() {
  background(0);
  dragSegment(0, mouseX, mouseY);
  for (let i = 0; i < x.length - 1; i++) {
    dragSegment(i + 1, x[i], y[i]);
  }
}

function dragSegment(i, xin, yin) {
  const dx = xin - x[i];
  const dy = yin - y[i];
  const angle = atan2(dy, dx);
  x[i] = xin - cos(angle) * segLength;
  y[i] = yin - sin(angle) * segLength;
  segment(x[i], y[i], angle);
}

function segment(x, y, a) {
  push();
  translate(x, y);
  rotate(a);
  line(0, 0, segLength, 0);
  pop();
}

