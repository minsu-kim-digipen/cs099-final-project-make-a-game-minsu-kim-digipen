// Name       : Minsu Kim
// Assignment : Make a Game
// Course     : CS099
// Spring 2021

function setup() 
{
  createCanvas(800, 400);
  textAlign(CENTER);
  textSize(30);
}



function draw() 
{
  background(220);
  
  

  text("First Cup : " + FirstCup, width / 2, 50);
  text("Second Cup : " + SecondCup, width / 2, 100);
  text("Third Cup : " + ThirdCup, width / 2, 150);

  text(FirstCup+SecondCup+ThirdCup, width /2, 300);
}