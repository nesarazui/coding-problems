//We know that the first step is building a Markov Chain out of a word corpus. So to start, write a function that accepts a string and returns an array of the words in the string, uniformly formatted with no numbers or punctuation.

//let text = "Ever since I left the city, you, you, you You and me we just don't get along";

//parseText(text);
//-> [ 'ever', 'since', 'i', 'left', 'the', 'city', 'you', 'you', 'you', 'you', 'and', 'me', 'we', 'just', 'dont', 'get', 'along' ]

STEP 1: Convert string to an array with each word a separate element in array using .split method 

const buildChain = (string) => {
  let array = string.toLowerCase().split(' ') //takes string to lower case it and then split into individual words into array
  //loop through each word and see if there is a comma - if so, remove comma
  for (let i = 0; i < array.length; i++) {
    let word = array[i]
    if (word.includes(',')) { //if word has a comma
    console.log('has a comma!', word)
      array[i] = word.replace(',', '') //remove last element in word (comma)
    }
  }
  return array 
}

console.log(buildChain(text))

//STEP 2: Generate Markov Chain (object) using the array generated above. This will be a dictionary of all the unique words in the corpus, and an array of all the words that follow it.

const generateWordPairs = (string) => {
  let dictionary = {} //create empty object - all unique words and their value will go into this

  let array = buildChain(string) //generateWordPairs takes a string, so we call buildChain func that takes the string and converts into the array we need

  for (let i = 0; i < array.length - 1; i++) { //loop through each element in array
    let word = array[i]
    //console.log('test', word)
    //let followingWord = dictionary[word] // the value for each key
    if (word in dictionary !== true) { //if this word (key) does NOT exist in the dictionary, add it in
      dictionary[word] = [array[i + 1]] //adds word as key and the following word (i+1) as a value (in form of an array)
      //console.log(dictionary)
    }
    else { //if this word (key) already exists in dictionary, add its following word to its existing value array
      dictionary[word].push(array[i + 1])
    }
  }
  return dictionary
}

console.log(buildChain(text))
console.log(generateWordPairs(text))

/* ->
{ ever: [ 'since' ],
  since: [ 'i' ],
  i: [ 'left' ],
  left: [ 'the' ],
  the: [ 'city' ],
  city: [ 'you' ],
  you: [ 'you', 'you', 'you', 'and' ],
  and: [ 'me' ],
  me: [ 'we' ],
  we: [ 'just' ],
  just: [ 'dont' ],
  dont: [ 'get' ],
  get: [ 'along' ] }
*/

//Create a function writeLine that takes a Markov Chain (object) and a length of words n and returns a line of poetry.
//writeLine will need a helper function that takes a word and randomly chooses a word from its Markov Chain array. When a word has no entries in it's Markov Chain, the program should choose a new word and continue the line until it meets the word count.


const writeLine = (object, n) => {
  const helperFunc = (word) => {
  return `${word} ${object[word]} `
}
  let string = ''

for (let i = 0; i < n / 2; i++) { //will perform this function up to n times to build the poem
   string += helperFunc('we');
}

  return string
}

//
const writeLine = (markovObject, n) => {

  const helperFunc = () => {
      let arrayOfKeys = [] //push all keys from markovObject into this array
      let sentenceArray = [] //this array stores the poem as it is being built
      
      for (let key in markovObject) { //pushes all keys from the markovObect into arrayOfKeys
        arrayOfKeys.push(key) 
      } 
      let randomIndex = Math.ceil(Math.random() * arrayOfKeys.length) //generates random index number
      let starterWord = arrayOfKeys[randomIndex] //uses random index to pick out a word from arrayOfKeys
      //console.log('num in array', arrayOfKeys.length)
      //console.log('random index num is ', randomIndex)
      sentenceArray.push(starterWord) //pushes first word into the sentence array
      //let newKey = sentenceArray[0] 
      //sentenceArray.push(markovObject[newKey])// finds corresponding value of that key (starterWord) from markovObject and pushes to sentenceArray
      if (sentenceArray.length < n) {
        for (let i = 0; i <= n - 1; i++) {
          let lastWord = sentenceArray[sentenceArray.length - 1] //provides last word in array
          let valueArray = markovObject[lastWord] //returns the array with the values in markovObject 
          //if (lastWord in markovObject) { //If it is a KEY in the object
           if (markovObject[lastWord].length > 1) { // (And if ITS value in the array has more than one word)
            sentenceArray.push(valueArray[Math.ceil(Math.random() * valueArray.length)]) //randomly choose a value from that array using Math.random etc and push that to sentenceArray
            
           } 
           if (markovObject[lastWord].length === 1) { //if the array value contains just one word
            sentenceArray.push(valueArray[0]) //push that word into the array
            
           }
        }
      let stringified = sentenceArray.join(" ") //converts array to string
      return stringified //returns poem as a string
      }


    } 

  return helperFunc()
}

console.log(writeLine(dictionary, 5))
