/*----- cached element references -----*/
var wordTable = document.querySelectorAll('td');
var eggs = document.querySelectorAll('img');

var answerList = document.querySelector('ul');
var fiveLives = document.querySelectorAll('.eggs');

var hintBtn = document.getElementById('hint');
var levelDisplay = document.getElementById('levelDisplay').textContent = "Level: " + (level + 1);

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

hintBtn.addEventListener("click", hint);

/*----- functions -----*/ 
function initGame(){

}
// displays answers as spaces
function answerDisplay(){
    for(let word of levelsArray[level].levelAnswers){
        let wordArray = word.length;
        let space = "_ "
        let newLi = document.createElement('li');
        newLi.textContent = space.repeat(wordArray);
        answerList.appendChild(newLi);
    }
    
}
answerDisplay();

//changes squares as they are clicked
function letterPush(){
    lettersPlayed.push(this.textContent);
    this.style.borderColor = "orangeRed";
    this.removeEventListener('click', letterPush);
    checkForWin();
}

//increases board size
function levelUp(){
    // l1.style.visibility = "visible";
    // l2.style.visibility = "visible";
    // l3.style.visibility = "visible";
    // l4.style.visibility = "visible";
    // l5.style.visibility = "visible";
    // l6.style.visibility = "visible";
    // l7.style.visibility = "visible";
    wordTable.style.visibility = "visible";
}

//function for hint button
function hint(){
    lives -= 1;
    alert(levelsArray[level].hint);
}
