var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n');

var pi = 3.14159;
var R = parseFloat(input);

var MEDIA = (((4.0/3.0) * pi) * (Math.pow(R, 3)));

console.log("VOLUME = " + MEDIA.toFixed(3));