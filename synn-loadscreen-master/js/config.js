var config = 
{    
    /*
        Do we want to show the image?
        Note that imageSize still affects the size of the image and where the progressbars are located.
    */
    enableImage: true,

    /* 
        Relative path the the logo we want to display.
    */
    image: "img/logo.png",

    /*
        How big should the logo be?
        The values are: [width, height].
        Recommended to use square images less than 1024px.
    */
    imageSize: [512, 512],

    /*
        Define the progressbar type
            0 = Single progressbar
            1 = Multiple progressbars
            2 = Collapsed progressbars
     */
    progressBarType: 2,

    /*
        Here you can disable some of progressbars.
        Only applys if `singleProgressbar` is false.
    */
    progressBars:
    {
        "INIT_CORE": {
            enabled: false, //NOTE: Disabled because INIT_CORE seems to not get called properly. (race condition).
        },

        "INIT_BEFORE_MAP_LOADED": {
            enabled: true,
        },

        "MAP": {
            enabled: true,
        },

        "INIT_AFTER_MAP_LOADED": {
            enabled: true,
        },

        "INIT_SESSION": {
            enabled: true,
        }
    },

    /*
        Loading messages will be randomly picked from the array.
        The message is located on the left side above the progressbar.
        The text will slowly fade in and out, each time with another message.
        You can use UTF-8 emoticons inside loading messages! 
    */
    loadingMessages: 
    [
        "Pripojuji te... &#x1f40c;",
        "Discord: https://discord.gg/7MeGZme&#x1f40c;",
        "Dekujeme ze u nas hrajete.... &#x1f40c; &#x1f528;",
        "Caste updaty! &#x1f40c; &#x1f462;",
        "Pripravuji.. &#x1f41a.",
        "Vysoke FPS! &#x1f9e0;",
        "Vase frakce. &#x1f956;",
        "Plno zabavy! &#x1f374;",
    ],

    /*
        Rotate the loading message every 5000 milliseconds (default value).
    */
    loadingMessageSpeed: 5 * 1000,

    /*
        Array of music id's to play in the loadscreen.
        Enter your youtube video id's here. In order to obtain the video ID
        Take whats after the watch?v= on a youtube link.
        https://www.youtube.com/watch?v=<videoid>
        Do not include the playlist id or anything, it should be a 11 digit code.
        
        Do not use videos that:
            - Do not allow embedding.
            - Copyrighted music (youtube actively blocks this).
    */
    music:
    [
        "519pqyYjjS8", "AToJekZdLIE", "AR10-xA0Ruw", "zOMFGuM5xww",
        "8xlDwukxjnA", "2f44lJxlNvY", "JqLz-cSTU28", "yCuOucUgB0k",
        "lcU-iE7wcOg", "DcfVqJV8-YM", "-nk5ig_1BIA", "NutKfA7C0cU",
        "VjbYSh4jUfs", "AlXfbVpDUdo", "Ccsh_-Cucl4", "9-zK_5gn4_s",
        "pFBT5x5nFFw", "nVaWJwU-sG0", "egtI2xqg75E", "_qj2WaB2ga0",
        "0rugSsNsJI4", "85UQsB9odZQ", "jThj09L61xM", "hNgiUv0fZZk"
    ],


    /*
        Set to false if you do not want any music.
    */
    enableMusic: true,

    /*
        Default volume for the player. Please keep this under 50%, to not blowout someones eardrums x)
     */
    musicVolume: 20,

    /*
        Should the background change images?
        True: it will not change backgrounds.
        False: it will change backgrounds.
    */
    staticBackground: false,
    
    /*
        Array of images you'd like to display as the background.
        Provide a path to a local image, using images via url is not recommended.
    */
    background: 
    [
        "img/bg1.jpg",
        "img/bg2.jpg",
        "img/bg3.jpg",
        "img/bg4.jpg",
        "img/bg5.jpg",
        "img/bg6.jpg",
        "img/bg7.jpg",
        "img/bg8.jpg",
    ],

    /*
        Time in milliseconds on how fast the background
        should swap images.
     */
    backgroundSpeed: 10 * 1000,
    backgroundStyle: "browse",
}
