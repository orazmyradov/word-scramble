# Word-Scramble

##User Guide
1. User sees Level 1 board.
2. Rules are displayed.
3. Board is a grid with letters displayed within the board
    * Each letter of a word is represented within the grid spaces
    * The word is scrambled
    * The user must decide how to connect the letters to solve the puzzle
6. With a simple difficulty level to begin, user begins solving puzzle
7. The user wants to spell a word with all of the letters on the board
8. User looks at the combination of letters and determines where to begin.
    * which letter will the user click on first?
    * user will not know if letter is correct until second letter is clicked.
        * if correct, letter will remain marked.
    * Used letters cannot be used again
9. If letter is incorrect, the marking will disappear
    * User will need to begin again. 
    * user will lose a life
10. If user cant complete the grid in the amount of lives available it is a game over.
11. When a word is completed, the word is spelled out to the right
12. Each level progresses in difficulty and length

[Imgur](https://i.imgur.com/6fvKTFE.png)
* Level 1 game board.

[Imgur](https://i.imgur.com/L5fVayt.png)
* Level 1 game board with a word solved.

[Imgur](https://i.imgur.com/Jk3YQr4.png)
* Level 2 game board with lives lost.

##User Interface
1. Title <h1>
2. Directions 
3. Grid display  <grid>
4. Letters within grid spaces <p>
5. Level number (Roman numerals) <h3>
6. Available “lives” displayed on side <img>
7. Word displayed upon completion <h2>
8. Game Over display <h1>

##Psuedocode
1. User loads page
    1. Dark purple background
    2. Title is att top center 
    3. Directions directly below board to the left
2. First board is displayed
    1. Grid is displayed on left
        1. Shape of grid depending on size of word
            * 8 letter word = 2x4 grid
            * 9 letter word = 3x3 grid
        2. Letters are spread appropriately across the board
            * randomized
    2. Level I is displayed on right side
        * 3 lives (images) displayed in row below Levels
3. When first letter is clicked it is indented
    1. After second letter is clicked marked
        1. second letter follows
    2. When incorrect letter is clicked
        1. image (life) erased from the right 
        4. letters are back to surface (Not marked)
    3. Once all letters have been clicked correctly
        1. word is displayed
        2. "Level Complete" is shown
4. Board resets
    1. New words are displayed in a new board
        1. board size changes depending on word
    2. Level number on right side has changed to the current level
5. Higher difficulty
    1. words increase in difficulty 
    2. words increase in size
    3. board increases in size
    4. Eventually multiple words can be on same board. (same theme)
6. If all lives are lost
    1. "Game Over" is displayed across the screen 
        1. resets game to level 1

##Questions
1. How do I get the table to add a row or column when its time change levels?
    * This didnt cause me as much trouble as other problems. I simply implemented the use of className. 

2. How do I remove a life when a try is incorrect?
    1. How do I signal a game over when there are no more lives?

3. How do I display the solved letters on the right?
    * This took a bit of time to match the correct spelled word to the created DOM element on the right

4. How do I print a line for each letter or the words on the right? to show player how many letters are in each word?
    * One of my first tasks while creating the board was to display blank spaces for the letters of each word. 
    * This was my first logical approach in the game

5. How do I check for a winning match or a mispelled word?
    * Getting the win algorithm took multiple takes. Each one invloving much different approaches. 
    * This was definetly the most difficult aspect of the game, as it can be when creating any game. 
    * Once this problem was out of the way, all tasks seemed more attainable.

