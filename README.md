# Word-Scramble
Game created for Unit 1 my General Assembly Web Immersive course

##User stories
1. User sees a blank screen with a title.
2. Rules are displayed.
3. Demo is given
4. Pressing Play button reveals the first board. 
5. Board is a grid with letters displayed within the board
    * Each letter of a word is represented within the grid spaces
    * The word is scrambled
    * The user must decide how to connect the letters to solve the puzzle
6. With a simple difficulty level to begin, user begins solving puzzle
7. The user wants to spell a word with all of the letters on the board
8. User looks at the combination of letters and determines where to begin.
    * which letter will the user click on first?
    * user will not know if letter is correct until second letter is clicked.
        * if correct, a line will connect the 2 letters
    * Proceding letter must be connected to first letter
    * Lines can be drawn horizontally, vertically, or diagonally. 
    * Letters cannot be hopped
    * Used letters cannot be used again
9. If letter is incorrect, the line will disappear
    * User will need to begin again. 
10. 3 tries per word
    * 3 tries are represented by 3 symbols on the right side of the page
        * They disappear when an attempt is lost
    * if user cant complete the word in 3 tries it is a game over.
11. When a word is completed, the word is spelled out above the board
12. Each word progresses in difficulty and length

##User Interface
1. Title <h1>
2. Directions button or [help] button <button> <alert>
3. Start button <button>
4. Grid display  <grid>
5. Letters within grid spaces <p>
6. Indented letters (when clicked) <css?>
7. Level number (Roman numerals) <h3>
8. Available “lives” displayed on side <img>
9. Lines connecting letters <lines?>
10. Word displayed upon completion <h2>
11. Game Over display <h1>
12. Footer link to credits and social media <footer> <a>

##Psuedocode
1. User loads page
    1. Dark purple background
    2. Title is displayed at upper 60% in center 
    3. Directions button directly below title to the left
        1. when clicked displays simple rules on the left of page 
        2. sample image displayed
            * unordered list format
    4. Start button to the right of directions button, under title
        1. clicking button activates first board
    5. Credit in footer with links to social
2. First board is displayed
    1. Title is now at top of the screen
        * Header
    2. Grid is displayed in center
        1. Shape of grid depending on size of word
            * 8 letter word = 2x4 grid
            * 9 letter word = 3x3 grid
        2. Letters are spread appropriately across the board
            * proceding letters are touching
        3. Determine the dispersement of letters
    3. Wood grain border
        * light vanilla color background
    4. Bold rounded large font. 
    5. Grid covers 50-60% of screen
    6. Level I is displayed on right side
        * 3 lives (images) displayed in row below Levels
3. When first letter is clicked it is indented
    1. After second letter is clicked correctly
        1. second letter is indented
        2. line is drawn to connect them
    2. When incorrect letter is clicked
        1. image (life) fades from the right 
        2. the lines are erased from the board
        3. board shakes (or signifies a change)
        4. letters are back to surface (Not indented)
    3. Line continues to next correct letter clicked
    4. Once all letters have been clicked correctly
        1. display a change
            1. Sparkles
            2. sound
        2. Replace lives
        3. line changes color
        4. word is displayed
4. Board resets
    1. New word is displayed in a new board
        1. board size changes depending on word
    2. Level number on right side has changed to the current level
    3. Lives are full (3 images)
5. Higher difficulty
    1. words increase in difficulty 
    2. words increase in size
    3. board increases in size
    4. line path increases maneuver difficulty
    5. Eventually multiple words can be on same board. (same theme)
6. If all lives are lost
    1. All of screen is erased (Except header and footer)
    2. "Game Over" is displayed across the screen 
    3. "Try again?" button below Game Over 
        1. resets game to level 1

##Questions
1. How do I get the table to add a row or column when its time change levels?
    1. How do I change the tables items to display new words each level?
    2. How do I get those words from the word bank to display on the tiles?
    3. How do I check to make sure each word is spelled in the correct order?
    4. How do I draw a line between each square
2. How do I remove a life when a try is incorrect?
    1. How do I signal a game over when there are no more lives?
3. How do I display the solved letters on the right?
4. How do I print a line for each letter or the words on the right? to show player how many letters are in each word?