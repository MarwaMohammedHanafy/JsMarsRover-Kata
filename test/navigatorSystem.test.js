const { addRoversAsObstacles, removeOldPosition, addNewPosition } = require('../src/navigatorSystem.mjs');

const dummyRovers = [
  {
    direction: 'N',
    position: { x: 0, y: 0 },
  },
];
const dummyPlateau = {
  length: 5,
  width: 5,
};

describe('test addRoversAsObstacles', () => {
  test('test if add Rovers As Obstacles in the Plateau', () => {
    addRoversAsObstacles(dummyPlateau, dummyRovers);
    expect(dummyPlateau.listOfObstacles).toStrictEqual([[0, 0]]);
  });
});
describe('test removeOldPosition', () => {
  test('remove rover old position from list of obstcales', () => {
    removeOldPosition(dummyPlateau, dummyRovers[0]);
    expect(dummyPlateau.listOfObstacles).toStrictEqual([]);
  });
});
describe('test addNewPosition', () => {
  const newPositionRover = {
    direction: 'N',
    position: { x: 1, y: 4 },
  };
  test('add rover new position to list of obstcales', () => {
    addNewPosition(dummyPlateau, newPositionRover);
    expect(dummyPlateau.listOfObstacles).toStrictEqual([1, 4]);
  });
});
