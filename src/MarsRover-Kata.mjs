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

    [...instractions].forEach(instraction => {
        switch (instraction) {
            case 'L':
                rover.moveLeftRequest(rovers);
                break;
            case 'R':
                rover.moveRightRequest(rovers);
                break;
            case 'M':
                rover.moveForwardRequest(rovers, plateau);
                break;
            default:
                throw new Error(`Invalid instraction ${instraction}`);
        }
    });
};
module.exports = {
    marsRover,
};
