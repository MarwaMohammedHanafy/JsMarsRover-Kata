
Instructions on how to use the app 
"Getting Started: 
git clone https://github.com/MarwaMohammedHanafy/JsMarsRover-Kata.git
cd JsMarsRover-Kata 
To install dependencies: npm install 
To Run the tests: npm test

I start with divide the system into 3 component Rover, Plateau and MarsRover-Kata which is consider the start point (main of the system). Also, I divide the test scenario. I use unit test for each component and component (integration test) for the whole system.

Components: -
Rover Component’s public function: 
•   moveLeftRequest
•   moveRightRequest
•   moveForwardRequest
MarsRover-Kata Component’s public function: 
•   marsRover (move the rover based on instruction)
navigatorSystem Component’s public function:
•   addRoversAsObstacles
•   removeOldPosition
•   addNewPosition

I use TDD approach. 
1.  Assume The marsRover function handle array of rovers & array of Instruction without handle any obstacles (No collapse). 
2.  test invalid Moves & outOfBoundries and add the corresponding code. 
3.  Add bodies of moveLeftRequest & moveRightRequest and test them.
4.  Test if the movement function gets called from marsRover.
5.  Test if the movement function by itself.
6.  Add test case for Input Validation for handle Invalid instruction.
7.  Implement obstacle detection before each move. 
    If obstacles is predefined inside the Plateau can detected before each move and throw error.
8. Communicate between the rovers to handle their movements.
    Add rovers as obstacles inside the Plateau and can be detected before each move and throw error.

Future phases:
•	plateau can be any shape.
•	planets are spheres.


Instructions For linting guidelines. 

1. Installing ESLint (Optional: Prettier) : npm install eslint prettier eslint-plugin-prettier eslint-config-prettier
2. Configuring ESLint and Prettier Rules
for ESLint:
    .eslintrc.json
for Prettier:
    .prettierrc
3. I use Formatting on Save in VS Code with ESLint