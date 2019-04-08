console.log(
  "%c--Text Soup: Trump Edition, Warmup Exercise--",
  "color: blue; background-color: yellow;"
);
/*
Text Soup: Trump Edition
Today is a very special day. Spectacular even. My people, you are about to start what is objectively the worlds best warmup. Truly a special moment. Best of the best. This is not fake news. We are going to make warmups great again!

Using HTML, CSS, JavaScript + jQuery, create a web page which prints a random word from a large sample of text, in a random position on the page, every 100 milliseconds.

Today we will be using a random sample of tweets from America's greatest President to ever be in power, Mr. Donald J Trump better known on Twitter as @realDonaldTrump.

Hints:
Copy all of the text from the trump_tweets.txt file and paste the text into a hidden <div> element in your HTML file, and use jQuery to get the contents of the div.
For reference you can find more presidential content at Trump Twitter Archive
Bonus:
Fade the text in to make it appear, and then fade it out to disappear, to stop the page getting too dense with quality presidential twitter content.
Try random colours, random font sizes, rotation, whatever floats your boat.
*/

$(document).ready(function() {

  // This single line grabs the text contents of our div and returns it as one big string (the .html() jQuery method will grab any child HTML it contained too), then turns it into an array by splitting the string up based on a regular expression which looks for spaces, punctuation and newlines.
  // (That punctuation will not appear in the words that fill our new array.)
  // Note that .split() will accept a regex as well as just a string...

  const words = $('#words').text().split(/[ ,."';\n\-]+/)

  // console.log(words);

  // store the body in a variable to use later when appending
  const $body = $('body');

  // helper function to return a number between 0 and max
  const random = function(max) {
    return Math.floor(Math.random() * max);
  }

  // Our main function to randomly put a word on the page
  const putWord = function() {

    // Get a random word from our array, using our random helper funcion, with the word array length as the maximum value
    const randomIndex = random(words.length);

    // select random word
    const text = words[randomIndex];

    // Insert the random word as the content of a new div
    const $div = $('<div class="word">').html(text);

    // customize the divs css properties
    $div.css({
      top: random(window.innerHeight) + "px",
      left: random(window.innerWidth) + "px",
      fontSize: (40 + random(80)) + "px",
      color: "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")",
      transform: "rotate(" + random(360) + "deg)"
    })

    // apppend the new $div to the body
    $div.appendTo($body);

    // make the text fade in and fade out of the screen
    $div.fadeIn(1000).fadeOut(2000, function() {
      $(this).remove();
    })
  }

  // putWord()
  setInterval(putWord, 100);

});