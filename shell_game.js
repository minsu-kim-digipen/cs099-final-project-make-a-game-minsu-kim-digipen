// Name       : Minsu Kim
// Assignment : Make a Game
// Course     : CS099
// Spring 2021

// Display Point

let point = 100;

function display_point( x, y, size, another_value_to_display = false )
{
    push();

    imageMode( CENTER );
    image( PointImage, x - 40, y, size, size );

    textAlign( LEFT, CENTER );
    textSize( size );
    textStyle( BOLD );

    if ( another_value_to_display )
    {
        text( Selected_Point, x, y + 5 );
    }
    else
    {
        text( point, x, y + 5 );
    }

    pop();
}

// Get point with InputBox
function getPoint()
{
    if ( PointInput.value() >= 10 && PointInput.value() <= point )
    {
        return PointInput.value();
    }
}

// Get Random Cup value with this code
// THe value will be inside Cup array
// Cup[0], Cup[1], Cup[max]
let Cup = [];

function Random_Cup( Cup_amount, max_percent )
{
    // Initial variable

    let MAX_PERCENT;

    // Get First max_percent amount
    if ( MAX_PERCENT == undefined )
    {
        MAX_PERCENT = max_percent
    }

    // Get random value
    for ( i = 0; i < Cup_amount; i++ )
    {
        // This is the last cup
        if ( i == Cup_amount - 1 )
        {
            Cup[ i ] = MAX_PERCENT
        }
        // This is the other cups, using random to get percent value
        else
        {
            Cup[ i ] = int( random( MAX_PERCENT ) );
            MAX_PERCENT -= Cup[ i ];
        }
    }

    // Visualize cup in console
    console.log( Cup );
}


// This all code is for Cup Mixing!

let CupPosition = [];


function Shuffle_CupPosition()
{
    CupPosition = [];

    while ( CupPosition.length < 3 )
    {
        CupPosition.push( int( random( 3 ) ) );

        if ( CupPosition[ 0 ] == CupPosition[ 1 ] )
        {
            CupPosition.splice( 0, 1 );
        }
        if ( CupPosition[ 0 ] == CupPosition[ 2 ] )
        {
            CupPosition.splice( 0, 1 );
        }
        if ( CupPosition[ 1 ] == CupPosition[ 2 ] )
        {
            CupPosition.splice( 1, 1 );
        }
    }
}

function CupMove()
{
    switch ( CupPosition[ 0 ] )
    {
    case 0:
    {
        if ( GoldCup.x == 200 )
        {
            break;
        }
        else
        {
            while ( GoldCup.x > 200 )
            {
                GoldCup.x -= 100;
            }
            break;
        }
    }

    case 1:
    {
        if ( GoldCup.x == 400 )
        {
            break;
        }
        else if ( GoldCup.x < 400 )
        {
            while ( GoldCup.x < 400 )
            {
                GoldCup.x += 100;
            }
            break;
        }
        else
        {
            while ( GoldCup.x > 400 )
            {
                GoldCup.x -= 100;
            }
            break;
        }
    }

    case 2:
    {
        if ( GoldCup.x == 600 )
        {
            break;
        }
        else
        {
            while ( GoldCup.x < 600 )
            {
                GoldCup.x += 100;
            }
            break;
        }
    }
    }


    switch ( CupPosition[ 1 ] )
    {
    case 0:
    {
        if ( SilverCup.x == 200 )
        {
            break;
        }
        else
        {
            while ( SilverCup.x > 200 )
            {
                SilverCup.x -= 100;
            }
            break;
        }
    }

    case 1:
    {
        if ( SilverCup.x == 400 )
        {
            break;
        }
        else if ( SilverCup.x < 400 )
        {
            while ( SilverCup.x < 400 )
            {
                SilverCup.x += 100;
            }
            break;
        }
        else
        {
            while ( SilverCup.x > 400 )
            {
                SilverCup.x -= 100;
            }
            break;
        }
    }

    case 2:
    {
        if ( SilverCup.x == 600 )
        {
            break;
        }
        else
        {
            while ( SilverCup.x < 600 )
            {
                SilverCup.x += 100;
            }
            break;
        }
    }
    }


    switch ( CupPosition[ 2 ] )
    {
    case 0:
    {
        if ( BronzeCup.x == 200 )
        {
            break;
        }
        else
        {
            while ( BronzeCup.x > 200 )
            {
                BronzeCup.x -= 100;
            }
            break;
        }
    }

    case 1:
    {
        if ( BronzeCup.x == 400 )
        {
            break;
        }
        else if ( BronzeCup.x < 400 )
        {
            while ( BronzeCup.x < 400 )
            {
                BronzeCup.x += 100;
            }
            break;
        }
        else
        {
            while ( BronzeCup.x > 400 )
            {
                BronzeCup.x -= 100;
            }
            break;
        }
    }

    case 2:
    {
        if ( BronzeCup.x == 600 )
        {
            break;
        }
        else
        {
            while ( BronzeCup.x < 600 )
            {
                BronzeCup.x += 100;
            }
            break;
        }
    }
    }
}
