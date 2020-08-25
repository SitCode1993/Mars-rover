import moveRover from './rover.js';
import fs from 'fs';

async function marsRover() {
  //Read input file
  let inputText;
  try {
    inputText = fs.readFileSync('./mainInput.txt', 'utf8');
  } catch (e) {
    console.error(e);
  }

  //move the rover using the input Text
  let response;
  try {
    response = await moveRover(inputText);
    if (response.error) {
      console.log(
        '=======================ERROR==============================='
      );
      console.log(
        '==========================================================='
      );
    } else {
      console.log(
        '========================SUCCESS==================================='
      );
      console.log(
        `${response.currentCoordinates.x} ${response.currentCoordinates.y} ${response.currentFacing}`
      );
      console.log(
        '================================================================'
      );
    }
  } catch (e) {
    console.error(e);
  }
}

marsRover();
