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

// console.log(findSum([3,5,1,4], 9)); //true
// console.log(findSum([3,5,1,4], 2)); //false

/////////////
// 2ª version
/////////////
// const google = (array, sum) => {

//   for (let i = array.length-1; i > 0; i--) {
//       let val = array.pop();
//       if ( array.includes( (sum - val) ) ) {
//           return true;
//       }
//   }

//   return false;
// };

// console.log( google([3, 5, 1, 4], 9) ); //true
// console.log( google([3, 5, 1, 4], 2) ); //false


/////////////
// 3ª version
/////////////

const isSum = ( arr, sum ) => {

  function individualCheck( base=0, current=1 ) {
    // console.log(`individualCheck with base: ${ base } and current: ${ current }`);
    while ( base < arr.length ) {
      if ( base === current && base !== arr.length - 1 ) {
        // console.log('Checking with the number itself');
      } else
      if ( sum === arr[base] + arr[current] ) {
        return true;
      } else if ( base === arr.length - 1 && current === arr.length - 1 ) {
        return false;
      }

      if ( current >= arr.length - 1 ) {
        base += 1;
        current = 0;
      } else {
        current += 1;
      }
      individualCheck( base, current );
    }
  }

  return individualCheck();
}

console.log( isSum([3, 5, 1, 4], 9) ); // true
console.log( isSum([3, 5, 1, 4], 2) ); // false
