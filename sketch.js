
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var ball1;
var ball2;
var ball3;
var ball4;
var ball5;
var ground1;
var rope1;
var rope2;
var rope3;
var rope4;
var rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ball1=new Bob(220,400,60)
    ball2= new Bob(281,400,60)
    ball3= new Bob(342,400,60)
    ball4=new Bob(403,400,60)
    ball5= new Bob(464,400,60)
    ground1=new Ground(345,160,330,20)
    rope1= new Chain(ball1.body,ground1.body,-120,0);
   rope2= new Chain(ball2.body,ground1.body,-60,0);
   rope3=new Chain(ball3.body,ground1.body,-1,0)
   rope4=new Chain(ball4.body,ground1.body,+58,0,)
   rope5=new Chain(ball5.body,ground1.body,+120,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  ball1.display()
  ball2.display()
  ball3.display()
  ball4.display()
  ball5.display()
  ground1.display()
  rope1.display();
  rope2.display();
  rope3.display()
  rope4.display()
  rope5.display()

  
  drawSprites();
 
}



