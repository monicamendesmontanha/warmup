console.log(
  "%c--Space Age, Warmup Exercise--",
  "color: blue; background-color: yellow;"
);
/*
Space Age Warmup
Given an age in seconds, calculate how old someone would be on the following planets:

Earth: orbital period 365.25 Earth days // 1 day
Mercury: orbital period 0.2408467 Earth years
Venus: orbital period 0.61519726 Earth years
Mars: orbital period 1.8808158 Earth years
Jupiter: orbital period 11.862615 Earth years
Saturn: orbital period 29.447498 Earth years
Uranus: orbital period 84.016846 Earth years
Neptune: orbital period 164.79132 Earth years

>> So if you were told someone were 1,000,000,000 seconds old, you should be able to say:

You are 31.68808781402895 Earth-years old
You are 131.56953287725742 Mercury-years old
You are 51.50882468824545 Venus-years old
You are 16.848054878116695 Mars-years old
You are 2.6712565327315225 Jupiter-years old
You are 1.0760876124018737 Saturn-years old
You are 0.37716350140100413 Uranus-years old
You are 0.1922922142624317 Neptune-years old

>> There are 31557600 seconds in an Earth year.

Bonus:
Have the option of either returning the ages on all planets, or any of the above planets individually.
*/

//version 01
// const spaceAge = {
//   data: {
//     Earth: 1,
//     Mercury: 0.2408467,
//     Venys: 0.61519726,
//     Mars: 1.8808158,
//     Jupiter: 11.862615,
//     Saturn: 29.447498,
//     Uranus: 84.016846,
//     Neptune: 164.79132
//   },
//   calculate: function(input) {
//     for (let key in this.data) {
//       console.log(key) //planet`s name
//       let earthYears = input / 31557600;
//       let value = this.data[key];
//       console.log(value)
//       let age = (earthYears / value).toFixed(2)
//       console.log(`Your age on ${key} is ${age}`);
//     }
//   }
// }
// console.log(spaceAge.calculate(1000000000));


//solution 02

const spaceAge = {
  earth: 1,
  mercury: 0.2408467,
  venus: 0.61519726,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132
}


const age = function(secondsOld){

  const planetYears = Object.entries(spaceAge);
  console.log(planetYears);

  for (var i = 0 ; i < planetYears.length ; i++ ) {

    console.log(planetYears[i])

    let earthYears = secondsOld / 31557600;   //There are 31557600 seconds in an Earth year.
    console.log(earthYears)

    // const time = Object.values(spaceAge)[i];
    const time = planetYears[i][1]
    // const planets = Object.key(spaceAge)[i];
    const timeEach = earthYears / time;
    console.log(`Your age on ${planetYears[i][0]} is ${timeEach}`);
  }

};

console.log( age(1000000000) );

// My solution with FOR...IN

  // for (const anythingIWant in spaceAge) {
  //   console.log(anythingIWant)
  //   console.log(spaceAge[anythingIWant])
  // }