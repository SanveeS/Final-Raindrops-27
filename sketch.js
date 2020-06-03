const World= Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;

var engine, world;
var raindrops = [];
function setup(){
    frameRate(45);
    var canvas = createCanvas(600,400);
    engine = Engine.create();
    world = engine.world;
    for(var raindrop=0;raindrop<=600;raindrop++){
    raindrops.push(new biggerraindrops(random(0.5,2)));  
    raindrops.push(new smallerraindrops(random(2,3.5)));}
}
 
function draw(){
  Engine.update(engine);
  background(0);
    for (var i = 0; i < raindrops.length; i++) {
        raindrops[i].display();
    }
}