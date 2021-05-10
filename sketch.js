var Engine = Matter.Engine, World = Matter.World, Events = Matter.Events, Bodies = Matter.Bodies;

var engine, world;
var ground
var division
function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600,height,1200,20);
  division= new divisions(0,h,200,20)
  division1= new divisions(200,h,200,20)
  division2= new divisions(400,h,200,20)
  division3= new divisions(600,h,200,20)
  division4= new divisions(800,h,200,20)
}

function draw() {
  background(0);
  Engine.update(engine);
ground.display()
division.display()
division1.display()
division2.display()
division3.display()
division4.display()

}
