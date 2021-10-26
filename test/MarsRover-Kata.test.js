/* eslint-disable padded-blocks */
/* eslint-disable comma-dangle */
/* eslint-disable max-len */
/* eslint-disable object-curly-spacing */
/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */


const {
    marsRover,
} = require('../src/MarsRover-Kata.mjs');
const rover = require('../src/Rover.mjs');
const RoverSpy = jest.spyOn(rover, 'moveLeftRequest');
jest.mock('../src/Rover.mjs');

afterEach(() => {
    jest.clearAllMocks();
});

describe('Validate Inputs to marsRover', () => {
    const dummyRover = [{
        direction: 'N',
        position: { x: 0, y: 0 },
    }];
    const dummyPlateau = { length: 5, width: 5 };
    const dummyInstructions = ["MMK"];
    test('it throws an error if not passed plateau ', () => {
        expect(() => {
            marsRover();
        }).toThrow("plateau is required");
        expect(() => {
            marsRover(dummyPlateau);
        }).toThrow("rovers is required");
        expect(() => {
            marsRover(dummyPlateau, dummyRover, dummyInstructions);
        }).toThrow("Invalid instraction K");
    });
});
describe('Test if the movement function get called based on relevant instruction', () => {
    test('it calls moveRoverLeft when pass L ', () => {
        const dummyRover = [{
            direction: 'N',
            position: { x: 0, y: 0 },
        }];
        const dummyPlateau = { length: 5, width: 5 };
        const dummyInstructions = ["LLLM"];
        marsRover(dummyPlateau, dummyRover, dummyInstructions);
        //use spy 
        expect(RoverSpy).toHaveBeenCalledTimes(3);
        //use mock
        expect(rover.moveForwardRequest).toHaveBeenCalledTimes(1);
        expect(rover.moveRightRequest).toHaveBeenCalledTimes(0);
    });
});


