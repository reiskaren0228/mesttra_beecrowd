var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n');

var [A, B, C] = input.split(" ").map(item => parseInt(item));//mapea os items que estão debtro do array e transforma em float

var maiorAB = ((A + B + Math.abs(A - B)) / 2);

var maiorAC = (C + maiorAB + Math.abs(C - maiorAB)) / 2; //Math.abs => retorna o valor absoluto de um determinado argumento. Se o argumento não for negativo, o argumento será retornado.

console.log(maiorAC + " eh o maior");