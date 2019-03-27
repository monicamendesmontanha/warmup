console.log(
  "%c--99 bottles of beer, Warmup Exercise--",
  "color: blue; background-color: yellow;"
);
/*
99 bottles of beer
"99 Bottles of Beer" is a traditional reverse counting song.

It is popular to sing on long trips, as it is repetitive and easy to memorise but -- it can take a long time to sing.

Lets try and make it run a little quicker using code:

The song's lyrics are as follows:

99 bottles of beer on the wall, 99 bottles of beer.
Take one down, pass it around, 98 bottles of beer on the wall...
The same verse is repeated, each time with one bottle fewer, until there are none left.

Bear in mind, not all verses are the same:

The verse for 1 bottle is as follows:

1 bottle of beer on the wall, 1 bottle of beer.
Take it down and pass it around, no more bottles of beer on the wall.
The verse for 0 bottles is as follows:

No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.
Bonus:
Count through any number of bottles.
Be able to count between a range of numbers (ie, 20 to 10).*/

const countBeers = function(fromNumber, toNumber) {
  for (var i = fromNumber ; i >= toNumber; i--) {
    const counting = i ;
    //console.log(counting);

    if (counting === 1) {
      const OneBottleLyrics = `1 bottle of beer on the wall, 1 bottle of beer. Take it down and pass it around, no more bottles of beer on the wall.`;
      console.log(OneBottleLyrics);
    } else if (counting === 0) {
      const ZeroBottleLyrics = `No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, ${fromNumber} bottles of beer on the wall.`;
      console.log(ZeroBottleLyrics);
    } else {
      const lyrics = `${counting} bottles of beer on the wall, ${counting} bottles of beer. Take one down, pass it around, ${counting -
        1} bottles of beer on the wall...`;
      console.log(lyrics);
    }
  }
};

console.log(countBeers(99, 0));
