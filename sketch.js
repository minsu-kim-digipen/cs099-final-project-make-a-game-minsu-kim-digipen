// Name       : Minsu Kim
// Assignment : Make a Game
// Course     : CS099
// Spring 2021

// Initial Setting
let Canvas;

let CurrentScene = PAY_DEBT;

const CanvasWidth = 800;
const CanvasHeight = 600;
const IconSize = 50;

let Sound_Slider;
let Point_You_Have;

let ResetSound = false;

let PointInput;

let Selected_Point;


// Cups
let GoldCup = {
    x: 200
};
let SilverCup = {
    x: 400
};
let BronzeCup = {
    x: 600
};

let ShuffleEnd = false;


function setup()
{
    Canvas = createCanvas( 800, 600 );

    textAlign( CENTER );
    textSize( 30 );
    imageMode( CENTER );

    // Set Volume Slider
    describe_Sound_Slider = createP( 'Sound Volume' );
    Sound_Slider = createSlider( 0, 1, 0.5, 0.01 );
}


function draw()
{
    background( '#304859' );

    print( "CurrentScene : " + CurrentScene + " / Point : " + Point + " / SALVATION : " + Salvation_Point );


    // Volume slider
    describe_Sound_Slider.position( Canvas.position().x + 330, Canvas.position().y + 585 ); // describe position
    Sound_Slider.position( Canvas.position().x + 320, Canvas.position().y + 620 ); // Sound slider position

    ChangeVolume(); // Set Volume


    // Home Button
    if ( ( CurrentScene >= MAINMENU && CurrentScene <= IS_INPUT_RIGHT ) || ( CurrentScene >= ROOM && CurrentScene <
            SALVATION_CHANCE ) )
    {
        HomeButton.draw();
        image( HomeImage, 30, 30, IconSize, IconSize );
    }


    // Scene Change
    switch ( CurrentScene )
    {
    case PLEASE_CLICK:
    {
        push();

        imageMode( CORNER );
        background( Click_Background );

        pop();
    }
    break;

    case MAINMENU:
    {
        Change_Background();

        // HomeButton
        HomeButton.draw();
        image( HomeImage, 30, 30, IconSize, IconSize );

        // Game
        ShellButton.draw( "GAME" );
        image( GameImage, width / 2 - 70, 300, 40, 40 );
        image( GameImage, width / 2 + 70, 300, 40, 40 );

        // SHOP
        ShopButton.draw( "SHOP" );
        image( ShopImage, width / 2 - 70, 400, 40, 40 );
        image( ShopImage, width / 2 + 70, 400, 40, 40 );

        // HowtoPlay
        HowtoButton.draw( "How to Play" );
    }
    break;
    // Shall game Scene
    case SHELL_GAME:
    {
        Change_Background();

        // HomeButton
        HomeButton.draw();
        image( HomeImage, 30, 30, IconSize, IconSize );
        push();

        fill( 255, 0, 0 );
        textSize( 40 );
        textStyle( BOLD );
        stroke( 255 );
        strokeWeight( 7 );

        text( "Welcome to Shell Game!", width / 2, 100 );


        fill( '#6495ed' );
        text( "Before starting, Let's check point!", width / 2, 200 );

        fill( 'orange' )
        text( "How much point will you use?", width / 2, 400 );

        fill( 'green' )
        text( "Please type greater than 10 points!", width / 2, 550 );


        fill( 0 );
        display_point( width / 2 - 10, 280, IconSize );

        pop();


        PointInput.position( Canvas.position().x + 350, Canvas.position().y + 450 );
    }
    break;

    case IS_INPUT_RIGHT:
    {

        Change_Background();

        // HomeButton
        HomeButton.draw();
        image( HomeImage, 30, 30, IconSize, IconSize );
        push();

        if ( isNaN( Selected_Point ) )
        {
            alert( "Please Type again! Please don't do strange thing..." );
            CurrentScene = SHELL_GAME;
        }

        push();

        translate( 0, 30 );

        fill( 255, 0, 0 );
        textSize( 40 );
        textStyle( BOLD );
        stroke( 225 );
        strokeWeight( 7 );


        text( "Please Check\nIt's same point as you want to use!", width / 2, 50 );

        fill( 'green' )
        text( "Current Point", width / 2, 170 );
        display_point( width / 2 - 10, 220, IconSize );

        fill( 'blue' );
        text( "Use this amount of Point", width / 2, 300 );
        display_point( width / 2 - 10, 350, IconSize, true );

        pop();

        input_true.draw( "YES~!", 'green', BOLD );
        input_false.draw( "NO!!!", 'red', BOLD );


        PointInput.position( Canvas.position().x + 350, Canvas.position().y + 450 );
    }
    break;

    case SELECT_SHELL:
    {
        Change_Background();

        // HomeButton
        HomeButton.draw();
        image( HomeImage, 30, 30, IconSize, IconSize );
        push();

        // Image of cup
        push();

        rectMode( CENTER );
        noStroke();

        imageMode( CENTER );

        const SIZE = 170;

        const HEIGHT = height / 2;

        fill( 'gold' );
        square( GoldCup.x, HEIGHT, SIZE + 20 );
        image( GoldCup_Image, GoldCup.x, HEIGHT, SIZE, SIZE );

        fill( 'silver' );
        square( SilverCup.x, HEIGHT, SIZE + 20 );
        image( SilverCup_Image, SilverCup.x, HEIGHT, SIZE, SIZE );

        fill( '#f4a460' );
        square( BronzeCup.x, HEIGHT, SIZE + 20 );
        image( BronzeCup_Image, BronzeCup.x, HEIGHT, SIZE, SIZE );

        pop();

        // Text
        push();

        fill( 255, 0, 0 );
        textSize( 40 );
        textStyle( BOLD );
        stroke( 255 );
        strokeWeight( 7 );

        text( "Choose the Cup!", width / 2, 100 );

        fill( 'blue' );
        text( "Use this amount of Point", width / 2, 450 );
        display_point( width / 2 - 10, 500, IconSize, true );

        pop();

    }
    break;

    case CHOOSE_1ST_CUP:
    {
        ShuffleEnd = false;

        background( Cup[ 0 ], 0, 0 );

        push();

        fill( 255 );

        textSize( 40 );
        textStyle( BOLD );

        text( "You Choose First Cup!\nIf it's near the red color,\nYou probably get money!", width / 2, 100 );

        text( "You'll get this Percent..." + Cup[ 0 ] + "%!!!", width / 2, 400 );

        pop();

        if ( Cup[ 0 ] <= 100 )
        {
            Confirm_Percent.draw( "Okay...Let's Check...", 'blue', ITALIC );
        }
        else
        {
            Confirm_Percent.draw( "OKAY!! LET'S CHECK!!!", 'orange', BOLD );
        }
    }
    break;

    case CHOOSE_2ND_CUP:
    {
        ShuffleEnd = false;

        background( 0, Cup[ 1 ], 0 );

        push();

        fill( 255 );

        textSize( 40 );
        textStyle( BOLD );

        text( "You Choose Second Cup!\nIf it's near the green color,\nYou probably get money!", width / 2, 100 );

        text( "You'll get this Percent..." + Cup[ 1 ] + "%!!!", width / 2, 400 );

        pop();

        if ( Cup[ 1 ] <= 100 )
        {
            Confirm_Percent.draw( "Okay...Let's Check...", 'blue', ITALIC );
        }
        else
        {
            Confirm_Percent.draw( "OKAY!! LET'S CHECK!!!", 'orange', BOLD );
        }
    }
    break;

    case CHOOSE_3RD_CUP:
    {
        ShuffleEnd = false;

        background( 0, 0, Cup[ 2 ] );

        push();

        fill( 255 );

        textSize( 40 );
        textStyle( BOLD );

        text( "You Choose Third Cup!\nIf it's near the blue color,\nYou probably get money!", width / 2, 100 );

        text( "You'll get this Percent..." + Cup[ 2 ] + "%!!!", width / 2, 400 );

        pop();

        if ( Cup[ 2 ] <= 100 )
        {
            Confirm_Percent.draw( "Okay...Let's Check...", 'blue', ITALIC );
        }
        else
        {
            Confirm_Percent.draw( "OKAY!! LET'S CHECK!!!", 'orange', BOLD );
        }
    }
    break;

    case FINAL_CALCULATE:
    {
        background( Cup[ 0 ], Cup[ 1 ], Cup[ 2 ] );

        push();

        fill( 255 );

        textSize( 40 );
        textStyle( BOLD );

        text( "This is all amount of Cups...\nBackground is rgb of that amount!", width / 2, 50 );
        text( "1st : " + Cup[ 0 ] + "% / 2nd : " + Cup[ 1 ] + "% / 3rd : " + Cup[ 2 ] + "%", width / 2, 200 );


        textSize( 40 );

        // First
        fill( 221, 250, 235 );
        text( "What point you use!", width / 2 - 150, 300 );

        // Second
        fill( 220, 242, 247 );
        text( "You will get this point!", width / 2 - 150, 400 );


        fill( 243, 238, 224 );
        text( "It's your FINAL POINT!", width / 2 - 150, 500 );

        pop();

        push();

        // First
        fill( 221, 250, 235 );
        display_point( width / 2 + 170, 290, IconSize, true );

        // Second
        fill( 220, 242, 247 );
        display_point( width / 2 + 170, 390, IconSize, false, true );

        // Third
        fill( 243, 238, 224 );
        display_point( width / 2 + 170, 490, IconSize );

        pop();

        Final_confirm.draw( "OKAY", 'red', BOLD );
    }
    break;


    // Shop Scene

    case UPGRADE_SHOP:
    {
        // Background
        push();
        imageMode( CORNER );
        background( Shop_Background );
        pop();

        // HomeButton
        HomeButton.draw();
        image( HomeImage, 30, 30, IconSize, IconSize );


        // Set textStyle
        push();

        textSize( 40 );
        fill( '#9370db' );
        stroke( 255 );
        strokeWeight( 5 );
        textStyle( BOLD );

        // Title
        text( "Welcome To Shop!", width / 2, 50 );

        image( ShopImage, 185, 35, 40, 40 );
        image( ShopImage, 615, 35, 40, 40 );
        pop();

        // Display Point
        push();

        fill( '#228b22' );
        stroke( 255 );
        strokeWeight( 7 );

        display_point( width / 2 - 10, 560, IconSize );
        pop();

        // Previous & Next Button
        push();

        Previous_Button.draw( '◀', 0, NORMAL, 50, 3 );
        Next_Button.draw( '▶', 0, NORMAL, 50, 3 );

        pop();


        ////////////////////////////////////////////////////////////////////////////////

        // Upgrade max percent!
        push();

        translate( 260, 30 );
        scale( 1.7 );

        // Stuff box
        noStroke();
        fill( '#6495ed' );
        rect( 10, 60, 150, 200 );

        // Image
        imageMode( CORNER );
        image( Upgrade_Image, 10, 63, 150, 70 );

        // Description
        fill( 255 );
        textAlign( CENTER );
        textSize( 20 );

        text( "Increase 10%\nMAX percent!", 85, 155 );

        fill( 'red' );
        textStyle( BOLD );

        text( "Now : " + Max_Cup_Percent + "%", 85, 205 );

        // Button
        pop();

        let upgrade_price = Upgrade_Percent();

        Upgrade_Button.draw();

        push();
        Upgrade_Button.display_price( upgrade_price, upgrade, 50, 12, true );
        pop();
    }
    break;

    case ROOM_BACKGROUND_SHOP:
    {
        // Background
        push();
        imageMode( CORNER );
        background( Shop_Background );
        pop();

        // HomeButton
        HomeButton.draw();
        image( HomeImage, 30, 30, IconSize, IconSize );

        // Set textStyle
        push();

        textSize( 40 );
        fill( '#9370db' );
        stroke( 255 );
        strokeWeight( 5 );
        textStyle( BOLD );

        // Title
        text( "Welcome To Shop!", width / 2, 50 );

        image( ShopImage, 185, 35, 40, 40 );
        image( ShopImage, 615, 35, 40, 40 );
        pop();

        // Display Point
        push();

        fill( '#228b22' );
        stroke( 255 );
        strokeWeight( 7 );

        display_point( width / 2 - 10, 560, IconSize );
        pop();

        // Previous & Next Button
        push();

        Previous_Button.draw( '◀', 0, NORMAL, 50, 3 );
        Next_Button.draw( '▶', 0, NORMAL, 50, 3 );

        pop();


        // Brick Background
        push();

        noStroke();
        fill( '#6495ed' );
        rect( 10, 70, 200, 200 );

        imageMode( CORNER );
        image( Brick_Room_Image, 10, 70, 200, 80 );

        fill( 255 );
        textAlign( CENTER );
        textSize( 25 );

        text( "Basic Brick\nBackground", 110, 175 );

        pop();

        Brick_Button.draw();
        Brick_Button.display_price( 0, Brick_Room );

        // Fantasy Background
        push();

        noStroke();
        fill( '#6495ed' );
        rect( 220, 70, 180, 200 );

        imageMode( CORNER );
        image( Fantasy_Room_Image, 220, 70, 180, 80 );

        fill( 255 );
        textAlign( CENTER );
        textSize( 25 );

        text( "Like Fantasy\nBackground", 310, 175 );

        pop();

        Fantasy_Button.draw();

        push();

        if ( Fantasy_Room == SALE )
        {
            translate( 15, 0 );
        }
        Fantasy_Button.display_price( 200, Fantasy_Room );

        pop();

        // Poker Background
        push();

        noStroke();
        fill( '#6495ed' );
        rect( 410, 70, 180, 200 );

        imageMode( CORNER );
        image( Poker_Room_Image, 410, 70, 180, 80 );

        fill( 255 );
        textAlign( CENTER );
        textSize( 25 );

        text( "Poker\nBackground", 500, 175 );

        pop();

        Poker_Button.draw();

        push();

        if ( Poker_Room == SALE )
        {
            translate( 15, 0 );
        }
        Poker_Button.display_price( 777, Poker_Room );

        pop();

        // LikeOcean Background

        push();

        noStroke();
        fill( '#6495ed' );
        rect( 600, 70, 180, 200 );

        imageMode( CORNER );
        image( LikeOcean_Room_Image, 600, 70, 180, 80 );

        fill( 255 );
        textAlign( CENTER );
        textSize( 25 );

        text( "Like Ocean\nBackground", 690, 175 );

        pop();

        LikeOcean_Button.draw();

        push();

        if ( LikeOcean_Room == SALE )
        {
            translate( 15, 0 );
        }
        LikeOcean_Button.display_price( 1004, LikeOcean_Room );

        pop();

        // Showcase box
        push();

        noStroke();
        fill( '#6495ed' );

        for(BOX = 0; BOX < 4; BOX++)
        {
            const showcaseWidth = 180;
            const interval = 10;

            const x_position = 20 + ((showcaseWidth + interval) * BOX);

            rect(x_position, 290, showcaseWidth, 220);

            imageMode( CORNER );
            image( Upgrade_Image, x_position, 290, showcaseWidth, 70 );
        }
        pop();

        // Fill Min percent
        fill( 255 );
        textAlign( CENTER );
        textSize( 25 );

        text( "Increase Fill\nMIN percent!", 110, 390 );

        fill( 'red' );
        textStyle( BOLD );

        text( "Now : " + Fill_MIN_salvation + "%", 110, 455 );

        Fill_MIN_salvation_Button.draw();

        let Fill_MIN_salvation_price = MIN_Upgrade_Percent(Fill_MIN_salvation);

        Fill_MIN_salvation_Button.display_price( Fill_MIN_salvation_price, Fill_MIN_salvation_upgrade, 35, 10, true );

        // Fill MAX percent
        fill( 255 );
        textAlign( CENTER );
        textSize( 25 );

        text( "Increase Fill\nMAX percent!", 300, 390 );

        fill( 'red' );
        textStyle( BOLD );

        text( "Now : " + Fill_MAX_salvation + "%", 300, 455 );

        Fill_MAX_salvation_Button.draw();

        let Fill_MAX_salvation_price = MAX_Upgrade_Percent(Fill_MAX_salvation);

        Fill_MAX_salvation_Button.display_price( Fill_MAX_salvation_price, Fill_MAX_salvation_upgrade, 35, 10, true );

        // SALVATION Min percent
        fill( 255 );
        textAlign( CENTER );
        textSize( 25 );

        text( "Increase GET\nMIN percent!", 490, 390 );

        fill( 'red' );
        textStyle( BOLD );

        text( "Now : " + MIN_salvation + "%", 490, 455 );

        MIN_salvation_Button.draw();

        let MIN_salvation_price = MIN_Upgrade_Percent(MIN_salvation);

        MIN_salvation_Button.display_price( MIN_salvation_price, MIN_salvation_upgrade, 35, 10, true );

        // SALVATION Max percent
        fill( 255 );
        textAlign( CENTER );
        textSize( 25 );

        text( "Increase GET\nMAX percent!", 680, 390 );

        fill( 'red' );
        textStyle( BOLD );

        text( "Now : " + MAX_salvation + "%", 680, 455 );

        MAX_salvation_Button.draw();

        let MAX_salvation_price = MAX_Upgrade_Percent(MAX_salvation);

        MAX_salvation_Button.display_price( MAX_salvation_price, MAX_salvation_upgrade, 35, 10, true );

    }
    break;

    // How to play
    case HOWTO:
    {

    }
    break;

    // SALVATION
    case SALVATION_CHANCE:
    {
        push();

        imageMode( CORNER );
        background( SALVATION_Background );

        pop();

        push();

        textSize( 40 );
        textStyle( BOLD );

        fill( '#6495ed' );
        stroke( 255 );
        strokeWeight( 7 );


        text( "Welcome, bankrupt.\nI will give a chance to you.\nYou will get ⍟" +
            int( Salvation_Point * MIN_salvation / 100 ) + " ~ " + int( Salvation_Point * MAX_salvation / 100 ) +
            "\n\nAnd you need to give me", width / 2, 100 );

        fill( 255, 0, 0 );
        text( "⍟" + int( Salvation_Point * DEBT_salvation / 100 ) + " LATER", width / 2, 353 );

        fill( 0, 255, 0 );
        text( "TEST YOUR FORTUNE", width / 2, 420 );

        pop();

        push();

        image( Colored_WingPoint_Image, width / 2, 520, 200, 200 );

        pop();

    }
    break;

    case CHECK_SALVATION:
    {
        push();

        imageMode( CORNER );
        background( SALVATION_Background );

        pop();


        push();

        textSize( 40 );
        textStyle( BOLD );

        fill( '#6495ed' );
        stroke( 255 );
        strokeWeight( 7 );


        text( "You earn ⍟ " + GET_SALVATION + "\nYour debt is ⍟ " + Debt, width / 2, 100 );
        text( "Later, Come to Shop.\nI will wait for you.", width / 2, 220 );

        fill('red');
        text( "If you don't, Next time\nGAME will OVER", width / 2, 350 );

        pop();



        push();

        image( Colored_WingPoint_Image, width / 2, 520, 200, 200 );

        pop();
    }
    break;

    case PAY_DEBT:
    {
        push();

        imageMode( CORNER );
        background( SALVATION_Background );

        pop();

        push();

        image(PointImage, 300, height / 2 - 5, 100, 100);

        textAlign(LEFT, CENTER);
        textSize(100);
        textStyle( BOLD );

        fill( '#6495ed' );
        stroke( 255 );
        strokeWeight( 7 );
        


        text(Debt, 400, height/2);

        textAlign(CENTER, CENTER);
        text("PAY DEBT", width / 2, 70);

        pop();

        push();

        image( Black_WingPoint_Image, width / 2, 520, 200, 200 );

        pop();  
    }
    break;

    case GAMEOVER:
    {
        push();

        imageMode(CORNER);
        // background();

        pop();
    }
    break;
    }
}


