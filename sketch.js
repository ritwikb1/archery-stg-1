const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   compBase = new ComputerBase(windowWidth/1.5, windowHeight/2, 300, 300)//Create Player Base and Computer Base Object
   playerBase = new PlayerBase(windowWidth/4, windowHeight/2, 300, 300)
   player = new Player(windowWidth/4, windowHeight/2.8, 120, 220)
   compPlayer = new CompPlayer(windowWidth/1.5, windowHeight/2.8, 120, 220)


 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base
   compBase.display() 
   compPlayer.display()
   playerBase.display()
   player.display()


   //display Player and computerplayer


}
