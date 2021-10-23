/* eslint-disable object-curly-spacing */
/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
//Immutable 
const directions = ['N', 'E', 'S', 'W'];

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
const moveForwardRequest = (rover, plateau) => {

};

module.exports = {
    moveLeftRequest,
    moveRightRequest,
    moveForwardRequest,
};
