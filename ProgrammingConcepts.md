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
Position standard can change with OOMode. \
And type size of the shape. \
We need to put width / height or just diameter.

For optional, we can add some value to make more deatiled.

## Example


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
There are three things, if / else if / else \

If execute when it's true. \

Else if is similar with if, when inside if condition is false, check else if. \
And else if condition is true, that executes.

Else executes when all if and else if is false. \
Like if rainy take umbrella, else take nothing!

## Example


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
`class [name]` to define class. \

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


# Arrays

## What is these?


## Why is it important?

## How do we use it?

## Example

