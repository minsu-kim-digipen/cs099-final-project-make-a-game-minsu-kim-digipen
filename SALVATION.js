// Name       : Minsu Kim
// Assignment : Make a Game
// Course     : CS099
// Spring 2021

let Salvation_Point = 0;

let MIN_salvation = 0;
let MAX_salvation = 100;
let DEBT_salvation = 50;

let GET_SALVATION = 0;
let Debt = 0;

let SALVATION = false;

function Fill_Salvation()
{
    let Salvation_Amount = int(Selected_Point * random(50, 100) / 100);
    Salvation_Point += Salvation_Amount;
}