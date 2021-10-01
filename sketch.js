//let m = mouseX;
// Triangle01: Bottom Big Triangle
let bigTriangleBottom = {
  colorR: 245,
  colorG: 238,
  colorB: 128,
  x1: 60,
  y1: 440,
  x2: 300,
  y2: 580,
  x3: 300,
  y3: 300
}


let angle = 0;

let honeyCellWidth = 480;
let honeyCellHeightOffset = 420;

let scaleFactor = 0.1;


function setup() {
  createCanvas(1600, 1600);
  angleMode(DEGREES);
}

function draw() {
  background(220);

  //Larger Shape (below)
  noStroke();




  // Overall Scale Start
  push();
  // this is where we come back to engage scale with mouse

  // when mouseX is close to 0 (left side of screen), then the scale is small (0.01)
  // when mouseX is close to the right (1600), then the scale is big (1)

  scaleFactor = map(mouseX, 0, 1600, 0, 1);
  scale(scaleFactor);
  // scale(0.2);



  for (let i = 0; i < 50; i++) {
    for (let j = 0; j < 25; j++) {
      // console.log(i);

      ///////////////////////////////////////////////////////////////////////////
      // Couldn't get the x y offset to work

      // console.log(i + (i%2)/2)
      // let honeyCellWidthNumber = honeyCellWidth * (i + (i%2)/2);
      // let honeyCellHeightNumber = honeyCellHeightOffset * j;

      // console.log(i + (i % 2)/2);

      // push();
      // // translate(honeyCellWidth * i + (i % 2)/2, honeyCellHeightOffset * j);
      // // translate(honeyCellWidthNumber, honeyCellHeightNumber);
      // oneHoneyCell();
      // pop();

      ///////////////////////////////////////////////////////////////////////////

      // This is where you shift row 1 and row 2 in the j (or Y) direction
      push();
      translate(0, honeyCellHeightOffset * 2 * j)

      // Created 2 rows of hexagons
      // Row 1 of hexagons
      push();
      translate(honeyCellWidth * (i + 0.5), honeyCellHeightOffset * 1);
      oneHoneyCell();
      pop();

      // Row 2 of hexagons
      push();
      translate(honeyCellWidth * (i + 0), honeyCellHeightOffset * 2);
      oneHoneyCell();
      pop();

      pop();


      //
      // push();
      // translate(honeyCellWidth * (i + 0.5), honeyCellHeightOffset * 3);
      // oneHoneyCell();
      // pop();
      //
      // push();
      // translate(honeyCellWidth * (i + 0), honeyCellHeightOffset * 4);
      // oneHoneyCell();
      // pop();
      //
      // push();
      // translate(honeyCellWidth * (i + 0.5), honeyCellHeightOffset * 5);
      // oneHoneyCell();
      // pop();
      //
      // push();
      // translate(honeyCellWidth * (i + 0), honeyCellHeightOffset * 6);
      // oneHoneyCell();
      // pop();
      //
      // push();
      // translate(honeyCellWidth * (i + 0.5), honeyCellHeightOffset * 7);
      // oneHoneyCell();
      // pop();
      //
      // push();
      // translate(honeyCellWidth * (i + 0), honeyCellHeightOffset * 8);
      // oneHoneyCell();
      // pop();
      //
      // push();
      // translate(honeyCellWidth * (i + 0.5), honeyCellHeightOffset * 9);
      // oneHoneyCell();
      // pop();
      //
      // push();
      // translate(honeyCellWidth * (i + 0), honeyCellHeightOffset * 10);
      // oneHoneyCell();
      // pop();
    }





  }
  pop();
}


function oneHoneyCell() {

  push();
  rotate(angle);
  translate(0,0);

  //Bottom big triangle
  fill(bigTriangleBottom.colorR, bigTriangleBottom.colorG, bigTriangleBottom.colorB);
  push();
  triangle(bigTriangleBottom.x1, bigTriangleBottom.y1, bigTriangleBottom.x2, bigTriangleBottom.y2,bigTriangleBottom.x3, bigTriangleBottom.y3);
  triangle(300,580,540,440,300,300);
  pop();


  //Right big triangle
  fill(221,167,79);

  push();
  triangle(540,440,540,160,300,300);
  triangle(540,160,300,20,300,300);
  pop();

  // Left big triangle
  fill(184,108,44)

  push();
  triangle(300,20,60,160,300,300);
  triangle(60,160,60,440,300,300);
  pop();

  // angle++;

  //Smaller Shape (above)
  fill(184,108,44)
  // bottom small triangles
  push();
  triangle(180,370,300,440,300,300);
  pop();

  push();
  triangle(300,440,420,370,300,300);
  pop();

  fill(245,238,128)

  // Right small triangles
  push();
  triangle(420,370,420,230,300,300);
  pop();

  push();
  triangle(420,230,300,160,300,300);
  pop();

  fill(221,167,79)

  // left small triangles
  push();
  triangle(300,160,180,230,300,300);
  pop();

  push();
  triangle(180,230,180,370,300,300);
  pop();

  pop();

  angle++;
}
