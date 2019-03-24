/*
Warmup - Raindrops
Write a Javascript program that will take a number (eg 28 or 1755 or 9, etc) and output the following:

If the number contains 3 as a factor, output 'Pling'.
If the number contains 5 as a factor, output 'Plang'.
If the number contains 7 as a factor, output 'Plong'.
If the number does not contain 3, 5, or 7 as a factor, output the number as a string.

Examples
28 has 7 as a factor.
In raindrop-speak, this would be a simple "Plong".
1755 has 3 and 5 as factors.
In raindrop-speak, this would be a "PlingPlang".
34 has neither 3, 5 nor 7 as a factor.
Raindrop-speak doesn't know what to make of that, so it just goes with the straightforward "34".
*/

//-------------------
//OPTION 01

// const raindrops = function(n) {

//     if (n %3 === 0 && n %5 === 0 && n%7 === 0) {
//         return "PlingPlangPlong"
//     } else if (n %3 === 0 && n %5 === 0){
//         return "PlingPlang";
//     } else if (n %5 === 0 && n %7 === 0) {
//         return "PlangPlong";
//     } else if ( n %3 === 0 ) {
//         return "Pling";
//     } else if (n %5 === 0) {
//         return "Plang";
//     } else if (n % 7  === 0) {
//         return "Plong";
//     } else {
//         return n;
//     }
// };

// console.log(raindrops(105));
// console.log(raindrops(35));
// console.log(raindrops(1755));
// console.log(raindrops(9));
// console.log(raindrops(5));
// console.log(raindrops(49));
// console.log(raindrops(302));

//-------------------
//OPTION 02
// O operador condicional (ternário) é o único operador JavaScript que possui três operandos. 
//Este operador é frequentemente usado como um atalho para a instrução if.

// const raindrops = function(n) {
//     let string=""; 
//    string = string + (n %3 === 0 ? "Pling" : ""); 
//    string = string + (n %5 === 0 ? "Plang" : ""); 
//    string = string + (n %7 === 0 ? "Pling" : ""); 
//    string = string + (string.length<1 ? `${n}` : "");
//    return string;
// };

// console.log(raindrops(105));
// console.log(raindrops(35));
// console.log(raindrops(1755));
// console.log(raindrops(9));
// console.log(raindrops(5));
// console.log(raindrops(49));
// console.log(raindrops(302));


//OPTION 03

// const raindrops = function(n) {
//     let string = "";

//     if (n %3 === 0) {
//         string += "Pling";
//     };

//     if (n %5 === 0) {
//         string += "Plang";
//     };

//     if (n %7 === 0) {
//         string += "Plong";
//     };

//     if (string.length === 0) {
//         string += n;
//     };

//     return string;
    
// };


// console.log(raindrops(105));
// console.log(raindrops(35));
// console.log(raindrops(1755));
// console.log(raindrops(9));
// console.log(raindrops(5));
// console.log(raindrops(49));
// console.log(raindrops(302));



//---------------------------------------
//REFACTORING OPTION 03



const isAFactor = function(number, factor) {
    return number % factor === 0;
};

const raindrops = function(number) {
    let string = "";

    if (isAFactor(number, 3)) {
        string += "Pling";
    };

    if (isAFactor(number, 5)) {
        string += "Plang";
    };

    if (isAFactor(number, 7)) {
        string += "Plong";
    };

    if (string.length === 0) {
        string += number;
    };

    return string;
    
};

console.log(raindrops(105));
console.log(raindrops(35));
console.log(raindrops(1755));
console.log(raindrops(9));
console.log(raindrops(5));
console.log(raindrops(49));
console.log(raindrops(302));