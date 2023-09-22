let size = document.getElementById('size');
let myAngle = document.getElementById('angle');

function setup() {
  //let canvas = createCanvas((windowWidth / 2), (windowHeight / 2));
  let canvas = createCanvas(800, 600);
  canvas.parent('sketch-holder');

}

function draw() {
  background(0);
  stroke('#FF0080');
  strokeWeight(4);

  translate(380, 580);
  branch(size.value);

  

}

function branch(len) {
  const angle = PI / 4;

  
  if (len < 2) {
    return;
  }

  line(0, 0, 0, -len);
  translate(0, -len);
  push();

  rotate(angle);
  branch(len * 0.67);
  pop();

  push();
  rotate(-angle);
  branch(len * 0.67);
  pop();
}



