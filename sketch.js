const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let myworld;

var ground;
var left;
var right;
var top_wall;
var btnLeft 
var btnRight 
var btnUp
var ball

function setup() {
  createCanvas(400, 400);
  engine = Engine.create();
  myworld = engine.world;
btnLeft = createImg("Leftarrow.png")
btnRight = createImg("Rightarrow.png")
btnUp =createImg("Uparrow.png")
btnUp.position(150,280)
btnLeft.position(100,300)
btnRight.position(200,300)
btnLeft.size(96,96)
btnRight.size(96,96)
btnUp.size(96,96)
btnLeft.mouseClicked(moveLeft)
btnRight.mouseClicked(moveRight)
btnUp.mouseClicked(moveUp)
  ground = new Ground(200, 390, 400, 20);
  right = new Ground(390, 200, 20, 400);
  left = new Ground(10, 200, 20, 400);
  top_wall = new Ground(200, 10, 400, 20);
  ball = Bodies.circle(200,200,15,{restitution:0.9, airFriction:0.5})
World.add(myworld,ball)
  rectMode(CENTER);

  ellipseMode(RADIUS);

}

function draw() {  
  background(51);
  ellipse(ball.position.x, ball.position.y, 15,)
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);

 
}



function moveLeft(){
Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.01, y:0})


}
function moveRight(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.01, y:0})
}

function moveUp(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0, y:-0.01})
}