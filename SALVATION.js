// Name       : Minsu Kim
// Assignment : Make a Game
// Course     : CS099
// Spring 2021

// Use in fill salvation
let Salvation_Point = 0;

let Fill_MIN_salvation = 0;
let Fill_MAX_salvation = 100;

// Use in salvation chance
let SALVATION = false;

let MIN_salvation = 0;
let MAX_salvation = 100;
let DEBT_salvation = 50;

let GET_SALVATION = 0;
let Debt = 0;

function MIN_Upgrade_Percent(standard)
{
    if(standard < 100)
    {
        return standard;
    }
    else
    {
        if(standard == MIN_salvation)
        {
            MIN_salvation_upgrade = OWN;
        }
        else if(standard == Fill_MIN_salvation)
        {
            Fill_MIN_salvation_upgrade = OWN;
        }
    }
}

function MAX_Upgrade_Percent(standard)
{
    if(standard < 150)
    {
        return (standard * 120 / 100);
    }
    else
    {
        if(standard == MAX_salvation)
        {
            MAX_salvation_upgrade = OWN;
        }
        else if(standard == Fill_MAX_salvation)
        {
            Fill_MAX_salvation_upgrade = OWN;
        }
    }
}