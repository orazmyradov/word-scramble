/*----- cached element references -----*/
var wordTable = document.querySelectorAll('td');
var eggs = document.querySelectorAll('img');

var blankSpaces = document.querySelector('ul');
var answerList = document.querySelectorAll('li');
var fiveLives = document.querySelectorAll('.eggs');
var levelDisplay = document.getElementById('levelDisplay');

var hintBtn = document.getElementById('hint');  
var retryBtn = document.getElementById('retry');
hintBtn.addEventListener("click", hint);
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

/*----- functions -----*/ 
function initGame(){
    lives = 5;
    joinedWordsSeperate = [];
    lettersPlayed = [];
    gameWon = false;
    gameOver = false;
    lifeLoss = false;
    levelDisplay.textContent = "Level: " + (level + 1);
    for(let cube of wordTable){
        cube.style.borderColor = "black";
    }
    blankSpaces.textContent = "";
    addClickListener()
    answerDisplay();
    
    t1.textContent = levelsArray[level].board[0];
    t2.textContent = levelsArray[level].board[1];
    t3.textContent = levelsArray[level].board[2];
    t4.textContent = levelsArray[level].board[3];
    t5.textContent = levelsArray[level].board[4];
    t6.textContent = levelsArray[level].board[5];
    t7.textContent = levelsArray[level].board[6];
    t8.textContent = levelsArray[level].board[7];
    t9.textContent = levelsArray[level].board[8];

    l1.textContent = levelsArray[level].board[9];
    l2.textContent = levelsArray[level].board[10];
    l3.textContent = levelsArray[level].board[11];
    l4.textContent = levelsArray[level].board[12];
    l5.textContent = levelsArray[level].board[13];
    l6.textContent = levelsArray[level].board[14];
    l7.textContent = levelsArray[level].board[15];



}
initGame();


//*--- FUNCTIONS ---*//

//checks for win
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
        for(let z = 0; z < answerList.length; z++){
            for(let i = 0; i < joinedWordsSeperate.length; i++){
                if(answerList[z].length === joinedWordsSeperate[i].length){
                    answerList[z].childNodes.textContent = joinedWordsSeperate[i];
                }
            }
            }
        if(joinedWordsSeperate.length === levelsArray[level].levelAnswers.length){
        console.log("Level Complete!");
        nextLevel();
        }
    }
}

// displays answers as spaces
function answerDisplay(){
    for(let word of levelsArray[level].levelAnswers){
        let wordArray = word.length;
        let space = "_ "
        let newLi = document.createElement('li');
        newLi.textContent = space.repeat(wordArray);
        blankSpaces.appendChild(newLi);
    }
}

//changes squares as they are clicked
function letterPush(){
    lettersPlayed.push(event.target.textContent);
    event.target.style.borderColor = "orangeRed";
    event.target.removeEventListener('click', letterPush);
    checkForWin();
}


//function for hint button
function hint(){
    lives -= 1;
    alert(levelsArray[level].hint);
}

// adding click function to all table elements
function addClickListener(){
    var tableElements = [t1,t2,t3,t4,t5,t6,t7,t8,t9,l1,l2,l3,l4,l5,l6,l7];
    tableElements.forEach(function(){
        addEventListener('click',letterPush);
    })
}

// initiates next level, changes board to next level
function nextLevel(){
    lives = 5;
    level+=1;
    lettersPlayed.length = 0;
    joinedWordsSeperate.length = 0;

    answerDisplay();
    initGame();
}
