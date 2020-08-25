import assert from 'assert';
import readInput from '../input.js';
import path from 'path';
import fs from 'fs';
describe('input Validations', function () {
  it('Should return an error if no input provided', async function () {
    let inputText;
    let response = await readInput(inputText);

    assert.equal(response.error, true);
    assert.equal(response.message, 'Please provide input.');
  });

  it('Should return an error if input is not a string', async function () {
    let inputText = 12344;
    let response = await readInput(inputText);

    assert.equal(response.error, true);
    assert.equal(response.message, 'Please provide the input as a string.');
  });

  it('Validates if there are 3 lines in the text input', async function () {
    let inputText;
    try {
      inputText = await fs.readFileSync(
        path.resolve(path.resolve(), './test/test-1-input.txt'),
        'utf8'
      );
    } catch (e) {
      console.error(e);
    }
    let response = await readInput(inputText);

    assert.equal(response.error, true);
    assert.equal(response.message, 'Please provide the correct input format');
  });

  it('validates if the first line has two values separated by an empty space', async function () {
    let inputText;
    try {
      inputText = await fs.readFileSync(
        path.resolve(path.resolve(), './test/test-2-input.txt'),
        'utf8'
      );
    } catch (e) {
      console.error(e);
    }
    let response = await readInput(inputText);

    assert.equal(response.error, true);
    assert.equal(response.message, 'Please provide the correct input format');
  });

  it('validates if the second line has three values separated by an empty space', async function () {
    let inputText;
    try {
      inputText = await fs.readFileSync(
        path.resolve(path.resolve(), './test/test-3-input.txt'),
        'utf8'
      );
    } catch (e) {
      console.error(e);
    }
    let response = await readInput(inputText);

    assert.equal(response.error, true);
    assert.equal(response.message, 'Please provide the correct input format');
  });

  it('Checks if the 3rd variable given in the second line is part of the compass points .i.e (N, W, E or S)', async function () {
    let inputText;
    try {
      inputText = await fs.readFileSync(
        path.resolve(path.resolve(), './test/test-4-input.txt'),
        'utf8'
      );
    } catch (e) {
      console.error(e);
    }
    let response = await readInput(inputText);

    assert.equal(response.error, true);
    assert.equal(response.message, 'Please provide the correct input format');
  });

  it('Check if the direction commands are provided and correct', async function () {
    let inputText;
    try {
      inputText = await fs.readFileSync(
        path.resolve(path.resolve(), './test/test-5-input.txt'),
        'utf8'
      );
    } catch (e) {
      console.error(e);
    }
    let response = await readInput(inputText);

    assert.equal(response.error, true);
    assert.equal(
      response.message,
      `Please provide correct direction commands, H is an invalid command.`
    );
  });

  it('Return a correct processed input', async function () {
    let inputText;
    try {
      inputText = await fs.readFileSync(
        path.resolve(path.resolve(), './test/correct-input.txt'),
        'utf8'
      );
    } catch (e) {
      console.error(e);
    }
    let response = await readInput(inputText);

    assert.equal(response.error, false);
    assert.equal(response.directionCommandsArray.length, 16);
    assert.equal(response.boundaries.y, 8);
    assert.equal(response.boundaries.x, 12);
    assert.equal(response.currentCoordinates.x, '1');
    assert.equal(response.currentCoordinates.y, '8');
    assert.equal(response.currentFacing, 'E');
  });
});
