const readInput = async (input) => {
  //Check if input is not empty
  if (!input) {
    return {
      error: true,
      message: 'Please provide input.',
    };
  }

  //Check input format (input must be a string)
  if (typeof input !== 'string') {
    return {
      error: true,
      message: 'Please provide the input as a string.',
    };
  }

  //Split the string into lines and check if all values are provided ( 3 lines of text)
  //1st line === Boundaries
  //2nd line === Current rover position and facing cast
  //3rd line === Direction commands
  input = input.split('\n');
  let compassArray = ['W', 'E', 'S', 'N'];
  let directionCommands = ['M', 'L', 'R'];

  if (
    input.length !== 3 || //Validates if theres 3 lines
    input[0].split(' ').length !== 2 || // validates if the first line has two values separated by an empty space
    input[1].split(' ').length !== 3 || // validates if the second line has three values separated by an empty space
    compassArray.indexOf(input[1].split(' ')[2]) === -1 // Checks if the 3rd variable given in the second line is part of the compass points .i.e (N, W, E or S)
  ) {
    return {
      error: true,
      message: 'Please provide the correct input format',
    };
  }

  //Check if the direction commands are provided and correct
  let directionCommandsArray = input[2].split('');

  for (let i = 0; i < directionCommandsArray.length; i++) {
    if (!directionCommands.includes(directionCommandsArray[i])) {
      return {
        error: true,
        message: `Please provide correct direction commands, ${directionCommandsArray[i]} is an invalid command.`,
      };
    }
  }

  //Create a return object with the processed input
  let boundaries = {
    x: parseInt(input[0].split(' ')[0]),
    y: parseInt(input[0].split(' ')[1]),
  };
  let currentCoordinates = {
    x: parseInt(input[1].split(' ')[0]),
    y: parseInt(input[1].split(' ')[1]),
  };
  let currentFacing = input[1].split(' ')[2];
  return {
    error: false,
    directionCommandsArray,
    boundaries,
    currentCoordinates,
    currentFacing,
  };
};

export default readInput;
