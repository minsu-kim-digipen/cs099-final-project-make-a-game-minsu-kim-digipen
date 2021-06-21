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

    // For shop
    display_price( price, is_own, size = 30, interval = 20 , is_upgrade = false )
    {
        const INTERVAL = size / 3 * 2

        if(is_own == SALE)
        {
            push();

            imageMode( CENTER );
            image( PointImage, this.x - 40, this.y, size, size );

            textAlign( LEFT, CENTER );
            textSize( size );
            textStyle( BOLD );
            text( price, this.x - interval, this.y + 1 );

            pop();

        }
        else
        {
            if(!is_upgrade)
            {
                push();

                textSize( 30 );
                fill('#6495ed')
                textStyle( BOLD );
                text( "OWN", this.x, this.y + 10);

                pop();
            }
            else
            {
                push();

                textSize( 30 );
                fill('#6495ed')
                textStyle( BOLD );
                text( "MAX %!", this.x, this.y + 10);

                pop();
            }
        }
    }

    deal_price( price, is_own , is_upgrade = false )
    {
        const is_inside_button = mouseX > this.x - ( this.width / 2 ) && mouseX < this.x + ( this.width / 2 ) &&
            mouseY > this.y - ( this.height / 2 ) && mouseY < this.y + ( this.height / 2 );

        if(is_inside_button)
        {
            switch(is_own)
            {
                case SALE:
                {
                    if(Point >= price)
                    {
                        Purchase_SFX.play();
        
                        Point -= price;

                        if(is_upgrade)
                        {
                            Max_Cup_Percent += 10;
                        }
                        else
                        {
                            is_own = OWN;
                        }
                    }
                    else
                    {
                        Alert_SFX.play();
                        alert( "You don't have enough Point!" );
                    }
                }
                break;

                // case OWN:
                // {

                // }
                // break;

                // case APPLY:
                // {

                // }
                // break;
            }

        }
    }

    Apply(variable, is_background = false)
    {
        if(!is_background)
        {
            if(variable == OWN)
            {
                variable = APPLY;
            }
            else if(variable == APPLY)
            {
                variable = OWN;
            }
        }
        else
        {
            if(variable == OWN)
            {
                ResetBackground();

                variable = APPLY;
            }
            else if(variable == APPLY)
            {
                Alert_SFX.play();
                alert("Please apply other background! It's already applied~")
            }
        }
    }

    // When Click, Change variable

    ChangeScene( Scene, is_alert = false )
    {
        const is_inside_button = mouseX > this.x - ( this.width / 2 ) && mouseX < this.x + ( this.width / 2 ) &&
            mouseY > this.y - ( this.height / 2 ) && mouseY < this.y + ( this.height / 2 );

        if ( is_inside_button )
        {
            if(!is_alert)
            {
                Select_SFX.play();
            }

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
            Alert_SFX.play();
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
        Random_Cup_Amount( 3, Max_Cup_Percent );

        // Use Interval to Shuffle Shell
        let Shuffle_interval = setInterval( () =>
        {
            Shuffle_CupPosition();
            CupMove();
        }, 20 );

        setTimeout( () =>
        {
            clearTimeout( Shuffle_interval );
            ShuffleEnd = true;
        }, 1000 );

    }

    // Change Song
    ChangeSong( What_Music )
    {
        const is_inside_button = mouseX > this.x - ( this.width / 2 ) && mouseX < this.x + ( this.width / 2 ) &&
            mouseY > this.y - ( this.height / 2 ) && mouseY < this.y + ( this.height / 2 );


        if ( is_inside_button )
        {
            switch ( What_Music )
            {
            case Background_Music:
            {
                ResetAllMusic();

                Background_Music.loop();
            }
            break;

            case Room_Music:
            {
                ResetAllMusic();

                Room_Music.loop();
            }
            break;

            case SPECIAL:
            {
                ResetAllMusic();

                SPECIAL.loop();
            }
            }

        }
    }
}
