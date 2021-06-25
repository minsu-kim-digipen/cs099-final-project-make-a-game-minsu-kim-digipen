// Name       : Minsu Kim
// Assignment : Make a Game
// Course     : CS099
// Spring 2021

const SALE = 0;
const OWN = 1;
const APPLY = 2;

// Upgrade Percent!
let Max_Cup_Percent = 200;

let upgrade = SALE;

function Upgrade_Percent()
{
    const upgrade_gauge = (Max_Cup_Percent - 190) / 10;

    return (upgrade_gauge * upgrade_gauge) * 10;
}

// Background!
let Brick_Room = APPLY;
let LikeOcean_Room = SALE;
let BoxWood_Room = SALE;
let Fantasy_Room = SALE;

function Change_Background()
{
    push();

    imageMode( CORNER );

    if ( Brick_Room == APPLY )
    {
        background( Brick_Room_Image );
    }
    else if ( LikeOcean_Room == APPLY )
    {
        background( LikeOcean_Room_Image );
    }
    else if ( BoxWood_Room == APPLY )
    {
        background( BoxWood_Room_Image );
    }
    else if ( Fantasy_Room == APPLY )
    {
        background( Fantasy_Room_Image );
    }

    pop();
}