
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var fruitGroup, obstacleGroup;
var ground;
var score=0;
var gameOverImage;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  gameOverImage = loadImage("gameover.png");
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  
  monkey = createSprite(70,350,10,10);
  monkey.addAnimation("monkey", monkey_running);
  monkey.scale=0.15;
  monkey.setCollider("circle",0,0,300);
  monkey.debug=false;

  ground = createSprite(300,650,700,20);
  ground.shapeColor=("green");
  ground.velocityX= -12;
 
  fruitGroup = new Group();
  obstacleGroup = new Group();
  
}


function draw() {
  background("lightblue");
  text("Survival Time: "+ score, 480,50);

  
  ground.x=ground.width/2;

  score = score + Math.round(getFrameRate()/60);
  ground.velocityX = -(6 + 3*score/100);
  
  ground.setLifetime=200;
  
  
  
  if(keyDown("space")&& monkey.y >= 595) {
     monkey.velocityY = -15;
     }

  monkey.velocityY = monkey.velocityY + 0.6
  
    console.log(monkey.y);
  


  
 if(monkey.isTouching(fruitGroup)){
   fruitGroup.destroyEach();
     }

  
  spawnFruits();
  spawnObsticles();
  
  monkey.collide(ground);


  drawSprites();
  
}

function spawnFruits(){
 if(World.frameCount%80 === 0){
 var fruit = createSprite(600,200,20,20);
     fruit.addImage(bananaImage);
     fruit.scale=0.09;
     fruit.velocityX= -4;
     fruit.lifetime=200;
 fruit.y=Math.round(random(400,570));
    fruitGroup.add(fruit);
  
 }
}



function spawnObsticles(){
  if(World.frameCount%300 === 0){
 var rock = createSprite(600,620,20,20);
     rock.addImage(obstacleImage);
     rock.scale=0.25;
     rock.velocityX= -4;
     rock.setCollider("circle",0,0,160);
     rock.debug=false;
    rock.lifetime=200;
    obstacleGroup.add(rock);
  
  } 
}







