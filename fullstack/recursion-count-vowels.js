Write a function, countVowels, that accepts a string and returns the number of vowels in that string. Use recursion.

countVowels('Four score and seven years'); // => 9

// YOUR CODE BELOW
let globalVowels = []

const countVowels = (string) => {
  let vowelCheck = ['a', 'e', 'i', 'o', 'u']
  
  if (string.length === 1) {
    if ((vowelCheck.includes(string[string.length - 1]))) {
      globalVowels.push(string[0])
    }
    return
  }
 
  if (vowelCheck.includes(string[string.length - 1])) { //if last element is found in vowelCheck (is a vowel)
    globalVowels.push((string[string.length - 1])) //push that element to globalVowels
  }
  countVowels(string.slice(0, string.length - 1))
  return globalVowels.length
}
