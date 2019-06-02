console.log(
  "%c--Dashatize, Warmup Exercise--",
  "color: blue; background-color: yellow;"
);


const dashatize = (number) => {
  let numberToString = Math.abs(number) + '';

  let result = [numberToString[0]];

  while (numberToString > 0) {

    for (let i = 1; i < numberToString.length; i++) {
      result.push('-', numberToString[i]);
    }
    return result.join('');
  }
  return numberToString
}


console.log(dashatize(274)); // 2-7-4
console.log(dashatize(86320)); // 86-3-20
console.log(dashatize(NaN)); // NaN
console.log(dashatize(0)); // 0
console.log(dashatize(-1)); // 1
console.log(dashatize(-28369)); // 28-3-6-9