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

function preload() {
  bg_img = loadImage("assets/background.png");
}

function setup() {
  createCanvas(500, 700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200, 690, 600, 20);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50);
}

function draw() {
  background(51);
  image(bg_img, 0, 0, displayWidth + 80, displayHeight);

  Engine.update(engine);
  ground.show();
}
