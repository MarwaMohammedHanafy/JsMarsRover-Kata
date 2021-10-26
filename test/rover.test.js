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
describe('test invalid Moves', () => {
    const dummyRover = {
        direction: 'W',
        position: { x: 0, y: 0 },
    };
    const dummyPlateau = { length: 5, width: 9 };
    test('rover can not move to west  if its posY is 0 ', () => {
        expect(() => {
            moveForwardRequest(dummyRover, dummyPlateau);
        }).toThrow("Move is out of Boundries");
    });
    dummyRover.direction = 'E';
    dummyRover.position.y = 10;
    test('rover can not move to east  if its posY is >=  Plateau.length ', () => {
        expect(() => {
            moveForwardRequest(dummyRover, dummyPlateau);
        }).toThrow("Move is out of Boundries");
    });
    dummyRover.direction = 'N';
    dummyRover.position.x = 6;
    test('rover can not move to North  if its posX is is >=  Plateau.width ', () => {
        expect(() => {
            moveForwardRequest(dummyRover, dummyPlateau);
        }).toThrow("Move is out of Boundries");
    });
    dummyRover.direction = 'S';
    dummyRover.position.x = 0;
    test('rover can not move to south  if its posX is 0 ', () => {
        expect(() => {
            moveForwardRequest(dummyRover, dummyPlateau);
        }).toThrow("Move is out of Boundries");
    });
});
describe('test if  there is an obstacle in the way ', () => {
    const dummyRover = {
        direction: 'E',
        position: { x: 0, y: 0 },
    };
    const dummyPlateau = { length: 5, width: 9, listOfObstacles: [[1, 0]] };
    test('rover can not move to east  if there is obstacle in 1,0 ', () => {
        expect(() => {
            moveForwardRequest(dummyRover, dummyPlateau);
        }).toThrow("Get blocked By obstacle");
    });
});
