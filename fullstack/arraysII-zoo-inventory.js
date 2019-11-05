/*
Define a function, zooInventory, that accepts a multi-dimensional array of animal facts.

zooInventory should return a new, flat array. Each element in the new array should be a sentence about each of the animals in the zoo.

let myZoo = [
  ['King Kong', ['gorilla', 42]],
  ['Nemo', ['fish', 5]],
  ['Punxsutawney Phil', ['groundhog', 11]]
];

zooInventory(myZoo);
/* => ['King Kong the gorilla is 42.',
       'Nemo the fish is 5.'
       'Punxsutawney Phil the groundhog is 11.']
*/
*/

// YOUR CODE BELOW
const zooInventory = (array) => {
  let newFlatArray = []
  for (let i = 0; i <array.length; i++) {
    let sentence = ''
    for (let j = 0; j < array[i].length; j++) {
      if (Array.isArray(array[i][j])) {
        for (let k = 0; k <array[i][j].length; k++) {
          
          if (k === 0) {
            sentence = sentence + (array[i][j][k]) + ' is ';
          }
          else {
            sentence = sentence + (array[i][j][k]) + '.';
          }      
        }
      }
      else {
        sentence = sentence + (array[i][j]) + ' the ';
      }
    }
    newFlatArray.push(sentence)
  }
  return newFlatArray;
}

