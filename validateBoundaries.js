const validateBoundaries = (
  checkExpectedPosition,
  currentCoordinates,
  currentFacing,
  boundaries
) => {
  if (
    checkExpectedPosition.x < 0 ||
    checkExpectedPosition.y < 0 ||
    checkExpectedPosition.x > boundaries.x ||
    checkExpectedPosition.y > boundaries.y
  ) {
    return {
      error: true,
      message: `Position ${checkExpectedPosition.x},${checkExpectedPosition.y} is out of boundry, rover is currently facing ${currentFacing} at coordinates ${currentCoordinates.x},${currentCoordinates.y}`,
    };
  } else {
    return {
      error: false,
    };
  }
};

export default validateBoundaries;
