/*
Most Vowels
Define a function, mostVowels, that accepts one argument, a string of words.

mostVowels should return the word that has the most vowels.

mostVowels('I am a keeper with some real rhythms'); // => keeper
If none of the words have any vowels, return an empty string.

mostVowels('try my gym'); // => ''
*/

const mostVowels = (string) => {
  let indWords = string.split(' ');
  let maxVowels = 0;
  let maxVowelsWord = '';
  for (let i = 0; i < indWords.length; i++) {
    let counter = 0;
    indWords[i] = indWords[i].replace('.', '')
    indWords[i] = indWords[i].replace('?', '')
    for (let j = 0; j < indWords[i].length; j++){
      if (indWords[i][j].includes('a') || indWords[i][j].includes('e')|| 
          indWords[i][j].includes('i') || indWords[i][j].includes('o')|| 
          indWords[i][j].includes('u')) {
        counter = counter + 1;  
     } // if
    } // inner for loop
    if (counter > maxVowels) {
      maxVowels = counter;
      maxVowelsWord = indWords[i];
    }//second if
  } // outer for loop
  return maxVowelsWord;
}; // function
