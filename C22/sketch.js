const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var universe
var earth
var ground
var ball

function setup() {
  createCanvas(800,400);
  universe=Engine.create();
  earth=universe.world
var groundOpsi={
  isStatic:true
}
  ground=Bodies.rectangle(400,380,800,10,groundOpsi)
  World.add(earth,ground)
  var ballOptions={
    restitution:1.0
  }
  
ball=Bodies.circle(200,100,20,ballOptions)
World.add(earth,ball)
rectMode(CENTER)
ellipseMode(RADIUS)
 // createSprite(400, 200, 50, 50);
}

function draw() {
  background(0); 
  Engine.update(universe) 
  rect(ground.position.x,ground.position.y,800,10)
  fill("red")
  ellipse(ball.position.x,ball.position.y,20)
  drawSprites();
}