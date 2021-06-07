// Name       : Minsu Kim
// Assignment : Make a Game
// Course     : CS099
// Spring 2021

let CurrentScene = MAINMENU;


function setup() 
{
  createCanvas(800, 600);
  textAlign(CENTER);
  textSize(30);
}



function draw() 
{
  background('#304859');

  CreateButton(width / 2, height / 2, 100, 100, "TEST");

  print(CurrentScene);
}


