/*----- constants -----*/
var startBtn;
var wordBank = [
    ["EGG", "CHEESE"], //1
    ["SPOON","FORK"], //2
    ["APPLE", "PEAR"], //3
    ["TOAST","JAM"], //4
    ["COFFEE", "TEA"], //5
    ["DOG","FERRET"], //6
    ["SNAKE","FISH"], //7
    ["CHICKEN","HORSE","GOAT"], //8
    ["SHEEP","GOAT","PIG","HEN"], //9
    ["TIGER","LION","PANTHER"], //10
    ["EAGLE","HAWK","VULTURE"], //11
    ["SHARK","DOLPHIN","SEAL"], //12
    ["JAVASCRIPT","IS","NEAT"] //13
]


/*----- app's state (variables) -----*/
var gameWon = false;
var gameOver = false;
var level = 2;

var lifeLoss = false;
var lives = 5;

var lettersPlayed = [];
var joinedWordsSeperate = [];

var wordOne;
var wordTwo;
var wordThree;
var wordFour;

/*----- Levels -----*/
var levelsArray = [
         {board: [
            [t1.textContent = "C"],
            [t2.textContent = "G"],
            [t3.textContent = "E"],
            [t4.textContent = "H"],
            [t5.textContent = "E"],
            [t6.textContent = "G"],
            [t7.textContent = "E"],
            [t8.textContent = "S"],
            [t9.textContent = "E"]
        ],
         hint: "breakfast",
         levelAnswers: ["EGG", "CHEESE"]
        }
        ,
        {board: [
            [t1.textContent = "F"],
            [t2.textContent = "O"],
            [t3.textContent = "S"],
            [t4.textContent = "N"],
            [t5.textContent = "P"],
            [t6.textContent = "R"],
            [t7.textContent = "O"],
            [t8.textContent = "O"],
            [t9.textContent = "K"]
        ],
        hint: "utensils",
        levelAnswers: ["SPOON","FORK"]
        } ,
        {board: [
            [t1.textContent = "E"],
            [t2.textContent = "R"],
            [t3.textContent = "P"],
            [t4.textContent = "L"],
            [t5.textContent = "E"],
            [t6.textContent = "P"],
            [t7.textContent = "A"],
            [t8.textContent = "A"],
            [t9.textContent = "P"]
        ],
         hint: "fruits",
         levelAnswers: ["APPLE", "PEAR"]
            }
]

/*----- functions -----*/

// checks for win


function checkForWin(){    
    if(lettersPlayed.length === 9 && joinedWordsSeperate.length !== levelsArray[level].levelAnswers.length){
        lifeLoss = true;
        console.log("Life lost. Lives left: " + (lives-=1));

    }else{
        for(let i = 0; i < lettersPlayed.length; i++){
    
            if(levelsArray[level].levelAnswers.includes(lettersPlayed.join(''))){  
                joinedWordsSeperate.push(this.lettersPlayed.join(''));
                lettersPlayed = [];
            }
        }
        console.log(joinedWordsSeperate);

        if(joinedWordsSeperate.length === levelsArray[level].levelAnswers.length){
        console.log("Level Complete!")
        }
    }
}







// initiates next level, changes board to next level

function nextLevel(){
    retryLevel();
    lives = 5;
    level = level++;
}

//adjusts lives displayed on screen ** needs to remove image

function lifeCount(){
    if(lifeLoss === true){
        lives -= 1;
        console.log("Life Lost. Lives left: " + lives);
    }
}

// readjusts the board after retry level is clicked

function retryLevel(){
    lettersPlayed = [];
    joinedWordsSeperate = [];
    for(let cube of wordTable){
        cube.addEventListener('click',letterPush);
        cube.style.borderColor = "black";
    }
    answerList.textContent = "";
    answerDisplay();
}

//after all lives are lost, initiate this function

function gameOverScreen(){
    if(lives === 0){
        alert('gameOver');
    };
}
