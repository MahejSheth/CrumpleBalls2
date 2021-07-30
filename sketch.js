
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body; 

function setup() {
	createCanvas(1000, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    dustbin=new Dustbin(800, 530);
	paper = new Paper(200, 500, 70);
	ground = new Ground(500, 580, 1000, 20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  paper.display();
  ground.display();
  dustbin.display();
  
}
function keyPressed(){
 if(keyCode === 38){
	 Matter.Body.applyForce(paper.body, paper.body.position, {x:85, y:-85})
 }
}



