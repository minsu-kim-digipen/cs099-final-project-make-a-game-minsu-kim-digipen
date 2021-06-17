// Name       : Minsu Kim
// Assignment : Make a Game
// Course     : CS099
// Spring 2021

class Button
{
    constructor( x, y, width, height )
    {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    // Mouseover & Box
    draw( context, TextColor = 0, style = NORMAL )
    {
        const is_inside_button = mouseX > this.x - ( this.width / 2 ) && mouseX < this.x + ( this.width / 2 ) &&
            mouseY > this.y - ( this.height / 2 ) && mouseY < this.y + ( this.height / 2 );

        push();

        noStroke();
        rectMode( CENTER );

        // Mouse is in Button, it turns to gray
        if ( is_inside_button )
        {
            fill( 220 );
        }
        else
        {
            fill( 255 );
        }

        rect( this.x, this.y, this.width, this.height );

        pop();

        push();

        fill( TextColor );
        textAlign( CENTER );
        textSize( 30 );
        textStyle( style )

        text( context, this.x, this.y + 10 );

        pop();
    }

    // When Click, Change variable

    ChangeScene( Scene )
    {
        const is_inside_button = mouseX > this.x - ( this.width / 2 ) && mouseX < this.x + ( this.width / 2 ) &&
            mouseY > this.y - ( this.height / 2 ) && mouseY < this.y + ( this.height / 2 );

        if ( is_inside_button )
        {
            CurrentScene = Scene;
        }
    }

    calculate()
    {
        const is_inside_button = mouseX > this.x - ( this.width / 2 ) && mouseX < this.x + ( this.width / 2 ) &&
            mouseY > this.y - ( this.height / 2 ) && mouseY < this.y + ( this.height / 2 );

        if ( is_inside_button )
        {
            Point -= Selected_Point;
        }


    }


    // Alert When Click
    Alert( text )
    {
        const is_inside_button = mouseX > this.x - ( this.width / 2 ) && mouseX < this.x + ( this.width / 2 ) &&
            mouseY > this.y - ( this.height / 2 ) && mouseY < this.y + ( this.height / 2 );

        if ( is_inside_button )
        {
            alert( text );
        }
    }

    // Input point
    createInput( width, height )
    {
        const is_inside_button = mouseX > this.x - ( this.width / 2 ) && mouseX < this.x + ( this.width / 2 ) &&
            mouseY > this.y - ( this.height / 2 ) && mouseY < this.y + ( this.height / 2 );

        if ( is_inside_button )
        {
            PointInput = createInput( '' );
            PointInput.size( width, height );
        }
    }

    clearInput()
    {
        const is_inside_button = mouseX > this.x - ( this.width / 2 ) && mouseX < this.x + ( this.width / 2 ) &&
            mouseY > this.y - ( this.height / 2 ) && mouseY < this.y + ( this.height / 2 );

        if ( is_inside_button )
        {
            PointInput.remove();
        }
    }

    // Start Shuffle
    startShuffle()
    {
        // Get Random amount in here 
        Random_Cup_Amount(3, 200);

        // Use Interval to Shuffle Shell
        let Shuffle_interval = setInterval(() => 
        {
            Shuffle_CupPosition();
            CupMove();
        }, 20);
    
        setTimeout(() => {
            clearTimeout(Shuffle_interval);
            ShuffleEnd = true;
        }, 1000);

    }
}
