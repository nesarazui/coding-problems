/*
Write a function whosASpecial that takes an array of pets and returns a string confirming what you already knew: all of the pets are very special! Feel free to add your own special pets to the array!

Use .forEach in your answer.

let specialPets = [{
    name: 'Sadie',
    species: 'cat'
  }, {
    name: 'Layla',
    species: 'cat'
  }, {
    name: 'Bogie',
    species: 'dog'
  }
];

whosASpecial(specialPets);
// => Sadie the cat is very special! Layla the cat is very special! Bogie the dog is very special!
*/

// YOUR CODE BELOW
const whosASpecial = (array) => {
  let str = ''

  function buildSent (array) {
    str += `${array.name} the ${array.species} is very special! `
    console.log(str)
  }

  array.forEach(buildSent)
 
  let finalString = str.trim()
  return finalString
}
