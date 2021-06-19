// Image
let HomeImage;
let PointImage;

let GoldCup_Image;
let SilverCup_Image;
let BronzeCup_Image;

// Sound
let Background_Music;
let Room_Music;

function preload()
{
    // Load Image
    HomeImage = loadImage( 'assets/Image/home.png' );
    PointImage = loadImage( 'assets/Image/point.png' );

    GoldCup_Image = loadImage('assets/Image/Gold_Cup.png');
    SilverCup_Image = loadImage('assets/Image/Silver_Cup.png');
    BronzeCup_Image = loadImage('assets/Image/Bronze_Cup.png');

    // Load Sound
    Background_Music = loadSound('assets/Sound/Mr.ruiZ - Beach Ballin.mp3');
    Room_Music = loadSound('assets/Sound/Our Leaves in the Breeze.mp3')
}

// Before Change Music, Please put this inside
function ResetAllMusic()
{
    Background_Music.stop();
    Room_Music.stop();
}

function ChangeVolume()
{
    Background_Music.setVolume(Sound_Slider.value());
    Room_Music.setVolume(Sound_Slider.value());
}

