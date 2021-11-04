# Instructions on how to use the app 
Getting Started: 
* git clone https://github.com/MarwaMohammedHanafy/JsMarsRover-Kata.git
* cd JsMarsRover-Kata 
* To install dependencies: npm install 
* To Run the tests: npm test

I start by dividing the system into 3 components: Rover, Plateau and MarsRover-Kata which is consider the starting point (main of the system). Also, I divide the test scenario. I use unit tests for each component, and component / integration tests for the whole system.

Components: 
* Rover Component’s public function: 
    *   moveLeftRequest
    *   moveRightRequest
    *   moveForwardRequest
* MarsRover-Kata Component’s public function: 
    *   marsRover (move the rover based on instruction)
* navigatorSystem Component’s public function:
    *   addRoversAsObstacles
    *   removeOldPosition
    *   addNewPosition

I use a TDD approach:
1.  Assume the *marsRover* function handles an array of rovers & an array of instructions without handling any obstacles (no collapse). 
2.  Test invalid Moves & outOfBoundries and add the corresponding code. 
3.  Add bodies of moveLeftRequest & moveRightRequest and test them.
4.  Test if the movement function gets called from *marsRover*.
5.  Test if the movement function by itself. <!-- review: unclear grammar-->
6.  Add test case for input validation for handling invalid instructions.
7.  Implement obstacle detection before each move. If obstacles is predefined inside the Plateau can detected before each move and throw error. <!-- review: unclear grammar-->
8. Communicate between the rovers to handle their movements. Add rovers as obstacles inside the Plateau that can be detected before each move and throw an error.

Future phases:
*	plateau can be any shape.
*	planets are spheres.

Instructions for linting guidelines:
1. Installing ESLint (Optional: Prettier) : npm install eslint prettier eslint-plugin-prettier eslint-config-prettier
2. Configuring ESLint and Prettier Rules
for ESLint:
    .eslintrc.json
for Prettier:
    .prettierrc
3. I use Formatting on Save in VS Code with ESLint