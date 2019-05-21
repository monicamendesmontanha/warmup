console.log(
  "%c--Happy Numbers, Warmup Exercise--",
  "color: blue; background-color: yellow;"
);

const happyNums = {
  happyList: [],

  squareSumHelper (num) {
    let sum = 0;

    let numStr = num.toString();

    for ( let i = 0; i < numStr.length; i++ ) {
      sum += +numStr[ i ] * +numStr[ i ]
    }

    // while (num > 0) {
    //   digit = num % 10;
    //   sum += digit * digit;
    //   num = (num - digit) / 10;
    // }
    console.log(sum);
    return sum;
  },

  isHappyLogic (num) {
    let cycle = {};
    let squareSum = num;
    let count = 0;
    console.log("new number to check: ", num);

    while (true) {
      squareSum = this.squareSumHelper(squareSum);
      console.log("================================");

      console.log("squareSum", squareSum);

      if (squareSum === 1) {
        console.log("squareSum is now 1 we have found a happy number", num);
        return this.happyList.push(num)
      }

      if (cycle[squareSum]) {
        console.log("detected a repeating pattern. STOP CHECKING");
        return false;
      }

      cycle[squareSum] = true;
      count++;
      console.log("cycle", cycle);
    }
  },

  printHappyList(num) {
    for ( let i = 0; this.happyList.length < num; i++ ) {
      this.isHappyLogic(i);
    }
    console.log(this.happyList);
    return this.happyList;
  }
}

// happyNums.squareSumHelper( 16 );
happyNums.printHappyList( 10 );