/*Warmup - Serge Says
Examples
Serge answers 'Sure.' if you ask him a question.

He answers 'Woah, chill out!' if you yell at him (ALL CAPS).

He says 'Fine. Be that way!' if you address him without actually saying anything.

He answers 'Whatever.' to anything else.

Create a function that takes an input and returns Serge's response.
*/

const sergeResponse = function(input) {

  // if(input === "" || input === null || input === undefined){
  //   return "fine. Be that way!";
  // }
  //OR
  if(!input){
    return 'Fine. Be that way!';
  }

  if(input.endsWith("?")){
    return 'Sure.';
  } else if (input === input.toUpperCase()) {
    return 'Woah, chill out!';
  }
  return 'Whatever.'

}

console.log( sergeResponse("") );
console.log( sergeResponse(undefined) );
console.log( sergeResponse("Hello?") );
console.log( sergeResponse("HELLO") );
console.log( sergeResponse("Hello.") );
console.log( sergeResponse("HELLO.") );