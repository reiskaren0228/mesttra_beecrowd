var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n');

//quebrando a entrada de dados de uma linha em variaveis separadas
//quando os valores estiverem na mesma linha
// lines = lines[0].split(" ");

//obtem o primeiro valor do arquivo stdin
// let variavel1 = parseFloat(lines[0]);
//obtem o segundo valor do arquivo stdin
// let variavel2 = parseFloat(lines[1]);

let [valor] = lines.shift().split(" ");

valor = parseFloat(valor);

if (valor >= 0 && valor <= 25) {
    console.log("Intervalo [0,25]");
} else if (valor > 25 && valor <= 50){
    console.log("Intervalo (25,50]");
}else if (valor > 50 && valor <= 75){
    console.log("Intervalo (50,75]");
}else if (valor > 75 && valor <= 100){
    console.log("Intervalo (75,100]");
}else {
    console.log("Fora de intervalo");
}