// Name       : Minsu Kim
// Assignment : Make a Game
// Course     : CS099
// Spring 2021

let Cup = [];

function Random_Cup(Cup_amount, max_percent)
{
    // Initial variable

    let MAX_PERCENT;

    // Get First max_percent amount
    if(MAX_PERCENT == undefined)
    {
        MAX_PERCENT = max_percent
    }

    // Get random value
    for(i = 0; i < Cup_amount; i++)
    {
        // This is the last cup
        if(i == Cup_amount - 1)
        {
            Cup[i] = MAX_PERCENT
        }
        // This is the other cups, using random to get percent value
        else
        {
            Cup[i] = int(random(MAX_PERCENT));
            MAX_PERCENT -= Cup[i];
        }
    }

    // Visualize cup in console
    console.log(Cup);
}