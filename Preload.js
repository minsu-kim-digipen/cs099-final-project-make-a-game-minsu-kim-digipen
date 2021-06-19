// Image
let GameImage;
let RoomImage;


let HomeImage;
let PointImage;

let GoldCup_Image;
let SilverCup_Image;
let BronzeCup_Image;

let ShopImage;

// Sound
let Background_Music;
let Room_Music;
let SPECIAL;

let Next_Howto;

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

    // Load Sound
    Background_Music = loadSound('assets/Sound/BGM/Mr.ruiZ - Beach Ballin.mp3');    // Basic BGM
    Room_Music = loadSound('assets/Sound/BGM/Our Leaves in the Breeze.mp3');        // Room BGM
    SPECIAL = loadSound('assets/Sound/BGM/Universe.mp3');                           // SALVATION BGM

    Next_Howto = loadSound('assets/Sound/SFX/Next-howto.wav');                      // How to SFX
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
}

