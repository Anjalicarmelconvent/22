const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var fairy;




function preload(){




   //preload the images here
}
var fairy;
function setup() {
  createCanvas(800, 750);
  engine = Engine.create();
    world = engine.world;
  


    fairy = new fairy(700,320);
}


function draw() {
  background("black");
  Engine.update(engine);
  fairy.display();

}





