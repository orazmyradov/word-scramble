/*----- functions -----*/ 

function initGame(){
    addClickListener()
    answerDisplay();
    lives.length = 5;
    joinedWordsSeperate.length = 0;
    lettersPlayed.length = 0;
    gameWon = false;
    gameOver = false;
    lifeLoss = false;
    levelDisplay.textContent = "Level: " + (level + 1);
    lifeCreator();

    for(let cube of wordTable){
        cube.style.borderColor = "black";
    }
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

    gameOverScreen();

}
initGame();


//*--- FUNCTIONS ---*//
// initiates next level, changes board to next level
function nextLevel(){
    if(level>=7){
        levelUp();
    }
    level+=1;
    lettersPlayed.length = 0;
    joinedWordsSeperate.length = 0;
    addClickListener()
    answerDisplay();

    lives.length = 5;
    joinedWordsSeperate = [];
    lettersPlayed = [];
    gameWon = false;
    gameOver = false;
    lifeLoss = false;
    levelDisplay.textContent = "Level: " + (level + 1);
    titleDisplay.textContent = "Unscrambler";

    for(let cube of wordTable){
        cube.style.borderColor = "black";
    }
    
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
//checks for win
function checkForWin(){    
    if(lettersPlayed.length >= 9 && joinedWordsSeperate.length !== levelsArray[level].levelAnswers.length){
        lifeLoss = true;
        lifeCount();

    }else{
        for(let i = 0; i < lettersPlayed.length; i++){
    
            if(levelsArray[level].levelAnswers.includes(lettersPlayed.join(''))){  
                joinedWordsSeperate.push(this.lettersPlayed.join(''));
                for(let w = 0; w < blankSpaces.childElementCount; w++){
                    if(this.lettersPlayed.join('').length === blankSpaces.childNodes[w].textContent.length){
                        blankSpaces.childNodes[w].textContent = this.lettersPlayed.join('');
                    }
                }lettersPlayed = [];
            }
        }
        console.log(joinedWordsSeperate);
        
        if(joinedWordsSeperate.length === levelsArray[level].levelAnswers.length){
        titleDisplay.textContent = "Level Complete!";
        setTimeout(nextLevel, 1500);
        }
    }
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
    tableElements.forEach(function(){
        addEventListener('click',letterPush);
    })
}

//changes squares as they are clicked
function letterPush(){
    lettersPlayed.push(event.target.textContent);
    event.target.style.borderColor = "orangeRed";
    event.target.removeEventListener('click', letterPush);
    checkForWin();
    console.log(event.target.textContent);
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
    if(lifeLoss === true){
        lives.pop();
        titleDisplay.textContent = ("Life Lost. " + lives.length + " left.");
    }
}

//function for hint button
function hint(){
    lives.pop();
    alert(levelsArray[level].hint);
}




//after all lives are lost, initiate this function

function gameOverScreen(){
    if(lives.length === 0){
        titleDisplay.textContent = "Game Over"
    };
}
