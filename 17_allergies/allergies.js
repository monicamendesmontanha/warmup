console.log(
  "%c--Alergies, Warmup Exercise--",
  "color: blue; background-color: yellow;"
);


const allergens = {

  scoreCard: {
    1: "eggs",
    2: "peanuts",
    4: "shellfish",
    8: "strawberries",
    16: "tomatoes",
    32: "chocolate",
    64: "pollen",
    128: "cats"
  },

  getKeys: function(itens) {

    const allergiesKeys = Object.keys(this.scoreCard).map(Number).reverse();
    console.log(allergiesKeys);

    return allergiesKeys;
  },

  getList: function(score) {
    const keys = this.getKeys();

    let allergies = [];

    for (var i = 0 ; i < keys.length ; i++ ) {
      let key = keys[i];

      console.log(`key: ${key}, score: ${score}.`);

      if(score >= key) {
        allergies.push(this.scoreCard[key]);

        score -= key;
      }
    }

    console.log(allergies);
    return allergies;
  },

  diagnosis: function(score) {
    const allergyList = this.getList(score);

    if (allergyList.length > 0) {
      console.log(`You are allergic to ${allergyList.join(',')}.`);
    } else {
      console.log("You are perfectly healthy.")
    }
  }


}

console.log( allergens.diagnosis(34) );
console.log( allergens.diagnosis(0) );