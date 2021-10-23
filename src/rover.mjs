/* eslint-disable object-curly-spacing */
/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
const createRover = (dir, posX, posY) => {
    const rover = {
        direction: dir,
        position: { x: posX, y: posY },
    };
    return rover;
};

const moveLeftRequest = (rover) => {

};
const moveRightRequest = (rover) => {

};
const moveForwardRequest = (rover, plateau) => {

};

module.exports = {
    createRover,
    moveLeftRequest,
    moveRightRequest,
    moveForwardRequest,
};
