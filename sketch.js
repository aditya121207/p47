let ground;
let lander;
var lander_img;
var bg_img;


var vy = 0;
var g = 0.05;
var spaceLanding,landingImg;
var paddle;
var paddle1;
var alien,alienImage;
var blast;
var sound;



function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
  landingImg = loadImage("landing.jpg");
  alienImage = loadImage("monster.png");
  blast = loadImage("blast.png");
  sound = loadMp3("monster.mp3");
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  spaceLanding = createSprite(800,400,200,300);
  spaceLanding.addImage(landingImg);
  spaceLanding.scale = 0.5;

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;
  lander.setCollider("rectangle",0,0,200,200);

  
 paddle = createSprite(800,450,80,10);
 paddle.shapeColor = "black";

 paddle1 = createSprite(100,400,80,10);
 paddle.shapeColor = "black";
 
 

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();
  addSound();

  //fall down
  vy +=g;
  lander.position.y+=vy;

if(keyDown(LEFT_ARROW))
{
 lander.x = lander.x - 4;
}

if(keyDown(RIGHT_ARROW))
{
lander.x = lander.x + 4;
}



if(lander.isTouching(paddle))
{
lander.velocityX = 0;
vy = 0;
g = 0;
}

if(lander.isTouching(paddle1))
{
lander.velocityX = 0;
vy = 0;
g = 0;
}




  spawnAliens();
  drawSprites();
}

function keyPressed()
{
  if(keyCode==UP_ARROW)
  {
    upward_thrust();
    lander.changeAnimation('thrusting');
    thrust.nextFrame();
    
  }
}

function upward_thrust()
{
  vy = -1;
}

function spawnAliens() {
  //write code here to spawn the clouds
  if (frameCount % 100 === 0) {
    alien = createSprite(600,100,40,10);
    alien.addImage(alienImage)
    alien.y = Math.round(random(10,300));
    alien.x = Math.round(random(200,600));
    alien.scale = 0.25;
    alien.velocityY = 1;
    
    
    //assigning lifetime to the variable
    alien.lifetime = 134;
   
    
    //adjust the depth
    alien.depth = lander.depth;
    lander.depth = lander.depth + 1;
    }
}