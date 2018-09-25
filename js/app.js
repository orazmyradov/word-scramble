/*----- cached element references -----*/
var wordTable = document.querySelectorAll('td');
var eggs = document.querySelectorAll('img');

var answerList = document.querySelector('ul');
var fiveLives = document.querySelectorAll('.eggs');


wordOne = answerList.childNodes[0];
wordTwo = answerList.childNodes[1];
wordThree = answerList.childNodes[2];
wordFour = answerList.childNodes[3];

/*----- event listeners -----*/
var retryBtn = document.getElementById('retry').addEventListener('click', retryLevel);

var l1 = document.getElementById('l1').addEventListener('click',letterPush);
var l2 = document.getElementById('l2').addEventListener('click',letterPush);
var l3 = document.getElementById('l3').addEventListener('click',letterPush);
var l4 = document.getElementById('l4').addEventListener('click',letterPush);
var l5 = document.getElementById('l5').addEventListener('click',letterPush);
var l6 = document.getElementById('l6').addEventListener('click',letterPush);
var l7 = document.getElementById('l7').addEventListener('click',letterPush);

var t1 = document.getElementById('t1').addEventListener('click',letterPush);
var t2 = document.getElementById('t2').addEventListener('click',letterPush);
var t3 = document.getElementById('t3').addEventListener('click',letterPush);
var t4 = document.getElementById('t4').addEventListener('click',letterPush);
var t5 = document.getElementById('t5').addEventListener('click',letterPush);
var t6 = document.getElementById('t6').addEventListener('click',letterPush);
var t7 = document.getElementById('t7').addEventListener('click',letterPush);
var t8 = document.getElementById('t8').addEventListener('click',letterPush);
var t9 = document.getElementById('t9').addEventListener('click',letterPush);

/*----- functions -----*/ 
// When first letter is clicked it is indented
//     1. After second letter is clicked correctly
//          Create array of correct words
function answerDisplay(){
    for(let word of levelAnswers){
        let wordArray = word.length;
        let space = "_ "
        let newLi = document.createElement('li');
        newLi.textContent = space.repeat(wordArray);
        answerList.appendChild(newLi);
    }
    
}
answerDisplay();

//click function

function letterPush(){
    lettersPlayed.push(this.textContent);
    this.style.borderColor = "orangeRed";
    this.removeEventListener('click', letterPush)
    checkForWin();
}
//         1. second letter is indented
//         2. line is drawn to connect them
//     2. When incorrect letter is clicked


//         1. image (life) fades from the right 
//         2. the lines are erased from the board
//         3. board shakes (or signifies a change)
//         4. letters are back to surface (Not indented)
//     3. Line continues to next correct letter clicked
//     4. Once all letters have been clicked correctly
//         1. display a change
//             1. Sparkles
//             2. sound
//         2. Replace lives
//         3. line changes color
//         4. word is displayed


/*----- Pseudocode -----*/
// 1. User loads page
//     1. Dark purple background
//     2. Title is displayed at upper 60% in center 
//     3. Directions button directly below title to the left
//         1. when clicked displays simple rules on the left of page 
//         2. sample image displayed
//             * unordered list format
//     4. Start button to the right of directions button, under title
//         1. clicking button activates first board
//     5. Credit in footer with links to social
// 2. First board is displayed
//     1. Title is now at top of the screen
//         * Header
//     2. Grid is displayed in center
//         1. Shape of grid depending on size of word
//             * 8 letter word = 2x4 grid
//             * 9 letter word = 3x3 grid
//         2. Letters are spread appropriately across the board
//             * proceding letters are touching
//         3. Determine the dispersement of letters
//     3. Wood grain border
//         * light vanilla color background
//     4. Bold rounded large font. 
//     5. Grid covers 50-60% of screen
//     6. Level I is displayed on right side
//         * 3 lives (images) displayed in row below Levels
// 3. When first letter is clicked it is indented
//     1. After second letter is clicked correctly
//         1. second letter is indented
//         2. line is drawn to connect them
//     2. When incorrect letter is clicked
//         1. image (life) fades from the right 
//         2. the lines are erased from the board
//         3. board shakes (or signifies a change)
//         4. letters are back to surface (Not indented)
//     3. Line continues to next correct letter clicked
//     4. Once all letters have been clicked correctly
//         1. display a change
//             1. Sparkles
//             2. sound
//         2. Replace lives
//         3. line changes color
//         4. word is displayed
// 4. Board resets
//     1. New word is displayed in a new board
//         1. board size changes depending on word
//     2. Level number on right side has changed to the current level
//     3. Lives are full (3 images)
// 5. Higher difficulty
//     1. words increase in difficulty 
//     2. words increase in size
//     3. board increases in size
//     4. line path increases maneuver difficulty
//     5. Eventually multiple words can be on same board. (same theme)

// 6. If all lives are lost
//     1. All of screen is erased (Except header and footer)
//     2. "Game Over" is displayed across the screen 
//     3. "Try again?" button below Game Over 
//         1. resets game to level 1