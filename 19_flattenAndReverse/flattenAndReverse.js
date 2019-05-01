console.log(
  "%c--Flatten and Reverse, Warmup Exercise--",
  "color: blue; background-color: yellow;"
);

const myArray = function(arr) {
  return arr.reverse()
};

console.log(myArray([1, 2, 3, 4]))


const myFlat = function(arr) {
  return arr.flat()
};

console.log(myFlat( ["Hello", ["World", 42] ] ))