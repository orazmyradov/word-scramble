/*----- cached element references -----*/
var wordTable = document.querySelectorAll('td');
var eggs = document.querySelectorAll('img');
var livesImages = document.getElementById('lives');

var titleDisplay = document.getElementById('title-display');

var blankSpaces = document.getElementById('blank-spaces');
var answerList = document.querySelectorAll('li');
var levelDisplay = document.getElementById('level-display');

var biggerBoard = document.querySelectorAll('.level-up-invisible');

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
         {board: ["C","G","E","H","E","G","E","S","E","2"],
         hint: "breakfast",
         levelAnswers: ["EGG", "CHEESE"]
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
        {board: ["F","O","S","N","P","R","O","O","K"],
        hint: "utensils",
        levelAnswers: ["SPOON","FORK"]
        } ,
        {board: ["H","S","I","F","S","N","A","K","E"],
         hint: "pets",
         levelAnswers: ["SNAKE", "FISH"]
        } ,
        {board: ["D","O","G","F","E","R","R","E","T"],
         hint: "pets",
         levelAnswers: ["DOG", "FERRET"]
        } ,
        {board: ["C","H","I","C","K","E","N","H","O","R","S","E","G","O","A","T"],
         hint: "farm animals",
         levelAnswers: ["CHICKEN", "HORSE", "GOAT"],
        } ,
        {board: ["S","H","E","E","P","G","O","A","T","R","O","O","S","T","E","R"],
         hint: "farm animals",
         levelAnswers: ["SHEEP","GOAT","ROOSTER"],
        }
]

var wordBank = [
    ["EGG", "CHEESE"], //1
    ["SPOON","FORK"], //2
    ["APPLE", "PEAR"], //3
    ["BUTTER","JAM"], //4
    ["COFFEE", "TEA"], //5
    ["SNAKE","FISH"], //6
    ["DOG","FERRET"], //7
    ["CHICKEN","HORSE","GOAT"], //8
    ["SHEEP","GOAT","ROOSTER"], //9
    ["TIGER","LION","PANTHER"], //10
    ["EAGLE","HAWK","VULTURE"], //11
    ["SHARK","DOLPHIN","SEAL"], //12
    ["JAVASCRIPT","IS","NEAT"] //13
]








