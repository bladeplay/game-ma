
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var player;
var box;
var w=200;
var a=200;
var s=650;
var q=650;
function preload()
{
	
}

function setup() {
	createCanvas(displayWidth-20,displayHeight-10);
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	box=new Box(displayWidth/2,700,displayWidth,100);
	player=new Player(200,650,50,50);

	Engine.run(engine);
  
}


function draw() {
  background(255);
  rectMode(CENTER); 
  box.display();
  player.display();
  player.x=player.x+10
  if(box.x>0){
	Matter.Body.setPosition(box.body, {x: displayWidth/2 , y: 700});
  }
  drawSprites();
 
}
function keyPressed(){
    if(keyCode === LEFT_ARROW){
		w=w-15
		Matter.Body.setPosition(player.body, {x: w , y: 650});
		console.log("l")
    }
}

function keyPressed(){
    if(keyCode === RIGHT_ARROW){
		w=w+15
		Matter.Body.setPosition(player.body, {x: w , y: s});
		console.log("R")
	}
	
	if(keyCode === LEFT_ARROW){
		w=w-15
		Matter.Body.setPosition(player.body, {x: w , y: s});
		console.log("l")
	}
	
	if(keyCode === UP_ARROW){
		s=s-15
		Matter.Body.setPosition(player.body, {x: w  , y: s});
		console.log("l")
	}
	
	if(keyCode === DOWN_ARROW && player.x>650){
		s=s+15
		Matter.Body.setPosition(player.body, {x: w  , y: s});
		console.log("l")
    }
}
