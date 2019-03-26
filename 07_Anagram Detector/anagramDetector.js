console.log(
  "%c--Anagram Detector Warmup Exercise--",
  "color: blue; font-size: large; background-color: yellow;"
);
/*Anagram Detector
Write a program that, given a word and a list of possible anagrams, selects the anagrams of the given word.

In other words, given: "listen" and ["enlists" "google" "inlets" "banana"] the program should return "inlets".

Suggestions
Start out by getting this working with discrete functions.
// If you feel comfortable with that, try to put all your functions, collections, etc, into an object.*/

let anagrams = [];

const customSort = function(word) {
  word = word.split("").sort().join("");

  return word
}

const checkForAnagram = function(word, candidateWords) {
  // word = word.split("");
  // console.log(word);
  // word = word.sort();
  // console.log(word);
  // word = word.join("");
  // console.log(word);

  let sortedWord = customSort(word)
  console.log(sortedWord);

  for ( let i = 0; i < candidateWords.length; i++ ) {
    console.log("word before sort: ", candidateWords[i]);
    let candidate = customSort(candidateWords[ i ]);
    console.log("word after sort: ", candidate);

    if (sortedWord === candidate) {
      anagrams.push(candidateWords[i])
    }
  } //for

  console.log(`The anagram of ${word} is ${anagrams}`);
}; //chekcforanagram

console.log(checkForAnagram("listen", ["enlists", "google", "inlets", "banana"]));
