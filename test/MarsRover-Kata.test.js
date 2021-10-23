/* eslint-disable object-curly-spacing */
/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
const {
    marsRover,
} = require('../src/MarsRover-Kata.mjs');

describe('Validate Inputs to marsRover', () => {
    test('it throws an error if not passed plateau ', () => {
        expect(() => {
            marsRover();
        }).toThrow("plateau is required");
        expect(() => {
            marsRover({ length: 5, width: 5 });
        }).toThrow("rovers is required");
        expect(() => {
            marsRover(
                { length: 5, width: 5 },
                {
                    direction: 'N',
                    position: { x: 0, y: 0 },
                });
        }).toThrow("instractions is required");
    });
});
