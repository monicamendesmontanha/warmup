console.log(
  "%c--Atbash Cipher, Warmup Exercise--",
  "color: blue; background-color: yellow;"
);

const cipher = function(text) {

  //ABCDEF to QWERTY map
  var map = {
    a: 'z', b: 'y', c: 'x',
    d: 'w', e: 'v', f: 'u',
    g: 't', h: 's', i: 'r',
    j: 'q', k: 'p', l: 'o',
    m: 'n', n: 'm', o: 'l',
    p: 'k', q: 'j', r: 'i',
    s: 'h', t: 'g', u: 'f',
    v: 'e', w: 'd', x: 'c',
    y: 'b', z: 'a'
  };

  // Convert to an array of characters, filter, iterate and finally join
  return text.split('').filter(function(v) {
    // Does the character exist in the map?
    // Filter out characters that are not in our list
    return map.hasOwnProperty(v.toLowerCase());
  }).map(function(v) {
    // Replace old character by new one
    // And make it uppercase to make it look fancier
    return map[v.toLowerCase()].toUpperCase();
  }).join('');

};

var text = 'test';
var encoded = cipher(text); // SVOOLDLIOW
console.log(encoded)