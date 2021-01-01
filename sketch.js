
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint
//increasing from left to right 
var ground1,paper1,paper2,paper3,paper4,paper5;
var chain1,chain2,chain3,chain4,chain5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new ground(400,200,400,30)
	paper1 = new Paper (320,210,40)
	paper2 = new Paper (360,210,40)
	paper3 = new Paper(400,210,40)
	paper4 = new Paper (440,210,40)
	paper5 = new Paper (480,210,40)
	chain1 = new Chain (paper3.body,ground1.body,0,0)
	chain2 = new Chain (paper4.body,ground1.body,80,0)
	chain3 = new Chain (paper5.body,ground1.body,160,0)
	chain4 = new Chain (paper2.body, ground1.body,-80,0)
	chain5 = new Chain (paper1.body, ground1.body,-160,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ground1.display()
  paper1.display()
  paper2.display()
  paper3.display()
  paper4.display()
  paper5.display()
  chain1.display()
  chain2.display()
  chain3.display()
  chain4.display()
  chain5.display()
}
function mouseDragged(){
	Matter.Body.setPosition(paper1.body,{x:mouseX,y:mouseY})
}
