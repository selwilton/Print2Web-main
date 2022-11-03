var canvas;
var mic;
var mainContainer;





function windowResized() {
  resizeCanvas(innerWidth, innerHeight / 2);
}

function setup() {
  mainContainer = document.getElementById('app-container')
  mainContainer
    .setAttribute('style',
      `width: 100vw; height: ${window.innerHeight / 2}px`);
  background('#FF126282');
  canvas = createCanvas(innerWidth, windowHeight / 2);
  canvas.position(0, 0);
  // button = createButton('Save Image');
  // button.style('font-size', '20px');
  // button.position(1000, 785);
  // button.mousePressed(saveDrawing);
}

function keyPressed() {
  clear();
}

function draw() {
  // fill('#FF126282');
  //  fill(50, 50, 300);
  if (mouseIsPressed) {
    circle(mouseX, mouseY, 70);
    fill(('#FF48B0'));
    // blendMode(DIFFERENCE);
    stroke(2);
    strokeWeight(1);

  }
}

function changeBackgroundImage({ target: { id } }) {
  const imagepath = `placeholder${id.split('-')[1]}.jpg`;
  console.log(imagepath);
  document.getElementById('background-image').setAttribute('src', imagepath);
}

function saveDrawing() {
  save("Picture.jpg");
}