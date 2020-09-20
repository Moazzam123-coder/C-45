var bgimg;
var Ground;
var lion,cow,horse,car,stone;
var bat,bird,ostrich,plane;
var gameState = "LOADING"

function preload()
{
  lion = loadImage("lion.png");
  cow =loadImage("cow.png");
  horse = loadImage("horse.png");
  //car = loadImage("car.png");
  stone = loadImage("stone.png");
  bat = loadImage("bat.png");
  bird = loadImage("bird.png");
  ostrich = loadImage("ostrich.png");
  plane = loadImage("plane.png");
bgimg = loadImage("FinalGround.png");
//bg2 = loadAnimation("city.jpg","city2.jpg");
plA= loadAnimation("1.png","2.png","3.png","4.png","5.png","6.png");
}


function setup() {
  createCanvas(windowWidth,windowHeight);
 
 // Rbutton = createButton("→");
 // Lbutton = createButton("←");
  Ubutton = createButton("↑");
  Dbutton = createButton("↓");
 // Rbutton.position(windowWidth*7/8,windowHeight*7/8);
  Dbutton.position(windowWidth*5/6,windowHeight*7/8);
 // Lbutton.position(windowWidth/20,windowHeight*7/8);
  Ubutton.position(windowWidth/10,windowHeight*7/8);
  Ground = createSprite(windowWidth/2,windowHeight/2);
  //Ground.addAnimation(bg2);
  Ground.addImage("Ground",bgimg);
  Ground.scale = 3;
  Ground.velocityX = -4;
  Dev = createSprite(400, 200, 50, 50);
  Dev.addAnimation("player",plA);
  Dev.scale= 0.5;
  Edges = createEdgeSprites();
}

function draw() {
  background(bgimg);  
  
 /* Rbutton.mousePressed(()=>{
    Dev.velocityX = 4
  })
  Lbutton.mousePressed(()=>{
    Dev.velocityX = -4
  })*/
  Dbutton.mousePressed(()=>{
    Dev.velocityY = 4
  })
  Ubutton.mousePressed(()=>{
    Dev.velocityY = -13
  })
 
  if(Ground.x<0){
    Ground.x = Ground.width/2;
  }
 Dev.velocityY+=1;
 Dev.collide(Edges);
 SpawnObstacleGround();
 SpawnObstacleAir();

  drawSprites();
}
function SpawnObstacleAir()
{
if(World.frameCount%900===0)
{
  var lion = createSprite(windowWidth,windowHeight/15);
  lion.velocityX = -4;
 // bat.addImage("bat",bat);
}
if(World.frameCount%300===0)
{
  var horse = createSprite(windowWidth,windowHeight/15);
  horse.velocityX = -4;
 // bat.addImage("bat",bat);
}
if(World.frameCount%500===0)
{
  var cow = createSprite(windowWidth,windowHeight/15);
  cow.velocityX = -4;
 // bat.addImage("bat",bat);
}
if(World.frameCount%700===0)
{
  var stone = createSprite(windowWidth,windowHeight/15);
  stone.velocityX = -4;
 // bat.addImage("bat",bat);
}


}
function SpawnObstacleGround()
{
if(World.frameCount%200===0)
{
  var bat = createSprite(windowWidth,windowHeight*7/8);
  bat.velocityX = -6;
 // bat.addImage("bat",bat);
}
if(World.frameCount%400===0)
{
  var plane = createSprite(windowWidth,windowHeight*7/8);
  plane.velocityX = -6;
 // bat.addImage("bat",bat);
}
if(World.frameCount%600===0)
{
  var ostrich = createSprite(windowWidth,windowHeight*7/8);
  ostrich.velocityX = -6;
 // bat.addImage("bat",bat);
}
if(World.frameCount%800===0)
{
  var bird = createSprite(windowWidth,windowHeight*7/8);
  bird.velocityX = -6;
 // bat.addImage("bat",bat);
}


}