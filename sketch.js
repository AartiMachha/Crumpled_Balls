
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var dustbinObj;
var groundObject;
var world;
var paper;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paper = new Paper(200,500,80);
	groundObject=new Ground(width/2,670,width,20);
	dustbinObj=new Dustbin(1200,650);
	
	
	 
	
	
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(255);
 
  Engine.update(engine);

  paper.display();
  groundObject.display();
  dustbinObj.display();

  
}

function keyPressed(){
if(keyDown('UP_ARROW')){
Matter.Body.applyForce(paper.body, paper.body.position,{x: 110, y: -145})
}
}