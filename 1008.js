var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n');

var NUMBER = parseInt(lines.shift());
var HOURS  = parseFloat(lines.shift());
var SALARY = parseFloat(lines.shift());

var VALUEHOURS = (HOURS * SALARY);

console.log("NUMBER = " + NUMBER);
console.log("SALARY = U$ " + VALUEHOURS.toFixed(2));