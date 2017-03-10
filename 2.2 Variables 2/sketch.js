var circleX = 0;
var circleY = 0;
var circleSize = 0;
function setup() {
    createCanvas(640, 360);
}

function draw() {
background(250,250,100);
fill(250,200,200);
ellipse(circleX,circleY,circleSize,circleSize);

circleX = circleX+1;
circleY = circleY+1;
circleSize = circleSize +0.5;
}