
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine,world,ground1,stone1;

var gameState = "START";

function preload()
{
	treeImage = loadImage("sprites/tree.png");
	boyImage = loadImage("sprites/boy.png");
	
}

function setup()
 {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	
   ground1 = new ground(400,690,800,20);
   stone1 = new Stone(100,595,50,50);
   sling1 = new slingShot(stone1.body,{x:100,y:595});

   mango1 = new Mango(575,500,50,50);
   mango2 = new Mango(610,460,50,50);
   mango3 = new Mango(620,540,50,50);
   mango4 = new Mango(650,490,50,50);
   mango5 = new Mango(660,400,50,50);
   mango6 = new Mango(680,450,50,50);
   mango7 = new Mango(715,480,50,50);
   mango8 = new Mango(730,410,50,50);
   mango9 = new Mango(770,490,50,50);
  
  
   
   
   Engine.run(engine);
}


function draw()
{
  background(0);
  fill("white");
  text(mouseX+":"+mouseY,mouseX,mouseY);

  image(boyImage,80,550,150,170);
  image(treeImage,550,350,250,350);

  Engine.update(engine);
  ground1.display();
  stone1.display();
  sling1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();

  detectollision(stone1,mango1);
  detectollision(stone1,mango2);
  detectollision(stone1,mango3);
  detectollision(stone1,mango4);
  detectollision(stone1,mango5);
  detectollision(stone1,mango6);
  detectollision(stone1,mango7);
  detectollision(stone1,mango8);
  detectollision(stone1,mango9);
}

function mouseDragged(){
  if (gameState!=="PLAY"){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
  }
}
function mouseReleased(){
  sling1.fly();
  gameState = "PLAY"
}
function keyPressed(){
  if(keyCode === 32 ){
    Matter.Body.setPosition(stone1.body,{x:100,y:595})
    sling1.attach(stone1.body);
    gameState = "ONSLING"
  }
}

function detectollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position;
  stoneBodyPosition=lstone.body.position;

  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  if(distance<=lmango.width+lstone.width){
    Matter.Body.setStatic(lmango.body,false);
  }
}



