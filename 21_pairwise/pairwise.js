console.log(
  "%c--Pairwise, Warmup Exercise--",
  "color: blue; background-color: yellow;"
);

// version 1

// const pairwise = (array, sum) =>
//     /*
//     Primeiro laço (reduce) com os numeros recebidos no array
//     Inicio o reduce com um array contendo 2 posições,
//     um número inteiro que vai armazenar as somas dos indices e
//     um objeto que vai armazenar os indices já usados no processo
//     */
//    array.reduce((accumulator, currentValue, indexR, array) => {
//         /*
//         Segundo laço (forEach) para testar o valor recebido do reduce com cada valor do
//         array com a finalidade de satisfazer a condição do desafio
//         */
//        array.forEach((currentValue2, indexF) => {
//             /*
//             Se a condição for satisfeita, os indices são somados e armazenados na primeira posição do acumulador do reduce
//             Os indices já utilizados, são inseridos no objeto, presente na segunda posição
//             do acumulador do reduce, pois serão fundamentais na validação da condição
//             */
//             if (currentValue + currentValue2 === sum && indexR !== indexF && !accumulator[1][indexR] && !accumulator[1][indexF]) {
//               accumulator[0] += (indexR + indexF)
//               accumulator[1][indexR] = true
//               accumulator[1][indexF] = true
//             }
//         })
//         // Retorno o acumulador para a proxima interação
//         return accumulator
//     }, [0, {}])[0]

// console.log(pairwise([7, 9, 11, 13, 15], 20)) // 6
// console.log(pairwise([0, 0, 0, 0, 1, 1], 1)) // 10
// console.log(pairwise([1, 4, 2, 3, 0, 5], 7)) // 11
// console.log(pairwise([1, 3, 2, 4], 4)) // 1
// console.log(pairwise([1, 1, 1], 2)) // 1
// console.log(pairwise([], 100)) // 0




//------------------------------------------------//
// version 2 -------------------------------------//
//------------------------------------------------//
// reduce() executes the callback function once for each element present in the array, excluding holes in the array, receiving four arguments:
// Accumulator (acc)
// Current Value (cur)
// Current Index (idx)
// Source Array (arr())

// const pairwise = (arr, sum) => {

//   // Search array for elements that when paired, equal the second argument, then sum their indices
//   // use native reduce to collect running total of summed indices
//   const result = arr.reduce((acc, cur, index) => {

//     // get difference of current item so we know what value will sum to arg
//     let theOtherElement = sum - cur;

//     // check if theOtherElement value in rest of the array, but also make sure it doesn't match current theOtherElement index
//     if ((arr.indexOf(theOtherElement) !== -1) && arr.indexOf(theOtherElement) !== index) {

//       // if found, add to the runnning total
//       let total = index + arr.indexOf(theOtherElement);

//       // The splice() method changes the contents of an array by removing existing elements and/or adding new elements.
//       // array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
//       // start - Index at which to start changing the array (with origin 0). If greater than the length of the array, actual starting index will be set to the length of the array. If negative, will begin that many elements from the end of the array (with origin -1) and will be set to 0 if absolute value is greater than the length of the array.
//       // deleteCount - An integer indicating the number of old array elements to remove.
//       // item1, item2, ... - The elements to add to the array, beginning at the start index. If you don't specify any elements, splice() will only remove elements from the array.
//       // remove the other matched element from the array
//       arr.splice(arr.indexOf(theOtherElement), 1, NaN);

//       // remove current index from the array
//       arr.splice(index, 1, NaN);

//       //return the running total back to reduce for next item
//       return acc + total
//     }

//     // simply return previous total if no operations needed
//     return acc
//   }, 0) //arr.reduce
//   return result
// }

// console.log(pairwise([7, 9, 11, 13, 15], 20)); // => 6
// console.log(pairwise([1, 4, 2, 3, 0, 5], 7)); // => 11
// console.log(pairwise([1, 3, 2, 4], 4)); // => 1
// console.log(pairwise([0, 0, 0, 0, 1, 1], 1)); // => 10




//------------------------------------------------//
// version 3 -------------------------------------//
//------------------------------------------------//

const pairwise = (arr, sum) => {
  // Set sum of indices to zero
  let result = 0

  // Looping from first element
  for (let i = 0; i < arr.length; i++) {

    //Looping from second element and setting the start value as i + 1, so j is always behind j and they won't be the same
    for (let j = i + 1; j < arr.length; j++) {

      // No need to check if ( i !== j ) as i and j will never be the same
      if (arr[i] + arr[j] === sum) {
        result += i + j;

        //set the used values to empty so they won't be re-used in the next iteration
        arr[i] = "";
        arr[j] = "";
      }
    }
  }
  return result
}


console.log(pairwise([7, 9, 11, 13, 15], 20)) // 6
console.log(pairwise([0, 0, 0, 0, 1, 1], 1)) // 10
console.log(pairwise([1, 4, 2, 3, 0, 5], 7)) // 11
console.log(pairwise([1, 3, 2, 4], 4)) // 1
console.log(pairwise([1, 1, 1], 2)) // 1
console.log(pairwise([], 100)) // 0