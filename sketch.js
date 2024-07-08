function setup() {
  createCanvas(400, 400);
  colorMode(HSB);

  // Set angle mode so that atan2() returns angles in degrees
  angleMode(DEGREES);

  describe('A face with two eyes that follow the cursor, and additional features like mouth, nose, hair, and ears.');
}

function draw() {
  background(0);

  // Draw left eye
  let leftX = 150;
  let leftY = 200;

  // Calculate angle between left eye and mouse
  let leftAngle = atan2(mouseY - leftY, mouseX - leftX);

  push();
  translate(leftX, leftY);
  fill(255);
  ellipse(0, 0, 50, 50);
  rotate(leftAngle);
  fill(0);
  ellipse(12.5, 0, 25, 25);
  pop();

  // Draw right eye
  let rightX = 250;
  let rightY = 200;

  // Calculate angle between right eye and angle
  let rightAngle = atan2(mouseY - rightY, mouseX - rightX);

  push();
  translate(rightX, rightY);
  fill(255);
  ellipse(0, 0, 50, 50);
  rotate(rightAngle);
  fill(0);
  ellipse(12.5, 0, 25, 25);
  pop();

  // Draw mouth
  fill(255, 0, 0);
  ellipse(200, 300, 100, 50);

  // Draw nose
  fill(255);
  triangle(190, 220, 210, 220, 200, 260);

  // Draw ears
  fill(255);
  ellipse(100, 200, 30, 50); // Left ear
  ellipse(300, 200, 30, 50); // Right ear

  // Draw hair
  fill(50, 100, 100);
  beginShape();
  vertex(120, 100);
  vertex(280, 100);
  vertex(240, 50);
  vertex(200, 80);
  vertex(160, 50);
  endShape(CLOSE);
}
