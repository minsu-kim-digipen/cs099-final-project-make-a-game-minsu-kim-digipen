# High Concept

## Topic
```
As clearly and simply as you can, explain your game idea.
``` 

## Where I get the idea
This game idea comes from the shell game. \
In Korean "야바위". 

## Overall GamePlaying 
Get the what ⍟(Points) to use, and shake 3 cups. \
Inside the cup, there is a percent number like 100% \
If you choose, that percent number reveal and you get that percent of ⍟! \
(Related to what amount you decided to use.)

You can choose less than 10 Points. \
If you have less than 10 Points, you get the chance. 

You can go shop and buy the upgrade, shell game background!

## Summary
1. Play Shell game and earn ⍟.
2. Go to the shop and buy something.
3. Play again.

That's all concept of the game.

# Theme

## Topic
```
Your game must adhere to the following theme:
Take One, Leave The Rest
Explain how your game idea works with the theme.
```

## How I get Idea
I thought to take one, leave the rest is similar to Shell Game. \
Original Shell Game playing is like this.

There are 3 cups and a ball
1. Put the ball inside the cup (Player can see where the ball is)
2. Shuffle 3 Cups (Player can't see inside the ball)
3. Player choose the Cup \
When the Player chooses the cup that has the ball, the player wins. \
Else, the host wins.

I change this to all cups have a specific percent! \
There are MAX Percent (Basically, 200%) and all cups get the random percent of that. \
The Player chooses one and reveals the percent. \
And then, the player gets that percent of ⍟.

In this way, the player chooses one cup and other cups percents are all left out. \
So I thought it is related to the theme, and made this!

# Mock Ups
## MainMenu
This is the prototype of MainMenu. \
Put three Buttons to click an icon. \
When Click it turns to gray to know it could be selected.
![mainmenu](GameDesign\0.jpg)

## Shell Game
Actually, there are not Paper prototype, So I will explain with this.

First, Shell Game Scene. \
Here, I use Image to show the current point.

And get value with the input box. \
I thought to make 10 / 50 / 100 point button to get value, \
But when your point is 44 and wants to use all of them? \
It's hard for this algorithm. \
So I made an input box to get value.
![ss](assets\Image\HOWTO\1.png)

I made this Scene to check again. \
Sometimes, we want to use just 10 points but input 100 points as a mistake! \
This is why I made this Scene!

If you click Yes, go to the next page. \
If you click No, go to the previous page and input again!
![ss](assets\Image\HOWTO\2.png)

First, I think to present animation that moves... \
But when I made that, it just teleports to the position.

So I make 3 different cups and shuffle very fast.
![ss](assets\Image\HOWTO\3.png)

I make the background with RGB to know you earn money, or not. \
If you choose the first cup, it would be (r, 0, 0) \
Seconde cup, (0, g, 0) \
Third Cup (0, 0, b)

When it is less than 100%, the text is Italic and blue. \
When it is more than 100%, the text will BOLD and RED!

I want to express the emotion of the player, so I made it like this.
![ss](assets\Image\HOWTO\4.png)

Finally, check points! \
Reveal all percent of cups, and what point you use, what point you will get, and Finally your current point!
![ss](assets\Image\HOWTO\5.png)

## Shop
This is the Shop Showcase prototype. \
From the top, Image / Description / Button

Image is necessary to know what I'm buying. \
I put the upgrade, and background image to know.

And then, short description. \
Like it will increase 10% of MAX Point!

At the bottom draw & mouse is in code, how to write code with button class.
![Shop](GameDesign\1.jpg)

This is a short prototype of position.

Showcase Rect mode is CORNER but the button is CENTER. \
So I need to organize position with writing on paper.
![Position](GameDesign\2.jpg)

## SALVATION
It's the prototype of SALVATION!

I tested the game and it was easy to get lost money. \
So I need to make a function to give chance.

The visual is simple, just click the button. \
But there have various variables and functions.
![First](GameDesign\3.jpg)
![Second](GameDesign\4.jpg)