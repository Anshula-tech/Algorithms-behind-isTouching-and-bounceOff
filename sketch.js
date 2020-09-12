var a, b;

function setup() {
  createCanvas(800,400);
  a = createSprite(400, 0, 50, 80);
  b = createSprite(400, 500, 50, 80);

  a.velocityY = 5;
  b.velocityY = -5;

  //set the rectangles colors
  a.shapeColor = 'blue';
  b.shapeColor = 'blue';
}

function draw() {
  background(0); 
  
  a.debug = true;
  b.debug = true;
 
  if(a.x-b.x < a.width/2+b.width/2 && b.x-a.x < a.width/2+b.width/2){
    a.velocityX = a.velocityX*(-1);
    b.velocityX = b.velocityX*(-1);
  }
  
  if(a.y-b.y < a.height/2+b.height/2 && b.y-a.y < a.height/2+b.height/2){
    a.velocityY = a.velocityY*(-1);
    b.velocityY = b.velocityY*(-1);
  }
 
  drawSprites();
}