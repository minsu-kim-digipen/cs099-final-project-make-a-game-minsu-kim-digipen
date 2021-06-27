# Shapes

## What is this?
With using this, we can draw shapes in the sketch. \
Like point, line, circle, triangle, square and so on.

## Why is it important?
This is the basic concept to make visual. \
With this we can make button, showcase and so on. \
We can make all of these with using Shape function.

## How do we use it?
All Shapes need to type position. \
This will be first, second argument.
```js
rect(50, 50);    // This will be x : 50 / y : 50 position!
```
Position standard can change with OOMode. \ 
Like rectMode, ellipseMode.

And type size of the shape. \
We need to put width / height or just diameter.
```js
rect(50, 50, 10, 40);    // This will be width : 10 / height : 40!
square(50, 50, 30);     // Square has same width & height value, so you need to type just one.
```

For optional, we can add some value to make more deatiled.

## Example
I used only rect.
```js
    rectMode( CENTER );         // sketch.js 228    (Edit standard to CENTER)

    rect( 10, 60, 150, 200 );   // sketch.js 474    (x : 10 / y : 60, width : 150, height : 200)
    rect( 220, 70, 180, 200 );  // sketch.js 578    (x : 220 / y : 70, width : 180 / height : 200)
```

# Colors

## What is this?
With using this, you can get colored thing. \
It is used with background, shapes, text and so on.

## Why is it important?
Imagine all around you is black or white. \
It could be boring or threaten with sight.

With the color, we can emphasize text. \
Also we can express atmosphere of game screen.

Various of reason, the color is basic and important.

## How do we use it?
Inside the p5.js use fill or stroke to change color. \
Fill is inside the shape, stroke is border. \
You can type rgb, hex code and so on.

Be careful of position. \
Behind Color function are affected.

:+1:
* Color
* Shape

:-1:
* Shape
* Color (That color will affect after this function.)

## Example
```js
    fill( 'gold' ); // sketch.js 237    
    fill( '#f4a460' );  // sketch.js 245    (HEX code)
    fill( 255, 0, 0 );  // sketch.js 254    (RGB)

```

# Variables

## What is this?
Variable is like...Box. \
Inside the Box, we can store something inside.

Same as this, you can put integer, decimal, boolean and so on.

## Why is it important?
With variable we don't need to type same number inside the code. \
Just put the variable to them.

It is also easy to modify value. \
Just go to the variable where we defined and modify that.

And after we can plus or something else to modify with code. \
Like `variable = variable + 50`

We can do various thing with variable, so it is important.

## How do we use it?
First, we need to define the variable. \
In p5.js we can define with let or const (We can also define with var)

Variable defined with let can always modified. \
Variable defined with const can't modify with code.

When we define the variable, we can put inside argument or change value with calculation or equal sign.

## Example

```js
    // sketch.js 6~22

    // Initial Setting
    let Canvas; // Define variable

    let CurrentScene = MAINMENU;    // Define and put value

    const CanvasWidth = 800;    // Const doesn't change
    const CanvasHeight = 600;
    const IconSize = 50;

    let Sound_Slider;
    let Point_You_Have;

    let ResetSound = false;

    let PointInput;

    let Selected_Point;
```

# Conditional Statements

## What is this?
With using this, we can check the thing is true or false. \
If that is true, inside the code executes. \
If it doesn't that doesn't execute or execute code inside the else.

## Why is it important?
Conditional Statements can set condition and only that's true that execute. \
So we can set what code to execute.

Like when it is weekday go to university, when it is weekend just stay home.

## How do we use it?
There are three things, if / else if / else 

If execute when it's true. 

Else if is similar with if, when inside if condition is false, check else if. \
And else if condition is true, that executes.

Else executes when all if and else if is false. \
Like if rainy take umbrella, else take nothing!

## Example
```js
    // sketch.js 1086~1115

    // If point is equal or more than 10
    if ( Point >= 10 )
    {
        ShellButton.ChangeScene( SHELL_GAME );
        ShellButton.createInput( 100, 50 );
    }
    // If point is less than 10 AND salvation is false
    else if ( Point < 10 && SALVATION == false )
    {
        ShellButton.ChangeScene( SALVATION_CHANCE );
        ShellButton.ChangeSong( SPECIAL );
    }
    // If it isn't if / else if condition, this execute
    else
    {
        ShellButton.ChangeScene( GAMEOVER, true );
        ShellButton.ChangeSong(SPECIAL);
        ShellButton.Alert("GAMEOVER! Thanks for PLAYING!");
    }

    // If salvation is false, this execute.
    if ( SALVATION == false )
    {
        ShopButton.ChangeScene( UPGRADE_SHOP );
        ShopButton.ChangeSong( Room_Music );
    }
    // Else
    else
    {
        ShopButton.ChangeScene( PAY_DEBT );
        ShopButton.ChangeSong(SPECIAL);
    }

    HowtoButton.ChangeScene( HOWTO0 );
```

