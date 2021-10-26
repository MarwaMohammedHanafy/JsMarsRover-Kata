/* eslint-disable comma-dangle */
/* eslint-disable curly */
/* eslint-disable max-len */
/* eslint-disable padded-blocks */
/* eslint-disable object-curly-spacing */
/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
const addRoversAsObstacles = (plateau, rovers) => {

    const listOfRovers = rovers.map(rover => [rover.position.x, rover.position.y]);
    plateau.listOfObstacles = (!plateau.listOfObstacles) ? listOfRovers : plateau.listOfObstacles.concat(listOfRovers);
    return plateau;
};
const removeOldPosition = (plateau, rover) => {
    plateau.listOfObstacles =
        plateau.listOfObstacles.filter(obstPosition =>
            obstPosition !== [rover.position.x, rover.position.y]);
};
const addNewPosition = (plateau, newPosition) => {
    plateau.listOfObstacles.push(newPosition.position.x, newPosition.position.y);
};

module.exports = {
    addRoversAsObstacles,
    removeOldPosition,
    addNewPosition,
};
