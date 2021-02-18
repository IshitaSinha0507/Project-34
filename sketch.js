const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

var engine,world;
var backgroundImg;
var ground;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var box21,box22,box23,box24,box25,box26;
var hero1,heroImg;
var ropeObj;
var monster1;

function preload() {
//preload the images here
backgroundImg = loadImage("GamingBackground.png");
heroImg = loadImage("Superhero-01.png");
}

function setup() {
  createCanvas(3000, 800);
  // create sprites here

    engine = Engine.create();
    world = engine.world;

  //hero = createSprite(200,200,80,80);

  ground = new Ground(600,600,1200,20);

  box1 = new Box(900,100,70,70);
  box2 = new Box(900,100,70,70);
  box3 = new Box(900,100,70,70);
  box4 = new Box(900,100,70,70);
  box5 = new Box(900,100,70,70);
  box6 = new Box(900,100,70,70);

  box7 = new Box(800,100,70,70);
  box8 = new Box(800,100,70,70);
  box9 = new Box(800,100,70,70);
  box10 = new Box(800,100,70,70);
  box11 = new Box(800,100,70,70);
  box12 = new Box(800,100,70,70);
  box13 = new Box(800,100,70,70);
  box14 = new Box(800,100,70,70);

  box15 = new Box(700,100,70,70);
  box16 = new Box(700,100,70,70);
  box17 = new Box(700,100,70,70);
  box18 = new Box(700,100,70,70);
  box19 = new Box(700,100,70,70);

  box20 = new Box(600,100,70,70);
  box21 = new Box(600,100,70,70);
  box22 = new Box(600,100,70,70);
  box23 = new Box(600,100,70,70);
  box24 = new Box(600,100,70,70);
  box25 = new Box(600,100,70,70);
  box26 = new Box(600,100,70,70);

  hero1 = new hero(300,300,250,200);

  ropeObj = new rope(hero1.body,{x:500,y:50});

  monster1 = new Monster(1200,100,300,300)
   
  Engine.run(engine);

}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

  textSize(35);
  fill("Green");
  text("Drag the Superman to kill the monster",20,40)

  ground.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();

  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();

  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();

  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();

  hero1.display();
  ropeObj.display();
  monster1.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero1.body,{x:mouseX,y:mouseY});
  
}