import validateBoundaries from './validateBoundaries.js';
import readInput from './input.js';
import cardinalPointsDictionary from './cardinalPointsDictionary.js';

const moveRover = async (inputText) => {
  //Process the input and check for any errors
  let response;
  try {
    response = await readInput(inputText);
    if (response.error) {
      return response;
    }
  } catch (e) {
    return {
      error: true,
      message: e.toString(),
    };
  }

  //Get the processed input, destructure it and make the necessary moves
  let {
    directionCommandsArray,
    boundaries,
    currentCoordinates,
    currentFacing,
  } = response;
  for (let i = 0; i < directionCommandsArray.length; i++) {
    if (directionCommandsArray[i] === 'M') {
      //Check expected position prior the actual move
      let checkExpectedPosition = cardinalPointsDictionary[currentFacing][
        'move'
      ](currentCoordinates.x, currentCoordinates.y);

      //Check if the expected position is not out of the boundry values
      try {
        response = await validateBoundaries(
          checkExpectedPosition,
          currentCoordinates,
          currentFacing,
          boundaries
        );
        if (response.error) {
          return response;
        }
      } catch (e) {
        return {
          error: true,
          message: e.toString(),
        };
      }

      //Assign new position
      currentCoordinates = checkExpectedPosition;
    } else {
      currentFacing =
        cardinalPointsDictionary[currentFacing][directionCommandsArray[i]];
    }
  }
  //Return rover final position
  return {
    error: false,
    currentCoordinates,
    currentFacing,
  };
};

export default moveRover;
