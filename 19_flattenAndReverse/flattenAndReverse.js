console.log(
  "%c--Flatten and Reverse, Warmup Exercise--",
  "color: blue; background-color: yellow;"
);
////////////////////////////////////////////////
// Solution using methods .reverse() and .flat()
////////////////////////////////////////////////

// const myArray = function(arr) {
//   return arr.reverse()
// };
// console.log(myArray([1, 2, 3, 4]))

// const myFlat = function(arr) {
//   return arr.flat()
// };
// console.log(myFlat( ["Hello", ["World", 42] ] ))


////////////////////////////////////////////////
// Solution without methods
////////////////////////////////////////////////
// 1) I want to take the last element of the array, then add it to the newArray.
// 2) To do this I'll need to loop through the array from the end to the beginning, because I want the last element to be first.
// 3) I want to output the contents of 'newArray' when the for loop is finished.

var myArray = [1, 2, 3, 4]

var reverseMyArray = function(arr) {
  var newArray = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
  }
  return newArray
}

console.log(reverseMyArray(myArray))