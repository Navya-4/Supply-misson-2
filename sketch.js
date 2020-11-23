var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	box1 = createSprite (290,498,15,125);
	box1.shapeColor = ("red");

	box2 = createSprite (475,498,15,125);
	box2.shapeColor = ("red");

	box3 = createSprite (380,553,175,15);
	box3.shapeColor = ("red");

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.7;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	var groundOptions = {
        isStatic: true
    }
	var packageOptions = {
		restitution : 0,
		isStatic : true
	}
	packageBody = Bodies.circle(width/2 , 200 , 5 , packageOptions);
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 550, width, 10 , groundOptions );
	 World.add(world, ground);
	 


	Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
 
 
  
  drawSprites();

 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);

    
  }
}



