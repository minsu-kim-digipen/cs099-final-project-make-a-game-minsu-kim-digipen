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

    if(Max_Cup_Percent < 300)
    {
        return (upgrade_gauge * upgrade_gauge) * 10;
    }
    else if(Max_Cup_Percent >= 300 && Max_Cup_Percent < 400)
    {
        return (upgrade_gauge * upgrade_gauge) * 15;
    }
    else if(Max_Cup_Percent == 400)
    {
        return 666;
    }
    else
    {
        upgrade = OWN;
    }
}

// Background!
let Brick_Room = APPLY;
let LikeOcean_Room = SALE;
let BoxWood_Room = SALE;
let Fantasy_Room = SALE;

function ResetBackground()
{
    // BoxWood_Room = OWN;

    // if(!LikeOcean_Room == SALE)
    // {
    //     LikeOcean_Room = OWN;
    // }
    // if(!BoxWood_Room == SALE)
    // {
    //     BoxWood_Room = OWN;
    // }
    // if(!Fantasy_Room == SALE)
    // {
    //     Fantasy_Room = OWN;
    // }
}