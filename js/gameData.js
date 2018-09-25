/*----- constants -----*/
var resetBtn;
var hintBtn;
var startBtn;
var gameOver;
var wordBank = [
    ["egg", "cheese"], //1
    ["spoon","fork"], //2
    ["apple", "pear"], //3
    ["toast","jam"], //4
    ["coffee", "tea"], //5
    ["dog","ferret"], //6
    ["snake","fish"], //7
    ["chicken","horse","goat"], //8
    ["sheep","goat","pig","hen"], //9
    ["tiger","lion","panther"], //10
    ["eagle","hawk","vulture"], //11
    ["shark","dolphin","seal"], //12
    ["Javascript","is","neat"] //13
]


/*----- app's state (variables) -----*/
var level = 1;
var levelAnswers = wordBank[level -1];

var lives = 5;
var wordOne;
var wordTwo;
var wordThree;
var wordFour;
var lettersPlayed = [];
var lettersPlayedJoined = lettersPlayed.join(' ');

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

/*----- functions -----*/



function checkForWin(x){    
    for(let word of levelAnswers){
        if(lettersPlayedJoined.length === word.length){
            console.log('yes');
        }else{
            console.log('no')
        }
    } 
}

function solveWord(){
    if(lettersPlayed.length === this.textContent.length){
        for(let word of levelAnswers){
           let wordCheck = lettersPlayed.join('') };
           if(wordCheck === word){
               console.log("yes");
           }else{
               console.log("no");
           }
        }
}