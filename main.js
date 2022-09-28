drawcircle = "";
drawrec = "";
x = 0;
y = 0;
size = 0;
to_number = 0;


speechRecognition = window.webkitSpeechRecognition;
Recognition = new speechRecognition;

function speak() {
    document.getElementById("status").innerHTML = "Sytem Is Listening Please Speak";
}


function preload() {
    img = loadImage("apple.png");

}

function setup() {
    createCanvas(900, 600);
    screen_width = window.innerWidth;
}
function draw() 
{
    if(drawcircle == "set")
    {
        fill("black");
        image(img, x, y, size, size);
        drawcircle = "";
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        size = Math.floor(Math.random() * 100);
    }

}
recognition.onresult()
{
    to_number = Number(content);
    if(Number.isInteger(to_number))
    {
        drawcircle == "set"
        document.getElementById("status").innerHTML = results + " apple drawn";

        drawcircle = "";
    }
    else
    {
        document.getElementById("status").innerHTML = results + " Is not recognized";
    }
    if(draw_apple=="set")
    {
        for(i = 1; i <= to_number; i + 1) {
            x = Math.floor(Math.random() * 900);
            y = Math.floor(Math.random() * 600);
            size = Math.floor(Math.random() * 100);
            image(img, x, y, size, size);
            document.getElementById("status").innerHTML = " Apples drawn";
            speak();
        }
        
    }
}