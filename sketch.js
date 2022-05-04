
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var ball, ballImg;

var obstacle, obstacleGroup;

var wall1, wall2, wall3;

var star1, star2, starImg;
var score1, scoreImg;
var emptyStar, oneStar, twoStar;
var chest, chestImg;



 

function preload()
{
  starImg = loadImage("star.png");
  scoreImg = loadImage("greystar.png");

  emptyStar = loadAnimation("empty.png");
  oneStar = loadAnimation("one_star.png");
  twoStar = loadAnimation("stars.png");

  chestImg = loadAnimation("treasure.png");
}


function setup() {
  createCanvas(600,400);
  frameRate(80);

  engine = Engine.create();
  world = engine.world;

  obstacleGroup = [];

  ground = new Ground(300,380,1000,40);

  chest = new Box(530,325,60,40);
  
  
  ball = new Ball(100,50,20);
  wall1 =  new Ground(0,100,10,1000);
  wall2 = new Ground(600,100,10,1000);
  wall3 = new Ground(300,0,600,50);

  
  for(var i = 100; i < 500; i+= 50)
  {
     obstacle = new Ground(i, 400, 50, Math.round(random(100,400)));
     obstacleGroup.push(obstacle);

     obstacle = new Ground(i, 0, 50, Math.round(random(100,250)));
     obstacleGroup.push(obstacle);
  }
  
  //star1 = createSprite(500,325,10,10);
  //star1.addImage(starImg);
  //star1.scale = 0.015;

  //star2 =  createSprite(570,325,10,10);
  //star2.addImage(starImg);
  //star2.scale = 0.015;

  score1 = createSprite(550,20,10,10);
  score1.addAnimation("empty",emptyStar);
  score1.addAnimation("one",oneStar);
  score1.addAnimation("two",twoStar);
  score1.changeAnimation("empty");
  score1.scale = 0.17;

  
  
  
  
  
}


function draw() 
{
  background("lightblue");

  if(keyDown("up_arrow"))
  {
    ball.throwf();
  }
  
  if(keyDown("down_arrow"))
  {
    ball.throwb();
  }

  ground.show();
 
 ball.show();
 chest.show();
 wall1.show();
 wall2.show();
 wall3.show();
  
 for(var x = 0; x < obstacleGroup.length; x++)
 {
   obstacleGroup[x].show();
 }
  

  Engine.update(engine);

  drawSprites();

  var chest_collision = Matter.SAT.collides(ball.body, chest.body);
 
  /*if(chest_collision.collided === null)
  {
    chest.show();
  }*/

  if(chest_collision.collided)
  {
    
    console.log(chest)
    score1.changeAnimation("two");
    World.remove(world, chest.body);
    chest.visible = false;
  }

  
  
}

/*function collide(body,sprite,x)
{
  if(body!=null)
  {
    var d = dist(body.pos.x, body.pos.y, sprite.pos.x, sprite.pos.y);
    if(d<=x)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
}*/

