var spark=0;
var variable=0;
let button;
var col=100;
var c=80;
var d=100




//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
  background(201,168,216);
  button = createButton ('colorize if loop')
  button.position(80,600);
}

function draw() {
  background (185,102,199)
}


//The draw function happens over and over again
function draw() {

  background(201,168,216); //an RGB color for the canvas' background
  //triangle
  stroke(22,95,142,255); // an RGB color for the triangle's border
  strokeWeight(10);
  fill(134,115,164); // an RGB color for the inside of the triangle (the last number refers to transparency (min. 0, max. 255))
  triangle(30,80,50,193,177,90);




  fill(122,95,142,255);//purple
  stroke(193,177,90);
  strokeWeight(5);
  rect(spark,50,70,80);
  

  




  

  }












