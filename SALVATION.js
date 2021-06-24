// Name       : Minsu Kim
// Assignment : Make a Game
// Course     : CS099
// Spring 2021

let Salvation_Point = 0;

let SALVATION = false;

function Fill_Salvation()
{
    let Salvation_Amount = int(GetThisPoint * random(50, 100) / 100);
    Salvation_Point += Salvation_Amount;
}