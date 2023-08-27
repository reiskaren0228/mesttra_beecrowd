var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n');

var [A, B, C] = input.split(" ").map(item => parseFloat(item));//mapea os items que estão debtro do array e transforma em float

var pi = 3.14159;

var triangulo = (A * C) / 2.0;
var circulo = pi * (Math.pow(C, 2));
var trapezio = (((A + B) * C) / 2.0);
var quadrado= B * B;
var retangulo = A * B;

console.log("TRIANGULO: " + triangulo.toFixed(3));
console.log("CIRCULO: " + circulo.toFixed(3));
console.log("TRAPEZIO: " + trapezio.toFixed(3));
console.log("QUADRADO: " + quadrado.toFixed(3));
console.log("RETANGULO: " + retangulo.toFixed(3));