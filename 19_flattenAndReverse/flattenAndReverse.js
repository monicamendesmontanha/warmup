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
// Solution without method reverse
////////////////////////////////////////////////
// 1) I want to take the last element of the array, then add it to the newArray.
// 2) To do this I'll need to loop through the array from the end to the beginning, because I want the last element to be first.
// 3) I want to output the contents of 'newArray' when the for loop is finished.


//version 1
const myArray = [1, 2, 3, 4]

const reverseMyArray = function(arr) {
  let newArray = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
  }
  return newArray
}

console.log(reverseMyArray(myArray))


//version 2
// const myArray = [1, 2, 3, 4]

// const reverseMyArray = function(arr) {
//   let newArray = [];
//   for (var i = 0; i < arr.length; i++) {
//     newArray.unshift(arr[i]);
//   }
//   return newArray
// }

// console.log(reverseMyArray(myArray))


////////////////////////////////////////////////
// Solution without method flat
////////////////////////////////////////////////


const myArray2 = ["Hello", ["World", 42] ]

const flatMyArray = function(arr) {
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    let currentElem = arr[i]

    if (currentElem instanceof Array) {
      // console.log("This is an instance of an array");

      for (let j = 0 ; j < currentElem.length; j++) {
        newArray.push(currentElem[j]);
      }
    } else {
        newArray.push(currentElem)
    }

  }
  console.log(newArray)
  return newArray
}

console.log(flatMyArray(myArray2))