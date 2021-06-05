// Name       : Minsu Kim
// Assignment : Make a Game
// Course     : CS099
// Spring 2021

function CreateButton(x, y, width, height, context, size = 30)
{
    push();

    noStroke();

    // Mouse is in Button, it turns to gray
    if(mouseX > x && mouseX < x + width && mouseY > y && mouseY < y + height)
    {
        fill(220);
    }
    else
    {
        fill(255);
    }

    rect(x, y, width, height);

    pop();

    // Present text in the button
    push();

    const MIDDLE_X = x + (width / 2);
    const MIDDLE_Y = y + (height / 2);

    textAlign(CENTER);
    textSize(size);
    text(context, MIDDLE_X, MIDDLE_Y);

    pop();
}