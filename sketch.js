// Name       : Minsu Kim
// Assignment : Make a Game
// Course     : CS099
// Spring 2021

// Initial Setting
let CurrentScene = MAINMENU;

const CanvasWidth = 800;
const CanvasHeight = 600;


// MainMenu
let StartButton = new Button(CanvasWidth / 2, CanvasHeight / 2, 100, 100);



function setup() 
{
  createCanvas(800, 600);
  textAlign(CENTER);
  textSize(30);
}



function draw() 
{
  background('#304859');

  switch(CurrentScene)
  {
    case MAINMENU:
    {
      StartButton.draw("test");
    }
  }
  
}

function mousePressed()
{
  switch(CurrentScene)
  {
    case MAINMENU:
    {
      StartButton.ChangeScene();
    }
  }
}
