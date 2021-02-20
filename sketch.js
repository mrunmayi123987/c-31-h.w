const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var rain;
var ground;

function preload(){
    
}

function setup(){
var  canvas = createCanvas(1200,400)   

    engine = Engine.create();
    world = engine.world;

    rain = new Drop(600,200);
  //ground= new Ground(200,200,40,30);
    
}

function draw(){
    
    background("black");
    Engine.update(engine);
    rain.display();
}   

