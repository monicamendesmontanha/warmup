console.log(
  "%c--Google Interview Question, Warmup Exercise--",
  "color: blue; background-color: yellow;"
);

/////////////
// 1ª version
/////////////
// const findSum = (arr, val) => {
//   let searchValues = new Set();
//   searchValues.add(val - arr[0])

//   for (let i = 1; i < arr.length; i++) {
//     let searchVal = val - arr[i]

//     if (searchValues.has(arr[i])) {
//       return true;
//     } else {
//       searchValues.add(searchVal)
//     }
//   };

//   return false
// };

// console.log(findSum([3,5,1,4], 9));
// console.log(findSum([3,5,1,4], 2));

/////////////
// 2ª version
/////////////
const google = (array, sum) => {

  for (let i = array.length-1; i > 0; i--) {
      let val = array.pop();
      if ( array.includes( (sum - val) ) ) {
          return true;
      }
  }

  return false;
};

console.log( google([3, 5, 1, 4], 9) );
console.log( google([3, 5, 1, 4], 2) );