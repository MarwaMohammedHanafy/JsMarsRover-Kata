/* eslint-disable max-len */
/* eslint-disable object-curly-spacing */
/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
const {
    addRoversAsObstacles,
    removeOldPosition,
    addNewPosition,
} = require('../src/Plateau.mjs');

describe('test addRoversAsObstacles', () => {
    const dummyRovers = [{
        direction: 'N',
        position: { x: 0, y: 0 },
    }];
    const dummyPlateau = {
        length: 5,
        width: 5,
    };

    test('test if add Rovers As Obstacles in the Plateau', () => {
        const newPlateau = addRoversAsObstacles(dummyPlateau, dummyRovers);
        expect(newPlateau.listOfObstacles).toStrictEqual([[0, 0]]);
    });
});
