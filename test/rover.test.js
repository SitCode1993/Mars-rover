import assert from 'assert';
import readInput from '../input.js';
import moveRover from '../rover.js';
import path from 'path';
import fs from 'fs';
describe('Rover final position validation', function () {
  it('Should return the correct final position', async function () {
    let inputText;
    try {
      inputText = await fs.readFileSync(
        path.resolve(path.resolve(), './test/correct-input.txt'),
        'utf8'
      );
    } catch (e) {
      console.error(e);
    }
    let response = await moveRover(inputText);

    assert.equal(response.error, false);
    assert.equal(response.currentCoordinates.x, 3);
    assert.equal(response.currentCoordinates.y, 8);
    assert.equal(response.currentFacing, 'W');
  });
});
