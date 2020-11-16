var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 50);
  fixedRect.shapeColor = "green";
  fixedRect.velocityX = 4;
  movingRect = createSprite(600, 200, 40, 40);
  movingRect.shapeColor = "green";
  movingRect.velocityX = -4;
  
}

function draw() {
  background("black");
  // movingRect.x = World.mouseX;
  // movingRect.y = World.mouseY;  
  
  // if(movingRect.x-fixedRect.x <= movingRect.width/2 + fixedRect.width/2 && 
  //   fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2 &&
  //   movingRect.y - fixedRect.y <= movingRect.height/2 + fixedRect.height/2 &&
  //   fixedRect.y - movingRect.y <= movingRect.height/2 + fixedRect.height/2){
  //   movingRect.shapeColor = "red";
  //   fixedRect.shapeColor = "red";
  // }
  // else{
  //   movingRect.shapeColor = "green";
  //   fixedRect.shapeColor = "green";
  // }

  if(movingRect.x-fixedRect.x <= movingRect.width/2 + fixedRect.width/2 && 
    fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2 &&
    movingRect.y - fixedRect.y <= movingRect.height/2 + fixedRect.height/2 &&
    fixedRect.y - movingRect.y <= movingRect.height/2 + fixedRect.height/2){
      fixedRect.velocityX = -1 * fixedRect.velocityX;
      fixedRect.velocityY = -1 * fixedRect.velocityY;

      movingRect.velocityX = -1 * movingRect.velocityX;
      movingRect.velocityY = -1 * movingRect.velocityY;

    }


  drawSprites();
}