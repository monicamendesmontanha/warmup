console.log(
  "%c--Prime Factors, Warmup Exercise--",
  "color: blue; background-color: yellow;"
);

////////////
// Version 1
////////////

const primeFactors = num => {
  let factorsArray = [];

  for ( let i = 2; i <= num; i++ ) {
    while (num % i === 0) {
      factorsArray.push(i)

      // console.log("found factor", i, "factorsArray", factorsArray);

      num = num/i
      // console.log("out of while loop; now test i <= num", i, num);
    }
  }

  return factorsArray
}

console.log(primeFactors(60));




////////////
// Version 2
////////////

const prime = {

  // all the numbers within the range of 2-num
  range: [],

  // all the prime numbers within that range
  primeRange: [],

  // the prime numbers that are also factors of the input
  primeFactorRange: [],

  getRange ( num ) {
    this.range = [];

    for ( let i = 2; i <= num; i++ ) {
      this.range.push(i)
    }
    return this.range
  },

  getPrimeRange (arr) {
    this.primeRange = [];

    for ( let i = 0; i < arr.length; i++ ) {
      let isPrime = true;

      let potentialPrime = arr[i];

      for ( let j = 2; j < potentialPrime; j++ ) {
        if (potentialPrime % j === 0) {
          isPrime = false
        }
      }

      if (isPrime === true) {
        this.primeRange.push(potentialPrime)
      }
    }

    return this.primeRange
  },

  getPrimeFactors (num) {
    this.primeFactorRange = [];

    let numPrimes = this.getPrimeRange(this.getRange(num));

    // console.log("numPrimes", numPrimes);

    for ( let i = 0; i < numPrimes.length; i++ ) {
      while (num % numPrimes[i] === 0) {
        this.primeFactorRange.push(numPrimes[i])

        num /= numPrimes[i]
      }
    }

    return this.primeFactorRange
  }
}

console.log(prime.getPrimeFactors(60));