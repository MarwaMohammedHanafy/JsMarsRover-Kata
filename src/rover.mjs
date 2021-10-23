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
    'N': [1, 0],
    'E': [0, 1],
    'S': [-1, 0],
    'W': [0, -1],
};


const findDirectionIndex = rover => {
    const isDirection = (element) => element == rover.direction;
    return directions.findIndex(isDirection);
};

const moveLeftRequest = (rover) => {
    const directionNumber = findDirectionIndex(rover);
    const newDirection = directions[(directionNumber + 4 - 1) % 4];
    return Object.assign({}, rover, { direction: newDirection });
};
const moveRightRequest = (rover) => {
    const directionNumber = findDirectionIndex(rover);
    const newDirection = directions[(directionNumber + 1) % 4];
    return Object.assign({}, rover, { direction: newDirection });
};
const isOutBoundries = (rover, plateau) => {
    console.log("isOutBoundries func");
    const { direction, position } = rover;
    const { length, width } = plateau;
    return ((direction === "N" && position.y <= 0) ||
        (direction === "E" && position.x >= length) ||
        (direction === "S" && position.y >= width) ||
        (direction === "W" && position.x <= 0));

    // console.log('Cannot move in that direction. The rover would move to a restricted area');
};

const moveForwardRequest = (rover, plateau) => {
    console.log("moveForwardRequest func");

    if (isOutBoundries(rover, plateau))
        throw new Error("Move is out of Boundries");

};

module.exports = {
    moveLeftRequest,
    moveRightRequest,
    moveForwardRequest,
};
