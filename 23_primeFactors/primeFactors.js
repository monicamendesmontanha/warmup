console.log(
  "%c--Prime Factors, Warmup Exercise--",
  "color: blue; background-color: yellow;"
);

const primeFactors = num => {
  let factorsArray = [];

  for ( let i = 2; i <= num; i++ ) {
    while (num % i === 0) {
      factorsArray.push(i)

      num = num/i
    }
  }

  return factorsArray
}

console.log(primeFactors(60));