var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n');

var A = lines.shift();
var B = lines.shift();

var mediaCar = A / B;

console.log(mediaCar.toFixed(3) + " km/l" );

