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
//Immutable 
const directions = ['N', 'E', 'S', 'W'];
const directionvalues = {
    'N': [0, 1],
    'E': [1, 0],
    'S': [0, -1],
    'W': [-1, 0],
};


const findDirectionIndex = rover => {
    const isDirection = (element) => element == rover.direction;
    return directions.findIndex(isDirection);
};

const moveLeftRequest = (rover) => {
    const directionNumber = findDirectionIndex(rover);
    const newDirection = directions[(directionNumber + 4 - 1) % 4];
    const m = Object.assign({}, rover, { direction: newDirection });
    console.log("moveLeftRequest" + m.direction + " " + m.position.x + " " + m.position.y);
    return m;
};

const moveRightRequest = (rover) => {
    const directionNumber = findDirectionIndex(rover);
    const newDirection = directions[(directionNumber + 1) % 4];
    const m = Object.assign({}, rover, { direction: newDirection });
    console.log("moveRightRequest" + m.direction + " " + m.position.x + " " + m.position.y);
    return m;
};
const isOutBoundries = (rover, plateau) => {
    const { direction, position } = rover;
    const { length, width } = plateau;
    return ((direction === "N" && position.y <= 0) ||
        (direction === "E" && position.x >= length) ||
        (direction === "S" && position.y >= width) ||
        (direction === "W" && position.x <= 0));
};
const isObstacle = (rover, plateau) => {
    const { position } = rover;
    const { listOfObstacles } = plateau;
    for (const obstacle of listOfObstacles) {
        if (position.x === obstacle[0] && position.y === obstacle[1]) return true;
    }
    return false;
};

const moveForwardRequest = (rover, plateau, obscaleDetectionIsAllowed) => {

    if (isOutBoundries(rover, plateau))
        throw new Error("Move is out of Boundries");
    const { direction, position } = rover;
    const newRover = Object.assign({}, rover, {
        position: {
            x: position.x + directionvalues[direction][0],
            y: position.y + directionvalues[direction][1],
        }
    });
    if (obscaleDetectionIsAllowed && plateau.listOfObstacles && isObstacle(newRover, plateau))
        throw new Error("Get blocked By obstacle");
    return newRover;
};

module.exports = {
    moveLeftRequest,
    moveRightRequest,
    moveForwardRequest,
};
