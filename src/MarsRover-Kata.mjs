/* eslint-disable max-len */
/* eslint-disable spaced-comment */
/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */

const roverModule = require('../src/rover.mjs');

const marsRover = (plateau, rovers, instractionsArray) => {
    if (!plateau) throw new Error("plateau is required");
    if (!rovers) throw new Error("rovers is required");
    if (!instractionsArray) throw new Error("instractions is required");
    const newRovers = [];
    for (let i = 0; i < rovers.length; i++) {
        const rover = rovers[i];
        const instractions = instractionsArray[i];
        let newPosition = rover;
        [...instractions].forEach(instraction => {
            switch (instraction) {
                case 'L':
                    newPosition = roverModule.moveLeftRequest(newPosition);
                    break;
                case 'R':
                    newPosition = roverModule.moveRightRequest(newPosition);
                    break;
                case 'M':
                    newPosition = roverModule.moveForwardRequest(newPosition, plateau);
                    break;
                default:
                    throw new Error(`Invalid instraction ${instraction}`);
            }
        });
        newRovers.push(newPosition);
    }
    return newRovers;
};
module.exports = {
    marsRover,
};
