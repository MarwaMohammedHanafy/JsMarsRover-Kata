/* eslint-disable max-len */
/* eslint-disable object-curly-spacing */
/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
const {
    moveLeftRequest,
    moveRightRequest,
    moveForwardRequest,
} = require('../src/rover.mjs');

describe('test rover turn left if send L', () => {
    const dummyRover = {
        direction: 'N',
        position: { x: 0, y: 0 },
    };
    test('test if rovers direction switch from N to W if turun left', () => {
        const newRover = moveLeftRequest(dummyRover);
        expect(newRover.direction).toBe('W');
    });
});
describe('test rover turn Right if send R', () => {
    const dummyRover = {
        direction: 'N',
        position: { x: 0, y: 0 },
    };
    test('test if rovers direction switch from N to E if turun right', () => {
        const newRover = moveRightRequest(dummyRover);
        expect(newRover.direction).toBe('E');
    });
});