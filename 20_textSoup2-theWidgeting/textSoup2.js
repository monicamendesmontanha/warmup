console.log(
  "%c--Text Soup 2: The Widgeting, Warmup Exercise--",
  "color: blue; background-color: yellow;"
);
$(document).ready(function() {

  let timer = null;
  let counter = 0;

  // This object will store all the variables we want the GUI contorls to change
  //  we need to use an object structure because that is what the library documentation expects

  const controller = {
    fadeInSpeed: 1000,
    fadeOutSpeed: 2000,
    fontSizeRange: 80,
    timerInterval: 100,
    textColor: '#32df1d',
    addWord: '',
    clearWords: function() {
      $('.word').remove();
    }
  }

  const gui = new dat.GUI();

  // add the various controller elements
  // Note that we pass our controls object as a variable, but the internal properties (vairbales) as a string
  // We also need to specify a min and max for the slider

  gui.add(controller, 'fadeInSpeed', 1, 2000);
  gui.add(controller, 'fadeOutSpeed', 1, 3000);
  gui.add(controller, 'fontSizeRange', 1, 300);

  // in order to use the onFinishChange event handler for a gui element, we need to
  // keep track of the return value of gui.add, a reference to the element to attach to our event handler
  const timerController = gui.add(controller, 'timerInterval', 1, 1000);

  timerController.onFinishChange(function(value) {
    // We'd better clear the old timer first, or we'll have multiple setInnterval timers running
    clearInterval(timer);

    timer = setInterval(putWord, value);
  })

  gui.addColor(controller, 'textColor');
  gui.add(controller, 'addWord');
  gui.add(controller, 'clearWords');


  /////////////////////////////////////////////////////////////////////

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
    // const text = words[randomIndex];

    let text = '';

    if ((controller.addWord.length > 0) && (counter % 2 === 0)) {
      text = controller.addWord;
    } else {
      text = words[randomIndex];
    }

    // Insert the random word as the content of a new div
    const $div = $('<div class="word">').html(text);

    // customize the divs css properties
    $div.css({
      top: random(window.innerHeight) + "px",
      left: random(window.innerWidth) + "px",
      fontSize: (40 + random(controller.fontSizeRange)) + "px",
      color: controller.textColor,
      transform: "rotate(" + random(360) + "deg)"
    })

    // apppend the new $div to the body
    $div.appendTo($body);

    // make the text fade in and fade out of the screen
    // $div.fadeIn(1000).fadeOut(2000, function() {
    //   $(this).remove();
    // })

    $div.fadeIn(controller.fadeInSpeed).fadeOut(controller.fadeOutSpeed,
    function () {
      $(this).remove();
    });

    // Need to increment our counter at ther end of ervey call to putWord()
    counter ++;
  }

  // putWord()

  // We keep track of the ID returned by setInterval when we first run it here
  // so we can cancel it later in our onFinishChange event handler for the GUI slider
  timer = setInterval(putWord, 100);

});
