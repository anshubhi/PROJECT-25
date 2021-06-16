
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var platform,dust,dust1,dust2
var paper,scene1



function preload(){
scene1 = loadImage("school.outerarea.jpg")
}

function setup() {
	createCanvas(1300, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	platform = new Ground(width/2,350,1800,20);
	dust = new Dustbin(920,270,20,142);
	dust1 = new Dustbin(1000,330,138,180);
	dust2 = new Dustbin(1080,290,20,142);
	paper= new Paper(100,200,40)
	
	

  
}


function draw() {
Engine.update(engine)
  rectMode(CENTER);
  background(scene1);
  
  drawSprites();
  
 
  platform.display();
  dust.display();
  dust1.display();
  dust2.display();
  paper.display()
  
 
}

function keyPressed() { if (keyCode === UP_ARROW) { Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85}); } }

