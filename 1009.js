var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n');

var NAME = lines.shift();
var SALARYFIXED = parseFloat(lines.shift());
var SALESTOTAL  = parseFloat(lines.shift());

var SALARYMOUTHS = SALARYFIXED +  (SALESTOTAL * 0.15);

console.log("TOTAL = R$ " + SALARYMOUTHS.toFixed(2));