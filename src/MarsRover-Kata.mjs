/* eslint-disable max-len */
/* eslint-disable spaced-comment */
/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */

const rover = require('../src/rover.mjs');

const marsRover = (plateau, rovers, instractions) => {
    if (!plateau) throw new Error("plateau is required");
    if (!rovers) throw new Error("rovers is required");
    if (!instractions) throw new Error("instractions is required");
    let newPosition = rovers;
    console.log(instractions);
    [...instractions].forEach(instraction => {
        switch (instraction) {
            case 'L':
                newPosition = rover.moveLeftRequest(newPosition);
                break;
            case 'R':
                newPosition = rover.moveRightRequest(newPosition);
                break;
            case 'M':
                newPosition = rover.moveForwardRequest(newPosition, plateau);
                break;
            default:
                throw new Error(`Invalid instraction ${instraction}`);
        }
    });
    return newPosition;
};
module.exports = {
    marsRover,
};
