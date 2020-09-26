
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball1,ball2,ball3,ball4,ball5,roof,string1,string2,string3,string4,string5;

function preload()
{
	
}

function setup() {
	createCanvas(1450, 700);


	engine = Engine.create();
	world = engine.world;

	ball1= new Ball(300,350,25);
	ball2= new Ball(350,350,25);
	ball3= new Ball(400,350,25);
	ball4= new Ball(450,350,25);
	ball5= new Ball(500,350,25);

	roof = new Roof(725,100,900,30);

	string1= new Rope(ball1.body,{x: 500, y:roof.body.position.y});
	string2= new Rope(ball2.body,{x: 550, y:roof.body.position.y});
	string3= new Rope(ball3.body,{x: 600, y:roof.body.position.y});
	string4= new Rope(ball4.body,{x: 650, y:roof.body.position.y});
	string5= new Rope(ball5.body,{x: 700, y:roof.body.position.y});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);


  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();

  
  ball1.display();  
  ball2.display(); 
  ball3.display();  
  ball4.display();
  ball5.display();

  roof.display();

  
  
  drawSprites();
 
}

function keyPressed(){
    if(keyCode === 38){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-100,y:-100});
    }
}

