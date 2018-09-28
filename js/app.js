/*----- Initialize Game Function -----*/ 

function initGame(){
    gameWon = false;
    gameOver = false;
    lifeLoss = false;
    addClickListener()
    answerDisplay();
    completedWords.length = 0;
    lettersPlayed.length = 0;
    levelDisplay.textContent = "Level: " + (level + 1);
    lifeCreator();
    boardLetterAssigner();
    gameOverScreen();

}
initGame();



//*--- FUNCTIONS ---*//

// initiates next level, changes board to next level
function nextLevel(){
    level+=1;
    lettersPlayed.length = 0;
    completedWords.length = 0;
    addClickListener()
    answerDisplay();

    lives.length = 5;
    completedWords = [];
    lettersPlayed = [];
    gameWon = false;
    gameOver = false;
    lifeLoss = false;
    levelDisplay.textContent = "Level: " + (level + 1);
    titleDisplay.textContent = "Unscrambler";

    for(let cube of wordTable){
        cube.style.borderColor = "black";
    }
    levelUp();
    boardLetterAssigner();
}

//checks for win
function checkForWin() {
    var enteredWord = lettersPlayed.join('');
    var correct = false;
    console.log("this is what they've typed so far:", enteredWord);
    levelsArray[level].levelAnswers.forEach(function(item) {
        if (item.includes(enteredWord)) {
            correct = true;
        }
    });

    if (!correct) {
        lives.shift();
        livesImages.removeChild(livesImages.lastChild);
        lettersPlayed.length = 0;
        completedWords.length = 0;
        addClickListener();
        answerDisplay();
        console.log("bad letter");
    };

    if(levelsArray[level].levelAnswers.includes(lettersPlayed.join(''))){
        completedWords.push(this.lettersPlayed.join(''));
        for(let w = 0; w < blankSpaces.childElementCount; w++){
            if(this.lettersPlayed.join('').length === blankSpaces.childNodes[w].textContent.length){
                blankSpaces.childNodes[w].textContent = this.lettersPlayed.join('');
            }
        }
        lettersPlayed.length = 0;
    };

    console.log(completedWords);
    
    if(completedWords.length === levelsArray[level].levelAnswers.length){
    titleDisplay.textContent = "Level Complete!";
    setTimeout(nextLevel, 1500);
    }
    //}
}

// displays answers as spaces
function answerDisplay(){
    blankSpaces.textContent = "";
    for(let word of levelsArray[level].levelAnswers){
        let wordArray = word.length;
        let space = "_"
        let newLi = document.createElement('li');
        newLi.textContent = space.repeat(wordArray);
        blankSpaces.appendChild(newLi);
    }
}

// adding click function to all table elements
function addClickListener(){
    var tableElements = [t1,t2,t3,t4,t5,t6,t7,t8,t9,l1,l2,l3,l4,l5,l6,l7];
    tableElements.forEach(function(element){
        element.addEventListener('click',letterPush);
        element.style.borderColor = "black";
    })
}

//changes squares as they are clicked
function letterPush(){
    lettersPlayed.push(event.target.textContent);
    event.target.style.borderColor = "orangeRed";
    event.target.removeEventListener('click', letterPush);
    checkForWin();
}


//life creator 
function lifeCreator (){
    for(let i = 0; i < 5; i++){
        let eggs = document.createElement('img');
        eggs.src = "./images/egg.png";
        lives.push(eggs);
        livesImages.appendChild(eggs);
        }
}

//adjusts lives displayed on screen ** needs to remove image
function lifeCount(){
    titleDisplay.textContent = ("Life Lost. " + lives.length + " left.");
    lettersPlayed.length = 0;
    completedWords.length=0;
}

// readjusts the board after retry level is clicked

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

//function for hint button
function hint(){
    alert(levelsArray[level].hint);
}

//increases board size
function levelUp(){
    if(level >= 7 ){
        for(let i = 0; i < biggerBoard.length; i++){
            biggerBoard[i].className = "level-up-bigger";
        }
    }    
}

// applies appropriate letters to grid based on level
function boardLetterAssigner(){
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



//after all lives are lost, initiate this function

function gameOverScreen(){
    if(lives.length === 0){
        titleDisplay.textContent = "Game Over";
    }else if(lives.length >= 1)
        titleDisplay.textContent = "Unscrambler";
}

