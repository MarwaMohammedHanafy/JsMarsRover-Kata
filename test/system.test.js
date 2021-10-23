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
describe('Test if rover get to the right place ', () => {
    test('pos 1 2 N becomes 1 3 N after "LMLMLMLMM"', () => {
        const dummyRover = [{
            direction: 'N',
            position: { x: 1, y: 2 },
        }];
        const dummyPlateau = { length: 5, width: 5 };
        const dummyInstructions = ["LMLMLMLMM"];
        const newPosition = marsRover(dummyPlateau, dummyRover, dummyInstructions);
        expect(newPosition).toStrictEqual(
            [{
                direction: 'N',
                position: { x: 1, y: 3 },
            }]
        );

    });
    test('pos 3 3 E becomes 5 1 E after "MMRMMRMRRM"', () => {
        const dummyRover = [{
            direction: 'E',
            position: { x: 3, y: 3 },
        }];
        const dummyPlateau = { length: 5, width: 5 };
        const dummyInstructions = ["MMRMMRMRRM"];
        const newPosition = marsRover(dummyPlateau, dummyRover, dummyInstructions);
        expect(newPosition).toStrictEqual(
            [{
                direction: 'E',
                position: { x: 5, y: 1 },
            }]
        );

    });
});
describe('Test if multiple rovers get to the right place without considering obstacles ', () => {
    test('pos 1 2 N becomes 1 3 N after "LMLMLMLMM"', () => {
        const dummyRovers = [{
            direction: 'N',
            position: { x: 1, y: 2 },
        },
        {
            direction: 'E',
            position: { x: 3, y: 3 },
        },
        ];

        const dummyPlateau = { length: 5, width: 5 };
        const dummyInstructionsArray = ["LMLMLMLMM", "MMRMMRMRRM"];
        const newPosition = marsRover(dummyPlateau, dummyRovers, dummyInstructionsArray);
        expect(newPosition).toStrictEqual(
            [{
                direction: 'N',
                position: { x: 1, y: 3 },
            },
            {
                direction: 'E',
                position: { x: 5, y: 1 },
            }]
        );

    });
});