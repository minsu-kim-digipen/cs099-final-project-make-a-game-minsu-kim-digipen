// Name       : Minsu Kim
// Assignment : Make a Game
// Course     : CS099
// Spring 2021

let FirstCup;
let SecondCup;
let ThirdCup;

let MAX_PERCENT;

function mousePressed()
{
    // Initial Thing
    MAX_PERCENT = 200;


    // First random
    FirstCup = int(random(MAX_PERCENT));
    MAX_PERCENT -= FirstCup;


    // Second random
    SecondCup = int(random(MAX_PERCENT));
    MAX_PERCENT -= SecondCup;

    ThirdCup = floor(MAX_PERCENT);


}