# Loops

## What is this?
Just like name, we can repeat the code until condition is satisfied.

## Why is it important?
Think variable Chicken is zero. \
We need to plus 1 to Chicken variable until it become 10. \
It's so inconvenient to plus, plus, plus until it become 10.

Just use loop until 10 to do that! \
This is why it is important.

## How do we use it?
We can use loop with while and for.

While is like if with loop. \
`While(condition)` \
It loops until condition is true.

For is same as while, but we can do all thing with argument. \
`for(initial, condition, change)` \
In initial make variable like i = 0 \
In condition we put condition like i < 10 \
In change we put change like i = i + 1 (i++)

Change argument execute after inside code are all executed.


## Example
```js
    // sketch.js 670~681

    // loop 4 time
    for(BOX = 0; BOX < 4; BOX++)
    {
        const showcaseWidth = 180;
        const interval = 10;

        const x_position = 20 + ((showcaseWidth + interval) * BOX);

        rect(x_position, 290, showcaseWidth, 220);

        imageMode( CORNER );
        image( Upgrade_Image, x_position, 290, showcaseWidth, 70 );
    }
    // End this loop, BOX plus 1
```

# Functions

## What is this?
As simply, Function is collection of code. \
With using this you don't need to write repeated thing. \
Just use function to load that and execute.

## Why is it important?
Think we make degrees to radians. \
We don't need to write every calculate code. \
Like `30 * PI / 180`, `50 * PI / 180`

We just make function degrees_to_radians and use that! \
Like `degrees_to_radians(50)`, `degrees_to_radians(80)`

It's more comfortable.

## How do we use it?
`function [name]([argument])` \
Inside the name, type what name to use. \
Inside argument you can get value or boolean and so on.

Inside that function you write code.
If you need to output result, use return to output that.

## Example
```js
// SALVATION.js 22~39
function MIN_Upgrade_Percent(standard)  // Get standard argument
{
    if(standard < 100)
    {
        return standard;    // Standard will return
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
```


# Classes

## What is this?
As simply, Class is collection of Function. \
We first make new class inside variable, and we can use that variable to execute functions inside the class.

## Why is it important?
Let's think we need to make button. \
We use Shape to make Button, and text inside that. \
When We click inside the Button, change Scene.

It's hard to type all code when we make new button. \
With class, we can reduce that concern.

## How do we use it?
First we need to define class. \
`class [name]` to define class. 

Inside the class, we need constructor. \
`constructor([argument])` \
Like function, we can get value with constructor.
Inside the class we use `this.` to get value inside the class.

And then, put function like `plus()`. \
We can use `this.` to get value and execute code with that.

We need to load class when we use that. \
Like this way, we can get ready to use class.
```js
let Chicken

function setup()
{
    Chicken = new class([argument]);
}

```
Inside argument will go to constructor and class will use that value. \
For use plus function, use `[variable].[function]` \
Like `Chicken.plus()`

## Example
```js
// Make Class
// Button.js 9~15
class Button
{
    // In constructor, you can get value with argument.
    constructor( x, y, width, height )
    {
        // Use this. to use in class
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    // Function in class
    // Button.js 298~307
    clearInput()
    {
        // Use this. to get button position
        const is_inside_button = mouseX > this.x - ( this.width / 2 ) && mouseX < this.x + ( this.width / 2 ) &&
            mouseY > this.y - ( this.height / 2 ) && mouseY < this.y + ( this.height / 2 );

        if ( is_inside_button )
        {
            PointInput.remove();
        }
    }
}

// Define new Button
// Buttonlist.js 8
let HomeButton = new Button( 30, 30, 50, 50 );

// Use function
// sketch.js 1069
HomeButton.clearInput();    // This way, clearInput will execute!
```

# Arrays

## What is these?
As simply, this is collection of data. \
You can store number, text and so on.

And you that collection is stored like `{5, 10, true}` \
You can use this thing with index. 

## Why is it important?
This is easy to add or delete and define. \
Like particle, make an particle with array, and can remove when it go over the background!

This is stored as index, so it's more easy to delete particle1, particle2, particle3 ~~~ particle 50.

## How do we use it?
First you need to define array. \
Use `[variable] = []` or `[variable] = [5, 10, 15]`. \
Last way, you can define and put value inside array at the same time.

And you can get value with this method. \
`variable[0]`

Let's think it's `chicken = [5, 10, 15]` \
I want to get 10, then type `chicken[1]` to get that!

Be careful, array index starts 0, not 1.

You can add value in array with `.push()` \
When you use that, that value will add at the last index.

You can remove value in array with `.splice(index, howmuch)` \
In index, put index and howmuch, if you want to delete 1~3 type this way `.splice(1, 3)`

## Example

```js
// shell_game.js 50~82
let Cup = [];   // Define Cup array

function Random_Cup_Amount( Cup_amount, max_percent )
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
            Cup[ i ] = MAX_PERCENT  // Put in the index
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
```