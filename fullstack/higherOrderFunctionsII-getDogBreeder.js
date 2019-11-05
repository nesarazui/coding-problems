Remember the dog breeder question from an earlier workshop? It assumed that the default name for a dog should be 'Steve', and the default age should be 0.

Define a function, getDogBreeder, that takes a default name and age, and returns a dogBreeder function. The returned dogBreeder function should use the default values defined when dogBreeder was called.

You can copy over the solution code from dogBreeder if you'd like.

let puppyFarm = getDogBreeder('Snoopy', 0);
let rescueShelter = getDogBreeder('Odie', 3);

puppyFarm('Olaf', 3); // => {name: 'Olaf', age: 3};
puppyFarm(2); // => {name: 'Snoopy', age: 2}

rescueShelter(); // => {'Odie', 3}

// YOUR CODE BELOW
const getDogBreeder = (defaultName, defaultAge) => {

  const func = (name = defaultName, age = defaultAge) => {
    let obj = {}

    if (typeof name === 'number') {
      obj['name'] = defaultName
      obj['age'] = name
    }
    else {
      obj['name'] = name
      obj['age'] = age
    }

    return obj
  }

  return func
}
