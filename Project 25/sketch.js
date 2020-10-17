
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	p=loadImage("paper.png")
	bi=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);
   b= createSprite(500,500,240,200)
   b.addImage(bi)
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1=new Bin(500,650,200,20)
	box2=new Bin(610,555,20,210)
	box3=new Bin(390,555,20,210)
	ground=new Ground(400,670,800,20)
	ball=new Paper(20,660,70,70)
	
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(100);
  
  drawSprites();
  ground.display()
  ball.display()
}
function keyPressed1(){
	if (keyCode===40){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:-85,y:-85})
	}
	}
function keyPressed(){
if (keyCode===38){
	Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85})
}
}



