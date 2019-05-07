console.log(
  "%c--Phone Number Check, Warmup Exercise--",
  "color: blue; background-color: yellow;"
);

// Version 1

const phoneNumber = {
  // old syntax
  // cleanNumber: function() {
  //
  // }
  //////////////////////////////////////
  // new syntax
  // cleanedNumber () {
  //
  // }
  //////////////////////////////////////

  cleanNumber (num) {
    let cleanNum = [];
    let numerals = "0123456789";

    for ( let i = 0; i < num.length; i++ ) {
      let currentNum = num[i]

      if (numerals.indexOf(currentNum) !== -1) {
        cleanNum.push(currentNum)
      }
    }

    cleanNum = cleanNum.join("");
    console.log(cleanNum);

    if ((cleanNum.length === 11) && (cleanNum[0] === "1")) {
      return cleanNum.substr(1);
    } else {
      return cleanNum
    }
  },

  isValid (num) {
    let cleanedNum = this.cleanNumber(num);

    console.log("inside isValid", cleanedNum);

    if (cleanedNum.length !== 10) {
      return "0000000000"
    } else {
      return cleanedNum
    }
  },

  getFormattedNumber (num) {
    let validNum = this.isValid(num)

    let areaCode = validNum.substr(0, 3);
    let exchangeCode = validNum.substr(3, 3);
    let remaining = validNum.substr(6);
    return `(${areaCode}) ${exchangeCode}-${remaining}`
  }
}

const num1 = "112345s67#89mm0"

console.log(phoneNumber.cleanNumber(num1));
console.log(phoneNumber.isValid(num1));
console.log(phoneNumber.getFormattedNumber(num1));