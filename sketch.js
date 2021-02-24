const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var canvas,engine,world,body;

function setup()
{
  canvas=createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  var options= { restitution : 1}
  body=Bodies.rectangle(200,200,50,50,options);
  World.add(world,body);

  var groundoptions= { isStatic : true}
  groundbody=Bodies.rectangle(200,390,200,20,groundoptions);
  World.add(world,groundbody);

  var  coptions= { restitution : 1}
  cbody=Bodies.circle(300,100,20,coptions);
  World.add(world,cbody);
}

function draw()
{
  background("gold");
   
  Engine.update(engine);

  rectMode(CENTER);
  rect(body.position.x,body.position.y,50,50);

  rectMode(CENTER);
  rect(groundbody.position.x,groundbody.position.y,400,20);

  ellipseMode(RADIUS);
  ellipse(cbody.position.x,cbody.position.y,20,20);
}