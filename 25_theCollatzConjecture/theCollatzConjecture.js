console.log(
  "%c--The Collatz Conjecture, Warmup Exercise--",
  "color: blue; background-color: yellow;"
);

// Example: For instance, starting with n = 12,
// one gets the sequence 12, 6, 3, 10, 5, 16, 8, 4, 2, 1.

//  Example: n = 19, for example, takes longer to reach 1:
//  19, 58, 29, 88, 44, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1.

  const collarz = num => {
    let collection = [num];

    const makeCollection = () => {
      while (collection[collection.length - 1] > 1) {
        const currentNum = collection[collection.length - 1];

        const nextNum = currentNum % 2 === 0 ? (currentNum / 2) : (currentNum * 3 + 1);

        collection.push(nextNum)
        // console.log(collection);
      }
    } // makeCollection

    const answer = () => {
      console.log(`The function ran ${collection.length - 1} times.`);
      console.log(`The process was: ${collection.join(', ')}`);
    }

    makeCollection();
    answer();

    return {
      start: num,
      collection: collection,
      steps: collection.length - 1
    }
  }

  console.log(collarz(2030))


