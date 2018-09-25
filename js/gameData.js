/*----- constants -----*/
var hintBtn;
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
var level = 9;
var levelAnswers = wordBank[level -1];

var lifeLoss = false;
var lives = 5;
var wordOne;
var wordTwo;
var wordThree;
var wordFour;
var lettersPlayed = [];
var joinedWordSeperate = [];

/*----- Levels -----*/
var level1 = [
    [t1.textContent = "C"],
    [t2.textContent = "G"],
    [t3.textContent = "E"],
    [t4.textContent = "H"],
    [t5.textContent = "E"],
    [t6.textContent = "G"],
    [t7.textContent = "E"],
    [t8.textContent = "S"],
    [t9.textContent = "E"]
]

var level2 = [
    [t1.textContent = "F"],
    [t2.textContent = "O"],
    [t3.textContent = "S"],
    [t4.textContent = "N"],
    [t5.textContent = "P"],
    [t6.textContent = "R"],
    [t7.textContent = "O"],
    [t8.textContent = "O"],
    [t9.textContent = "K"]
]

var level9 = []
/*----- functions -----*/



function checkForWin(){    
    for(let i = 0; i < levelAnswers.length; i++){
        
        for(let p = 0; p < lettersPlayed.length; p++){
        
            if(lettersPlayed.length === 9 && joinedWordSeperate.length !== levelAnswers[i]){
                lifeLoss = true;
        
            }else if(lettersPlayed.join('') === levelAnswers[i]){
                joinedWordSeperate.push(lettersPlayed.join(''));
                answerList.childNodes[i +1].textContent = joinedWordSeperate[i];
                lettersPlayed = [];
                console.log("word correct");       
        
            }else{
                console.log("no");
            }
        }                
    }lifeCount();
}

function nextLevel(){
    lives = 5;
    level += 1;

}

function lifeCount(){
    if(lifeLoss === true){
        lives -= 1;
        console.log("Life Lost. Lives left: " + lives);
    }
}

function gameOverScreen(){
    if(lives === 0);
        alert('gameOver');
        
}

function retryLevel(){
    lettersPlayed = [];
    joinedWordSeperate = [];
    wordTable = document.querySelectorAll('td').childNodes.addEventListener('click',letterPush);
}

function nextLevelBtn(){

}

function levelUp(){
    l1.style.visibility = "visible";
    l2.style.visibility = "visible";
    l3.style.visibility = "visible";
    l4.style.visibility = "visible";
    l5.style.visibility = "visible";
    l6.style.visibility = "visible";
    l7.style.visibility = "visible";
}
