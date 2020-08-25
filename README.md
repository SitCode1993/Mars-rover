# Mars Rover - Challenge

> Rovers have been sent to Mars to survey the terrain and i have been tasked with creating their naviagtion system.

## Usage

The program consists of 4 major modules .i.e cardinalPointsDictionary, rover.js, input.js and validateBoundaries.js.

### cardinalPointsDictionary.js
- This file is essentially an object lateral that stores the permutations of the rover movement based on the given commands.

### rover.js

- This is the entry function that accepts the input file (mainInput.txt) and have all the consolidated logic through the calls of input.js and validateBoundaries.js. It first calls readInput function in the input.js file to process the text coming from mainInout.txt then using the processed inputs it checks if the command is 'M', if true it then checks if the move is within the boundaries using validateBoundaries.js, if the move is outside the boundaries it throws an error and prints it in the console, if the move is within the boundaries it then moves the rover and go to the next command.
- it returns an object with key properties error, message(if error=true) and the final positions (currentCoordinates,
  currentFacing) if error=false.

### input.js

- Accepts the text input and validates it, checks the format -:
  Example:
  8 9
  1 4 E
  MLLRMMMLML

- It returns an object with key properties error, message(if error=true) and the processed input (directionCommandsArray,
  boundaries,
  currentCoordinates,
  currentFacing) if error=false.

### validateBoundaries.js

- Accepts the processed input values from input.js along with the next move coordinates.
- it checks if the next move is within the boundaries then retrun an object with the response.
- It returns an object with key properties error, message(if error=true) and just error=false if the next mpve's coordinates are within.

## Install Dependencies

npm install

## Run App

include the rover commands in the 'mainInput.txt' file under the root folder

## This command will print the results on your console.

npm start

## Run the tests

- The tests include tests all the functionality and logic of the program, the tests are divided as per the above modularization .i.e. input.test.js , validateBoundaries.test.js and rover.test.js respectively.

- To run the tests, run the command below.

npm test
