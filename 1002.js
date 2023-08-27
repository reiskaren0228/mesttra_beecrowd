var input = require("fs").readFileSync("stdin", "utf8");
var valores = input.split("\n");

var pi = 3.14159;
var raio = parseFloat(input);

var area = pi * (Math.pow(raio, 2));//Math.pow faz o numero elevado parametro passado

console.log("A=" + area.toFixed(4));//abreviando em quatro casas decimais o resultado

