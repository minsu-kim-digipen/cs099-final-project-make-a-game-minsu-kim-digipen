// Name       : Minsu Kim
// Assignment : Make a Game
// Course     : CS099
// Spring 2021

// Icons
let CardImage;

let GameImage;
let RoomImage;


let HomeImage;
let ShopImage;
let PointImage;

let Colored_WingPoint_Image;
let Black_WingPoint_Image;

// Select
let GoldCup_Image;
let SilverCup_Image;
let BronzeCup_Image;

// Background
let Click_Background;
let Shop_Background;
let SALVATION_Background;
let GAMEOVER_Background;

let Brick_Room_Image;
let LikeOcean_Room_Image;
let Poker_Room_Image;
let Fantasy_Room_Image;

// Shop
let Upgrade_Image;

// Sound
let Background_Music;
let Room_Music;
let SPECIAL;

let Next_Howto_SFX;
let Select_SFX;
let Alert_SFX;
let Input_SFX;
let Purchase_SFX;
let Equip_SFX;
let UnEquip_SFX;

let HOWTO0_Image;
let HOWTO1_Image;
let HOWTO2_Image;
let HOWTO3_Image;
let HOWTO4_Image;
let HOWTO5_Image;
let HOWTO6_Image;
let HOWTO7_Image;

function preload()
{
    // Load Image
    GameImage = loadImage('assets/Image/game-controller.png');
    RoomImage = loadImage('assets/Image/room.png');

    HomeImage = loadImage( 'assets/Image/home.png' );
    PointImage = loadImage( 'assets/Image/point.png' );

    GoldCup_Image = loadImage('assets/Image/Gold_Cup.png');
    SilverCup_Image = loadImage('assets/Image/Silver_Cup.png');
    BronzeCup_Image = loadImage('assets/Image/Bronze_Cup.png');

    ShopImage = loadImage('assets/Image/shop.png');

    // Background
    Shop_Background = loadImage('assets/Image/background/Shop_Background.jpg');
    Click_Background = loadImage('assets/Image/background/Click_Anywhere.jpg')

    Upgrade_Image = loadImage('assets/Image/shop/upgrade.png');

    // Load Sound
    Background_Music = loadSound('assets/Sound/BGM/bensound-allthat.mp3');    // Basic BGM
    Room_Music = loadSound('assets/Sound/BGM/Our Leaves in the Breeze.mp3');        // Room BGM
    SPECIAL = loadSound('assets/Sound/BGM/Universe.mp3');                           // SALVATION BGM

    Next_Howto_SFX = loadSound('assets/Sound/SFX/Next-howto.wav');                      // How to SFX
    Select_SFX = loadSound('assets/Sound/SFX/Select 50.wav');
    Alert_SFX = loadSound('assets/Sound/SFX/Warning 06.wav');
    Input_SFX = loadSound('assets/Sound/SFX/Confirm 42.wav');
    Purchase_SFX = loadSound('assets/Sound/SFX/Purchase_sound.wav');

    Brick_Room_Image = loadImage('assets/Image/background/Shop/Brick.jpg');
    LikeOcean_Room_Image = loadImage('assets/Image/background/Shop/LikeOcean.jpg');
    Poker_Room_Image = loadImage('assets/Image/background/Shop/Poker.jpg');
    Fantasy_Room_Image = loadImage('assets/Image/background/Shop/Fantasy.jpg');

    Equip_SFX = loadSound('assets/Sound/SFX/Select 19.wav');
    UnEquip_SFX = loadSound('assets/Sound/SFX/Select 18.wav');

    SALVATION_Background = loadImage('assets/Image/background/SALVATION.png');

    Colored_WingPoint_Image = loadImage('assets/Image/Colored Coin Wing.png');
    Black_WingPoint_Image = loadImage('/assets/Image/Black Coin WIng.jpg');

    GAMEOVER_Background = loadImage('/assets/Image/background/GAMEOVER.png');

    CardImage = loadImage('assets/Image/card-game.png');

    HOWTO0_Image = loadImage('assets/Image/HOWTO/0.png');
    HOWTO1_Image = loadImage('assets/Image/HOWTO/1.png');
    HOWTO2_Image = loadImage('assets/Image/HOWTO/2.png');
    HOWTO3_Image = loadImage('assets/Image/HOWTO/3.png');
    HOWTO4_Image = loadImage('assets/Image/HOWTO/4.png');
    HOWTO5_Image = loadImage('assets/Image/HOWTO/5.png');
    HOWTO6_Image = loadImage('assets/Image/HOWTO/6.png');
    HOWTO7_Image = loadImage('assets/Image/HOWTO/7.png');
}

// Before Change Music, Please put this inside
function ResetAllMusic()
{
    Background_Music.stop();
    Room_Music.stop();
    SPECIAL.stop();
}

function ChangeVolume()
{
    Background_Music.setVolume(Sound_Slider.value());
    Room_Music.setVolume(Sound_Slider.value());
    SPECIAL.setVolume(Sound_Slider.value());

    Next_Howto_SFX.setVolume(Sound_Slider.value() + 0.1);
    Select_SFX.setVolume(Sound_Slider.value() + 0.1);
    Alert_SFX.setVolume(Sound_Slider.value() + 0.1);
    Input_SFX.setVolume(Sound_Slider.value() + 0.1);
    Purchase_SFX.setVolume(Sound_Slider.value() + 0.1);
    Equip_SFX.setVolume(Sound_Slider.value() + 0.1);
    UnEquip_SFX.setVolume(Sound_Slider.value() + 0.1);
}

