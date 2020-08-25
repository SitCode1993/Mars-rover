import assert from 'assert';
import validateBoundaries from '../validateBoundaries.js';
import path from 'path';
import fs from 'fs';
describe('Boundry Validations', function () {
  it('Should return an error if next move is out of boundry', async function () {
    let checkExpectedPosition = {
      x: 1,
      y: 9,
    };
    let currentCoordinates = {
      x: 1,
      y: 8,
    };

    let currentFacing = 'N';
    let boundaries = {
      x: 8,
      y: 8,
    };

    let response = await validateBoundaries(
      checkExpectedPosition,
      currentCoordinates,
      currentFacing,
      boundaries
    );

    assert.equal(response.error, true);
    assert.equal(
      response.message,
      `Position ${checkExpectedPosition.x},${checkExpectedPosition.y} is out of boundry, rover is currently facing ${currentFacing} at coordinates ${currentCoordinates.x},${currentCoordinates.y}`
    );
  });

  it('Should return no error if expected coordinates are within the boundaries', async function () {
    let checkExpectedPosition = {
      x: 5,
      y: 8,
    };
    let currentCoordinates = {
      x: 1,
      y: 4,
    };

    let currentFacing = 'N';
    let boundaries = {
      x: 8,
      y: 8,
    };

    let response = await validateBoundaries(
      checkExpectedPosition,
      currentCoordinates,
      currentFacing,
      boundaries
    );

    assert.equal(response.error, false);
  });
});
