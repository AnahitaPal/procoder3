var fixedrect,movingrect;
var gameObject1,gameObject2,gameObject3,gameObject4;
function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400, 200, 60, 30);
  movingrect = createSprite(400, 300, 60, 30);
  gameObject1 = createSprite(500, 300, 60, 30);
  gameObject2 = createSprite(600, 300, 60, 30);
  gameObject3 = createSprite(700, 300, 60, 30);
  gameObject4 = createSprite(400, 300, 60, 30);
  gameObject1.shapeColor = "green";
  gameObject2.shapeColor = "green";
  gameObject3.shapeColor = "green";
  gameObject4.shapeColor = "green";
  gameObject3.velocityX = -5;
  gameObject2.velocityX = 5;
  movingrect.debug = true
}

function draw() {
  background(255,255,255); 
  movingrect.y = mouseY;
  movingrect.x = mouseX;
 
  if(isTouching(movingrect,gameObject1)){
    movingrect.shapeColor = "red";
    gameObject1.shapeColor = "red";
      } else {
        movingrect.shapeColor = "green";
        gameObject1.shapeColor = "green";
     }
    bounceOff(gameObject2,gameObject3);
  drawSprites();
}
function isTouching(object1,object2){
  if(object1.x - object2.x < object2.width/2 + object1.width/2 && 
    object2.x-object1.x < object2.width/2 + object1.width/2 &&
    object1.y - object2.y < object2.height/2 + object1.height/2 && 
    object2.y-object1.y < object2.height/2 + object1.height/2
    ){
return true ;
    }else{
 return false;
    }
}
function bounceOff(object1,object2){
  if(object1.x - object2.x < object2.width/2 + object1.width/2 && 
    object2.x-object1.x < object2.width/2 + object1.width/2){
object1.velocityX = object1.velocityX * (-1);
object2.velocityX = object2.velocityX * (-1);
  }
if(object1.y - object2.y < object2.height/2 + object1.height/2 && 
  object2.y-object1.y < object2.height/2 + object1.height/2){
    object1.velocityY = object1.velocityY * (-1);
    object2.velocityY = object2.velocityY * (-1);
}
}