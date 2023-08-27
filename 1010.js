var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n');

var [COD1, NUMPARTS1, VALUEPARTS1] = lines.shift().split(" "); //SPLIT TRASNFORMA EM ARRAY
var [COD2, NUMPARTS2, VALUEPARTS2] = lines.shift().split(" "); //SPLIT TRASNFORMA EM ARRAY


var SOLDS  = ((NUMPARTS1 * VALUEPARTS1) + (NUMPARTS2 * VALUEPARTS2));

console.log("VALOR A PAGAR: R$ " + SOLDS.toFixed(2));
