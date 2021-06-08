// Name       : Minsu Kim
// Assignment : Make a Game
// Course     : CS099
// Spring 2021

// Initial Setting
let CurrentScene = MAINMENU;

const CanvasWidth = 800;
const CanvasHeight = 600;

// Go to MainMenu
let HomeButton = new Button(30, 30, 50, 50)

// MainMenu
let StartButton = new Button(CanvasWidth / 2, 300, 200, 70);
let ShopButton = new Button(CanvasWidth / 2, 400, 200, 70);
let HowtoButton = new Button(CanvasWidth / 2, 500, 200, 70);



function setup() 
{
  createCanvas(800, 600);
  textAlign(CENTER);
  textSize(30);
  imageMode(CENTER);
}



function draw() 
{
  print(CurrentScene);
  background('#304859');



  HomeButton.draw();
  image(Home, 30, 30, 50, 50);

  switch(CurrentScene)
  {
    case MAINMENU:
    {
      StartButton.draw("GAME");
      ShopButton.draw("ROOM");
      HowtoButton.draw("How to Play");
    }
    // Shall game Scene
    case SHELL_GAME:
    {
      
    }

    // Room Scene
    case ROOM:
    {

    }

    // How to play
    case HOWTO:
    {
      
    }
  }

  
}

function mousePressed()
{
  HomeButton.ChangeScene(MAINMENU);

  switch(CurrentScene)
  {
    case MAINMENU:
    {
      StartButton.ChangeScene(SHELL_GAME);
      ShopButton.ChangeScene(ROOM);
      HowtoButton.ChangeScene(HOWTO);
    }
    // Shall game Scene

    // Room Scene

    // How to play
  }
}