/////////////////////////////////////////////////////////////////////////////////////////////////////


function mousePressed()
{
    // Reset all Sound when Refresh
    if ( !ResetSound )
    {
        ResetAllMusic();

        Background_Music.loop();

        ResetSound = true;
    }


    // HomeButton
    if ( ( CurrentScene >= MAINMENU && CurrentScene <= IS_INPUT_RIGHT ) || ( CurrentScene >= HOWTO && CurrentScene <
            SALVATION_CHANCE ) ) // Other case
    {
        HomeButton.ChangeScene( MAINMENU );
        HomeButton.clearInput();
    }
    if ( ( CurrentScene >= ROOM && CurrentScene < HOWTO ) ) // Room Case
    {
        if ( Brick_Room == APPLY || LikeOcean_Room == APPLY || Poker_Room == APPLY || Fantasy_Room == APPLY )
        {
            HomeButton.ChangeSong( Background_Music );
        }
        HomeButton.ChangeScene( MAINMENU );
        HomeButton.clearInput();
    }


    // Switch by CurrentScene
    switch ( CurrentScene )
    {
    case PLEASE_CLICK:
    {
        CurrentScene = MAINMENU;
        Alert_SFX.play();
        alert( "Move Slider to set Volume!" );

    }
    break;

    case MAINMENU:
    {
        if ( Point >= 10 )
        {
            ShellButton.ChangeScene( SHELL_GAME );
            ShellButton.createInput( 100, 50 );
        }
        else if ( Point < 10 && SALVATION == false )
        {
            ShellButton.ChangeScene( SALVATION_CHANCE );
            ShellButton.ChangeSong( SPECIAL );
        }
        else
        {
            ResetAllMusic();
            ShellButton.ChangeScene( GAMEOVER );
        }


        if ( SALVATION == false )
        {
            ShopButton.ChangeScene( UPGRADE_SHOP );
            ShopButton.ChangeSong( Room_Music );
        }
        else
        {
            ShopButton.ChangeScene( PAY_DEBT );
            ShopButton.ChangeSong(SPECIAL);
        }

        HowtoButton.ChangeScene( HOWTO );
    }
    break;

    // Shall game Scene

    case IS_INPUT_RIGHT:
    {
        input_true.ChangeScene( SELECT_SHELL );
        input_true.clearInput();
        input_true.calculate();
        input_true.startShuffle();

        input_false.ChangeScene( SHELL_GAME, true );
        input_false.Alert( "OK, Please Type Again~" );

    }
    break;

    case SELECT_SHELL:
    {
        if ( ShuffleEnd )
        {
            Select_1stCup.ChangeScene( CHOOSE_1ST_CUP );
            Select_2ndCup.ChangeScene( CHOOSE_2ND_CUP );
            Select_3rdCup.ChangeScene( CHOOSE_3RD_CUP );
        }

    }
    break;

    case CHOOSE_1ST_CUP:
    {
        GetThisPoint = Calculate_Final_Point( Cup[ 0 ] );
        Point += GetThisPoint;
        Confirm_Percent.ChangeScene( FINAL_CALCULATE );
    }
    break;

    case CHOOSE_2ND_CUP:
    {
        GetThisPoint = Calculate_Final_Point( Cup[ 1 ] );
        Point += GetThisPoint;
        Confirm_Percent.ChangeScene( FINAL_CALCULATE );
    }
    break;

    case CHOOSE_3RD_CUP:
    {
        GetThisPoint = Calculate_Final_Point( Cup[ 2 ] );
        Point += GetThisPoint;
        Confirm_Percent.ChangeScene( FINAL_CALCULATE );
    }
    break;

    case FINAL_CALCULATE:
    {
        Final_confirm.Fill_Salvation();

        Final_confirm.ChangeScene( MAINMENU, true );
        Final_confirm.Alert( "Thanks for Plying!\nGo to shop or play again!" );
    }
    break;

    case UPGRADE_SHOP:
    {
        // Previous & Next Button (Change argument)
        Previous_Button.Alert( "It's first page!" )
        Next_Button.ChangeScene( ROOM_BACKGROUND_SHOP );

        // Upgrade
        let upgrade_price = Upgrade_Percent();
        Upgrade_Button.deal_price( upgrade_price, upgrade, false, 1 );
    }
    break;

    case ROOM_BACKGROUND_SHOP:
    {
        // Previous & Next Button (Change argument)
        Previous_Button.ChangeScene( UPGRADE_SHOP );
        Next_Button.Alert("It's last page!")

        // Background
        Brick_Room = Brick_Button.deal_price( 0, Brick_Room, true );

        Fantasy_Room = Fantasy_Button.deal_price( 200, Fantasy_Room, true );

        Poker_Room = Poker_Button.deal_price( 777, Poker_Room, true );

        LikeOcean_Room = LikeOcean_Button.deal_price( 1004, LikeOcean_Room, true );

        // Fill Min Salvation
        let Fill_MIN_salvation_price = MIN_Upgrade_Percent(Fill_MIN_salvation);

        Fill_MIN_salvation_Button.deal_price( Fill_MIN_salvation_price, Fill_MIN_salvation_upgrade, false, 2 );

        // Min Salvation
        let MIN_salvation_price = MIN_Upgrade_Percent(MIN_salvation);

        MIN_salvation_Button.deal_price( MIN_salvation_price, MIN_salvation_upgrade, false, 3 );

        // Fill MAx salvation
        let Fill_MAX_salvation_price = MAX_Upgrade_Percent(Fill_MAX_salvation);

        Fill_MAX_salvation_Button.deal_price( Fill_MAX_salvation_price, Fill_MAX_salvation_upgrade, false, 4 );

        // Max salvation
        let MAX_salvation_price = MAX_Upgrade_Percent(MAX_salvation);

        MAX_salvation_Button.deal_price( MAX_salvation_price, MAX_salvation_upgrade, false, 5 );
    }
    break;

    // How to play

    // SALVATION
    case SALVATION_CHANCE:
    {
        SALVATION_Button.start_SALVATION();
        SALVATION_Button.ChangeScene( CHECK_SALVATION );
    }
    break;

    case CHECK_SALVATION:
    {
        SALVATION_Button.ChangeScene( MAINMENU, false, true );
        SALVATION_Button.ChangeSong(Background_Music);
    }
    break;

    case PAY_DEBT:
    {
        if(Point >= Debt)
        {
            Purchase_SFX.play();
            
            SALVATION_Button.ChangeScene(MAINMENU, false, false, true);
            SALVATION_Button.ChangeSong(Background_Music);
        }
        else
        {
            SALVATION_Button.Alert("You don't have enough POINT!");
        }
    }
    break;
    }
}

function keyPressed()
{
    if ( CurrentScene == SHELL_GAME && keyCode === 13 )
    {
        if ( PointInput.value() >= 10 && PointInput.value() <= Point )
        {
            Input_SFX.play();
            PointInput.changed( getPoint );
            Selected_Point = int( PointInput.value() );
            CurrentScene = IS_INPUT_RIGHT;
        }
        else
        {
            Alert_SFX.play();
            alert( "Please type valid value!" );
        }
    }
}
