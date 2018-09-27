/*----- constants -----*/
var startBtn;
var wordBank = [
    ["EGG", "CHEESE"], //1
    ["SPOON","FORK"], //2
    ["APPLE", "PEAR"], //3
    ["BUTTER","JAM"], //4
    ["COFFEE", "TEA"], //5
    ["SNAKE","FISH"], //6
    ["DOG","FERRET"], //7
    ["CHICKEN","HORSE","GOAT"], //8
    ["SHEEP","GOAT","PIG","HEN"], //9
    ["TIGER","LION","PANTHER"], //10
    ["EAGLE","HAWK","VULTURE"], //11
    ["SHARK","DOLPHIN","SEAL"], //12
    ["JAVASCRIPT","IS","NEAT"] //13
]


/*----- app's state (variables) -----*/

var gameWon;
var gameOver;
var level = 0;

var lifeLoss;
var lives;

var lettersPlayed = [];
var joinedWordsSeperate = [];

/*----- Levels -----*/
var levelsArray = [
         {board: ["C","G","E","H","E","G","E","S","E"],
         hint: "breakfast",
         levelAnswers: ["EGG", "CHEESE"]
        } ,
        {board: ["F","O","S","N","P","R","O","O","K"],
        hint: "utensils",
        levelAnswers: ["SPOON","FORK"]
        } ,
        {board: ["E","R","P","L","E","P","A","A","P"],
         hint: "fruits",
         levelAnswers: ["APPLE", "PEAR"]
        } ,
        {board: ["B","T","T","U","A","E","M","R","J"],
         hint: "spread",
         levelAnswers: ["BUTTER", "JAM"]
        } ,
        {board: ["A","T","E","E","E","F","O","F","C"],
         hint: "hot drinks",
         levelAnswers: ["COFFEE", "TEA"]
        } ,
        {board: ["H","S","I","F","S","N","A","K","E"],
         hint: "animals",
         levelAnswers: ["SNAKE", "FISH"]
        }
]

/*----- functions -----*/


//adjusts lives displayed on screen ** needs to remove image

function lifeCount(){
    if(lifeLoss === true){
        lives -= 1;
        console.log("Life Lost. Lives left: " + lives);
    }
}

// readjusts the board after retry level is clicked

function retryLevel(){
     if(joinedWordsSeperate.length !== levelsArray[level].levelAnswers.length){
        lettersPlayed.length = 0;
        joinedWordsSeperate.length = 0;
        for(let cube of wordTable){
            cube.addEventListener('click',letterPush);
            cube.style.borderColor = "black";
        }
        blankSpaces.textContent = "";
        answerDisplay();
}
}

//after all lives are lost, initiate this function

function gameOverScreen(){
    if(lives === 0){
        alert('gameOver');
    };
}

//increases board size
function levelUp(){
    var tableElements = [t1,t2,t3,t4,t5,t6,t7,t8,t9,l1,l2,l3,l4,l5,l6,l7];
    tableElements.forEach(function(){
        style.visibility = "visible";
    })
}