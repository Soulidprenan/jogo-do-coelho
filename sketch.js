const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var bg_img;
var ground;

var rope;
var melancia,melanciaImg;
var link;
var coelho,coelhoImg;

var buttonCut;

function preload() {
  bg_img = loadImage("assets/background.png");
  melanciaImg = loadImage("./assets/melon.png");
  coelhoImg = loadAnimation("./assets/blink_1.png","./assets/blink_2.png","./assets/blink_3.png","./assets/blink_2.png");
  coelhoImg.frameDelay = 40;
  

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200, 690, 600, 20);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
  textSize(50);

  rope = new Rope(5, { x: 200, y: 100 });

  melancia = Bodies.circle(200, 135, 30);
  Composite.add(rope.body, melancia);
  //World.add(world,melancia);

  link = new Link(rope, melancia);

  buttonCut = createImg("./assets/cut_btn.png");
  buttonCut.position(170, 70);
  buttonCut.size(70, 70);
  buttonCut.mouseClicked(drop);

  coelho = createSprite(200,600);
  coelho.addAnimation("piscando",coelhoImg);
  coelho.scale = 0.3

  
}
function drop() {
  rope.break();
  link.detach();
  link = null;
}

function draw() {
  background(51);
  image(bg_img, 0, 0, displayWidth + 80, displayHeight);

  Engine.update(engine);
  ground.show();
  push();
  imageMode(CENTER);
  if (melancia != null){
  image(melanciaImg,melancia.position.x, melancia.position.y, 100, 100);
  };
  pop();
  rope.show();
  drawSprites();
}
