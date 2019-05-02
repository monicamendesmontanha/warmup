# Text Soup 2: the Widgeting

Using the solution for the presidential text soup, and the dat.gui Javascript library, add controller elements to the Text Soup page to allow real-time control of the following parameters from within the browser:

* fade in time (i.e. a range from 1 to 5000 milliseconds)
* fade out time
* font size

## BONUS:
* add a controller to change the add word interval (consider example#7 from the page above, and this example)
* add a controller to change the text colour using the colour controller (example#4)
* add a text field controller, and use the word(s) from the text field in between every other random word that is added
* add a button controller which clears all words off the screen when pressed

## HINTS:
* To make sure you have the up-to-date Text Soup warmup solution in your fork of the homework repo, and to copy it to a new folder to work on, run these commands in iTerm (BUT MAKE SURE YOU'RE UPDATING THE FILE NAMES APPROPRIATELY):

```
cd ~/wdi/homework
git pull upstream master
cp -r warmups/week03/day01_textsoup ~/{your-path-to-the-warmup}/textsoup2
cd ~/{your-path-to-the-warmup}/textsoup2
curl https://raw.githubusercontent.com/dataarts/dat.gui/master/build/dat.gui.js >js/dat.gui.js
atom .
```

Now you have a copy of the Text Soup warmup in a new folder in your wdi folder (assuming you already have a ~/wdi folder. We're making this copy so you don't work directly on my warmup solution code in the homework repo, which would cause a merge conflict next time you commit.

Also, you're getting the dat.gui.js file!

* It's probably best not to use the constructor-style example in the dat.gui page I linked to. It will be simpler to just use an object to store your controller variables, like so:

```
var controllers = {
  fadeInSpeed: 100,
  // etc..
};

var gui = new dat.GUI();
gui.add(controllers, 'fadeInSpeed', // etc...
```