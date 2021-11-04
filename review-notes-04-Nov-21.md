# General review comments
- *.mjs* files represent ES6 modules and it is recommended that those should be imported with the *import* keyword instead of *require*. *require* is meant to be used for CommonJS modules.
- make sure you use camelCase throughout the project for your variable names
- you may want to try out test parameterisation (open-closed principle) by using *test.each*
- good use of JSDoc, however, not 100% consistent

# navigatorSystem review comments
- instead of *concat* you can use the ES6 approach of *[...array1, ...array2]*
- in *removeOldPosition* you have a warning comment that could be replaced by a unit test
- it's probably a good idea to predefine *listOfObstacles* for *dummyPlateau* so VS Code doesn't complain that the property does not exist

# rover review comments
- instead of *Object.assign* you can use the ES6 approach of *{...target, ...source}*
- you can reuse the dummyRover object in your unit tests (DRY principle)
- good separation of concerns into several smaller functions

# MarsRover-Kata review comments
- *RoverSpy* should be *roverSpy* instead (camelCase)
- good use of spies and mocks

# package.json review comments
- good to see eslint included
- package name invalid
- for details see prior review commit

# readme review comments
- review was completed alongside suggested changes within readme.rd
- for details see prior review commit
