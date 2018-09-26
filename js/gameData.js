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
var level = 0;

var lifeLoss = false;
var lives = 5;

var lettersPlayed = [];
var joinedWordSeperate = [];

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
        }//,
        // // {board: [
        // //     [t1.textContent = "F"],
        // //     [t2.textContent = "O"],
        // //     [t3.textContent = "S"],
        // //     [t4.textContent = "N"],
        // //     [t5.textContent = "P"],
        // //     [t6.textContent = "R"],
        // //     [t7.textContent = "O"],
        // //     [t8.textContent = "O"],
        // //     [t9.textContent = "K"]
        // // ],
        // // hint: "utensils",
        // // levelAnswers: ["SPOON","FORK"]
        // // },
        // // {board: [
        // //     [t1.textContent = "A"],
        // //     [t2.textContent = "P"],
        // //     [t3.textContent = "P"],
        // //     [t4.textContent = "L"],
        // //     [t5.textContent = "E"],
        // //     [t6.textContent = "P"],
        // //     [t7.textContent = "E"],
        // //     [t8.textContent = "A"],
        // //     [t9.textContent = "R"]
        // // ],
        // //  hint: "fruits",
        // //  levelAnswers: ["APPLE", "PEAR"]
        // //     }
]

/*----- functions -----*/



function checkForWin(){    
    for(let i = 0; i < levelsArray[level].levelAnswers; i++){
        
        for(let p = 0; p < lettersPlayed.length; p++){
        
            if(lettersPlayed.length === 9 && joinedWordSeperate.length !== levelsArray[level].levelAnswers.length){
                lifeLoss = true;

            }else if(lettersPlayed.join('') === levelsArray[level].levelAnswers[p]){
                joinedWordSeperate.push(lettersPlayed.join(''));
                answerList.childNodes[i].textContent = joinedWordSeperate[i];
                lettersPlayed = [];
                console.log("word correct");       
                if(joinedWordSeperate.length === levelsArray[level].levelAnswers.length){
                    nextLevel();
                }
            }else{
                console.log("no");
            }
        }                
    }lifeCount();
}



function nextLevel(){
    retryLevel();
    lives = 5;
    level = level++;
    levelDisplay.textContent = "Level: " + level++;
}


function lifeCount(){
    if(lifeLoss === true){
        lives -= 1;
        console.log("Life Lost. Lives left: " + lives);
    }
}

function retryLevel(){
    lettersPlayed = [];
    joinedWordSeperate = [];
    for(let cube of wordTable){
        cube.addEventListener('click',letterPush);
        cube.style.borderColor = "black";
    }
    answerList.textContent = "";
    answerDisplay();
}

function gameOverScreen(){
    if(lives === 0);
        alert('gameOver');
        
}
