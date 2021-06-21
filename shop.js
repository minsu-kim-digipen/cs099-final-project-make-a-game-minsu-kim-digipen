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
