// Name       : Minsu Kim
// Assignment : Make a Game
// Course     : CS099
// Spring 2021

// Initial Setting
let CurrentScene = SHELL_GAME;

const CanvasWidth = 800;
const CanvasHeight = 600;
const IconSize = 50;



// Go to MainMenu
let HomeButton = new Button(30, 30, 50, 50)

// MainMenu
let ShellButton = new Button(CanvasWidth / 2, 300, 200, 70);
let ShopButton = new Button(CanvasWidth / 2, 400, 200, 70);
let HowtoButton = new Button(CanvasWidth / 2, 500, 200, 70);

// Shell Game
let Shell_Start = new Button(CanvasWidth / 2, 500, 200, 70)





function setup() 
{
  createCanvas(800, 600);
  textAlign(CENTER);
  textSize(30);
  imageMode(CENTER);

  check();
}


function draw() 
{
  background('#304859');




  HomeButton.draw();
  image(HomeImage, 30, 30, IconSize, IconSize);

  switch(CurrentScene)
  {
    case MAINMENU:
    {
      ShellButton.draw("GAME");
      ShopButton.draw("ROOM");
      HowtoButton.draw("How to Play");
    }
    break;
    // Shall game Scene
    case SHELL_GAME:
    {
      push();

      fill(255, 0,0);
      textSize(40);
      textStyle(BOLD);
      text("Welcome to Shell Game!", width / 2, 100);


      fill('#6495ed');
      text("Before starting, Let's check point!", width / 2, 250);

      pop();

      display_point(width /2 - 10, 400, IconSize);

      Shell_Start.draw("Start Game!!", 'blue', BOLD);
    }
    break;

    case SHELL_SETTING:
    {

    }
    break;

    // Room Scene
    case ROOM:
    {

    }
    break;

    // How to play
    case HOWTO:
    {
      
    }
    break;
  }

  
}

function mousePressed()
{
  HomeButton.ChangeScene(MAINMENU);

  switch(CurrentScene)
  {
    case MAINMENU:
    {
      ShellButton.ChangeScene(SHELL_GAME);
      ShopButton.ChangeScene(ROOM);
      HowtoButton.ChangeScene(HOWTO);
    }
    break;
    // Shall game Scene
    case SHELL_GAME:
    {
      Shell_Start.ChangeScene(SHELL_SETTING);
    }
    break;

    case SHELL_SETTING:
    {

    }
    break;
    // Room Scene

    // How to play
  }
}