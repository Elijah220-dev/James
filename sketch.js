var gameState = "story";
var desertImg, desert;
var cobraImg, cobra;
var heartImg, heart;
var jamesImg, james;
var beetleImg, beetle;
var cobraGroup, beetleGroup, lifeGroup;
var begin,  beginImg;

function preload()
{
    desertImg = loadImage("desertImg.png");
    cobraImg = loadImage("cobra.png");
    heartImg = loadImage("heart.png");
    jamesImg = loadImage("James.png");
    beetleImg = loadImage("beetle.png");
    // load image for "begin" game.
}

function setup()
{
    createCanvas(windowWidth,windowHeight) 
    desert = createSprite(width/2, height/2, width, height);
    desert.addImage(desertImage);
    james = createSprite(500,300,20,20);
    james.addImage(jamesImg);
}
// a line of code that's written in function draw() to show all the sprite objects on the screen - drawSprites()
function draw()
{
    background("black");

    if(gameState === "story")
    {
        bg.visible = false;
        james. x = 200;
        fill("white");
        textSize(20)      // font size
        text("James and Jaylyn are two good friends who lost each other during a trip.",width/2 - 300,200);
        text("James is stuck in a desert alone and there are multiple cobras,", 500,250);
        text("beetles and poisonous trees that obstruct him from leaving the desert",500,300)
        text("James needs to dodge these obstacles that spawn randomlyand get out of the forest so he can get to Jaylyn. ",500,350)
        text("He loses his health everytime a snake or cobra get to him or when he is tricked by a tree.",500,400);
        text("Player1 will use W A S D to help james. Player2 will use the arrow keys to help jaylyn",500 ,450)
        text("Press the spacebar to continue",500,500)
        
        
        if9(keyDown("space"))
        {
         gameState = "jamesPlay";
        }

        //begin = createSprite(x,y,width,height);
        // add the "beginImg" to the begin sprite. function to be used: addImage()

    }
    
    if(gameState === jamesPlay)
    {
        // James can move around with W,A,S,D keys. When james is playing the game, he will have to collect hearts to keep his energy level high.
        // The hearts will spawn randomly.
        
        


        drawSprites();
    }

}

function spawnLife()
{



}

function spawnCobras()
{

}

function spawnBeetles()
{

}

function spawnTree()
{

}