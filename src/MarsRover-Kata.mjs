const roverModule = require('./Rover.mjs');
const navigatorSystemModule = require('../src/navigatorSystem.mjs');
/**
 *
 * @param plateau {Object}
 * @param rovers {Array of objects}
 * @param instractionsArray {Array of String}
 * @param obscaleDetectionIsAllowed {Boolean}
 * @return newRovers {Array of Objects}
 */
const marsRover = (plateau, rovers, instractionsArray, obscaleDetectionIsAllowed = false) => {
  if (!plateau) throw new Error('plateau is required');
  if (!rovers) throw new Error('rovers is required');
  if (!instractionsArray) throw new Error('instractions is required');
  // Add rovers in plateau as obstcales if obscale detection is allowed
  if (obscaleDetectionIsAllowed) {
    navigatorSystemModule.addRoversAsObstacles(plateau, rovers);
  }
  const newRovers = [];
  for (let i = 0; i < rovers.length; i++) {
    const rover = rovers[i];
    const instractions = instractionsArray[i];
    let newPosition = rover;
    [...instractions].forEach((instraction) => {
      switch (instraction) {
        case 'L':
          newPosition = roverModule.moveLeftRequest(newPosition);
          break;
        case 'R':
          newPosition = roverModule.moveRightRequest(newPosition);
          break;
        case 'M':
          newPosition = roverModule.moveForwardRequest(newPosition, plateau, obscaleDetectionIsAllowed);
          break;
        default:
          throw new Error(`Invalid instraction ${instraction}`);
      }
    });
    newRovers.push(newPosition);
    if (obscaleDetectionIsAllowed) {
      plateau = navigatorSystemModule.removeOldPosition(plateau, rover);
      plateau = navigatorSystemModule.addNewPosition(plateau, newPosition);
    }
  }
  return newRovers;
};
module.exports = {
  marsRover,
};
