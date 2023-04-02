# GENERATORS
- The basic version will have a 9X9 grid with numerical values from 0 to 9.
- On any given row and column, a number can display once
-  

# Pseudo code for sudoku generation
  
* Build a 9X9 array to generate unique numbers 
* Build a random number between 0 & 9 everytime for each 3X3 grid
* Build a validator to make sure the numbers are unique across all 
  rows & columns
* Render the grid with all the numbers generated
* Build a generator to get rid of few cell values for the puzzle  
* Finish unit testing

# Sample grid for reference

 * 1 2 3 4 5 6 7 8 9
 * 7 8 9 1 2 3 4 5 6
 * 4 5 6 7 8 9 1 2 3
 * 2 3 4 5 6 7 8 9 1
 * 5 6 7 8 9 1 2 3 4
 * 8 9 1 2 3 4 5 6 7
 * 3 4 5 6 7 8 9 1 2
 * 6 7 8 9 1 2 3 4 5
 * 9 1 2 3 4 5 6 7 8
