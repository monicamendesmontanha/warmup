console.log(
  "%c--Scrabble Score Warmup Exercise--",
  "color: blue; font-size: large; background-color: yellow;"
);
/* Write a program that, given a word, computes the scrabble score for that word.

scrabble("cabbage")
// => 14
Letter Values
Letter                           Value
A, E, I, O, U, L, N, R, S, T       1
D, G                               2
B, C, M, P                         3
F, H, V, W, Y                      4
K                                  5
J, X                               8
Q, Z                               10
Extensions
You can play a :double or a :triple letter.
You can play a :double or a :triple word.
*/

//1º SOLUTION
// const values = {
//   1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T' ],
//   2: ['D', 'G'],
//   3: ['B', 'C', 'M', 'P'],
//   4: ['F', 'H', 'V', 'W', 'Y'],
//   5: ['K'],
//   8: ['J', 'X'],
//   10: ['Q', 'Z' ]
// };

// const letterScore = function(letter) {
//   // loop through the values object, one key at a time

//   for (let points in values) {
//     // variables are free - here I am making an array for each list of letters that has the same score

//     let letters = values[points]

//     //add here I see if the letter we pass in exists in the letters array

//     if (letters.indexOf(letter) > -1) {
//       //return the numerical value of key

//       return +points;
//     }
//   }
// }

// // this is the main function - we are passing in word
// const scrabble = function(word) {
//   // set the initial value
//   let wordScore = 0;

//   // return the word into an array
//   let wordArray = word.toUpperCase().split('');

//   // loop through the array
//   for (let i = 0 ; i < wordArray.length ; i+=1){
//     let letter = wordArray[i]

//     // get the score for each letter using the first function we declared above letterScore()
//     wordScore = wordScore + letterScore(letter);
//   }

//   // after the loop is finished, return the score
//   return `The value of the word "${word}" is ${wordScore}`;
// }

// console.log(scrabble("hello"));

// 2ª SOLUTION
const scrabble = {
  letterScore: {
    1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T' ],
    2: ['D', 'G'],
    3: ['B', 'C', 'M', 'P'],
    4: ['F', 'H', 'V', 'W', 'Y'],
    5: ['K'],
    8: ['J', 'X'],
    10: ['Q', 'Z' ]
  },

  score: function(word){
    word = word.toUpperCase();
    let sum = 0;

    for (let i = 0 ; i < word.length; i++) {
      let letter = word[i];

      for(let points in this.letterScore) {
        if (this.letterScore[points].includes(letter)) {
          sum += Number(points);

          break;
        }
      }
    }
    return `The value of the word "${word}" is ${sum}.`;
  }
}

console.log(scrabble.score("hello"));
console.log(scrabble.score("scrabble"));