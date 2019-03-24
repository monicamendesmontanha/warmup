

const fizzBuzz = function(number) {

  for (var i = 0; i < number; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
      result = "fizzbuzz";
    } else if (i % 3 === 0) {
      result = "fizz";
    } else if (i % 5 === 0) {
      result = "buzz";
    } else {
      result = i;
    }
    console.log(result);

  }
  return result

};

console.log(fizzBuzz(50));
