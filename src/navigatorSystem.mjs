/**
 *
 * @param plateau {Object}
 * @param rovers {Array of objects}
 */
const addRoversAsObstacles = (plateau, rovers) => {
  const listOfRovers = rovers.map((rover) => [rover.position.x, rover.position.y]);
  plateau.listOfObstacles = !plateau.listOfObstacles ? listOfRovers : plateau.listOfObstacles.concat(listOfRovers);
};
/**
 *
 * @param plateau {Object}
 * @param rovers {object}
 */
const removeOldPosition = (plateau, rover) => {
  const valueToRemove = [rover.position.x, rover.position.y];
  const index = plateau.listOfObstacles.findIndex((Obstacle) => {
    /* WARNING: arrays must not contain {objects} or behavior may be undefined */
    return JSON.stringify(valueToRemove) === JSON.stringify(Obstacle);
  });
  if (index > -1) {
    plateau.listOfObstacles.splice(index, 1);
  }
};
/**
 *
 * @param plateau {Object}
 * @param rovers {object}
 */
const addNewPosition = (plateau, newPosition) => {
  plateau.listOfObstacles.push(newPosition.position.x, newPosition.position.y);
};

module.exports = {
  addRoversAsObstacles,
  removeOldPosition,
  addNewPosition,
};
