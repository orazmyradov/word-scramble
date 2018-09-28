/*----- cached element references -----*/
var wordTable = document.querySelectorAll('td');
var eggs = document.querySelectorAll('img');
var livesImages = document.getElementById('lives');
var titleDisplay = document.getElementById('title-display');
var blankSpaces = document.getElementById('blank-spaces');
var answerList = document.querySelectorAll('li');
var levelDisplay = document.getElementById('level-display');
var biggerBoard = document.querySelectorAll('.level-up-invisible');
var rightHalf = document.getElementById('right-half');
var directions = document.createElement('h2');

var quitBtn = document.getElementById('quit');
quitBtn.addEventListener('click', quit);

var hintBtn = document.getElementById('hint');  
hintBtn.addEventListener("click", hint);

var retryBtn = document.getElementById('retry');
retryBtn.addEventListener("click", retryLevel);

var t1 = document.getElementById('t1');
var t2 = document.getElementById('t2');
var t3 = document.getElementById('t3');
var t4 = document.getElementById('t4');
var t5 = document.getElementById('t5');
var t6 = document.getElementById('t6');
var t7 = document.getElementById('t7');
var t8 = document.getElementById('t8');
var t9 = document.getElementById('t9');
var l1 = document.getElementById('l1');
var l2 = document.getElementById('l2');
var l3 = document.getElementById('l3');
var l4 = document.getElementById('l4');
var l5 = document.getElementById('l5');
var l6 = document.getElementById('l6');
var l7 = document.getElementById('l7');

/*----- constants -----*/

var startBtn;

/*----- app's state (variables) -----*/

var gameWon;
var gameOver;
var level = 0;

var lifeLoss;
var lives = [];

var lettersPlayed = [];
var completedWords = [];

/*----- Levels -----*/

var levelsArray = [
         {board: shuffleArray(["C","G","E","H","E","G","E","S","E"]),
         hint: "breakfast",
         levelAnswers: ["EGG", "CHEESE"],
         image: "./images/egg.png"
        } ,
        {board: shuffleArray(["E","R","P","L","E","P","A","A","P"]),
         hint: "fruits",
         levelAnswers: ["APPLE", "PEAR"],
         image: "./images/egg.png"
        } ,
        {board: shuffleArray(["B","T","T","U","A","E","M","R","J"]),
         hint: "spread",
         levelAnswers: ["BUTTER", "JAM"],
         image: "./images/egg.png"
        } ,
        {board: shuffleArray(["A","T","E","E","E","F","O","F","C"]),
         hint: "hot drinks",
         levelAnswers: ["COFFEE", "TEA"],
         image: "./images/uncracked_egg.png"
        } ,
        {board: shuffleArray(["F","O","S","N","P","R","O","O","K"]),
        hint: "utensils",
        levelAnswers: ["SPOON","FORK"],
        image: "./images/uncracked_egg.png"
        } ,
        {board: shuffleArray(["H","S","I","F","S","N","A","K","E"]),
         hint: "pets",
         levelAnswers: ["SNAKE", "FISH"],
         image: "./images/hen.png"
        } ,
        {board: shuffleArray(["D","O","G","F","E","R","R","E","T"]),
         hint: "pets",
         levelAnswers: ["DOG", "FERRET"],
         image: "./images/hen.png"
        } ,
        {board: shuffleArray(["C","H","I","C","K","E","N","H","O","R","S","E","G","O","A","T"]),
         hint: "farm animals",
         levelAnswers: ["CHICKEN", "HORSE", "GOAT"],
         image: "./images/hen.png"
        } ,
        {board: shuffleArray(["T","I","G","E","R","L","I","O","N","P","A","N","T","H","E","R"]),
         hint: "MEOW!",
         levelAnswers: ["TIGER","LION","PANTHER"],
         image: "./images/hen.png"
        } ,
        {board: shuffleArray(["E","A","G","L","E","H","A","W","K","V","U","L","T","U","R","E"]),
         hint: "flyers",
         levelAnswers: ["EAGLE","HAWK","VULTURE"],
         image: "./images/hen.png"
        } ,
        {board: shuffleArray(["S","H","A","R","K","D","O","L","P","H","I","N","S","E","A","L"]),
         hint: "swimmers",
         levelAnswers: ["SHARK","DOLPHIN","SEAL"],
         image: "./images/hen.png"
        } ,
        {board: shuffleArray(["J","A","V","A","S","C","R","I","P","T","I","S","N","E","A","T"]),
         hint: "How I made this game",
         levelAnswers: ["JAVASCRIPT","IS","NEAT"],
         image: "./images/hen.png"
        }
]


/*--- Additional Functions ---*/

// readjusts the board after retry button is clicked
function retryLevel(){
    completedWords.length = 0;
    lettersPlayed.length = 0;
    gameWon = false;
    gameOver = false;
    levelDisplay.textContent = "Level: " + (level + 1);
    for(let cube of wordTable){
        cube.style.borderColor = "black";
    }
    addClickListener()
    answerDisplay();
    boardLetterAssigner();
}

//hint button
function hint(){
    alert(levelsArray[level].hint);
}

//quit button
function quit(){
    level = 0;
    gameWon = false;
    gameOver = false;
    lifeLoss = false;
    addClickListener()
    answerDisplay();
    completedWords.length = 0;
    lettersPlayed.length = 0;
    levelDisplay.textContent = "Level: " + (level + 1);
    boardLetterAssigner();
    lives = [];
    lifeCreator();
}

// Found this example at https://www.w3resource.com/javascript-exercises/javascript-array-exercise-17.php
// Added last minute add a challenge to the board by shuffling it each time played.
function shuffleArray(arrayBoard){
    let list = arrayBoard.length;
    let index;
    let element;
    while(list>0){
        index = Math.floor(Math.random() * list);
        list--;
        element = arrayBoard[list];
        arrayBoard[list] = arrayBoard[index];
        arrayBoard[index] = element;
    }
    return arrayBoard;
}

