/*
Write a function cloneMachine, that, given an animal (represented as an object), returns a clone of the original animal.

The name of the clone should be the name of its parent, concatenated with the word 'Clone'.

cloneMachine should also push the name of the clone to the parent's offspring array.

let dolly = {
  name: 'Dolly',
  species: 'sheep',
  offspring: []
}

let dollyClone = cloneMachine(dolly);

console.log(dollyClone) // {name: 'DollyClone', species: 'sheep', offspring: []}
console.log(dolly) // {name: 'Dolly', species: 'sheep', offspring: ['DollyClone']}
*/

// YOUR CODE BELOW
const cloneMachine = (obj) => { //function takes an object (animal)
  let cloneName = `${obj.name}Clone`
  const clonedAnimal = {
    name: cloneName,
    species: `${obj.species}`,
    offspring: []
  }
  obj.offspring.push(cloneName)
  return clonedAnimal
}

