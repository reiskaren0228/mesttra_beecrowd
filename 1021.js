//importo o modulo fs (filesystem) para trabalhar com arquivos e diretorios
const fileSystem = require('fs')

//importo o modulo path para trabalhar com o endereço de arquivos e diretorios
const endereco = require('path');

//descubro o endereço de onde meu script js esta salvo
//ex: c:\documentos\javascript
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin que foi criado
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');

//define qual é a quebra de linha utilizada no seu sistema operacional
//se você estiver utilizando linux coloque \n se for windows coloque \r\n
const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
let [valor] = lines.shift().split(" "); 

//para ler linhas com um unico valor na mesma linha use o comando a seguir
// let N = lines.shift();   

const notas = [100, 50, 20, 10, 5, 2];

console.log(`NOTAS:`); 
for (let nota of notas) {
    const quantidadeNotas = Math.floor(valor / nota);
    console.log(`${quantidadeNotas} nota(s) de R$ ${nota}.00`);
    valor %= nota; 
}


console.log(`MOEDAS:`);

let moeda1 = valor / 1;
console.log(`${Math.floor(moeda1)} moeda(s) de R$ 1.00`);
valor = valor % 1;

let moeda50 = valor / 0.50;
console.log(`${Math.floor(moeda50)} moeda(s) de R$ 0.50`);
valor = valor % 0.50;

let moeda25 = valor / 0.25;
console.log(`${Math.floor(moeda25)} moeda(s) de R$ 0.25`);
valor = valor % 0.25;

let moeda10 = valor / 0.10;
console.log(`${Math.floor(moeda10)} moeda(s) de R$ 0.10`);
valor = valor % 0.10;

let moeda5 = valor / 0.05;
console.log(`${Math.floor(moeda5)} moeda(s) de R$ 0.05`);
valor = valor % 0.05;

let moeda1cent = valor / 0.01;
console.log(`${moeda1cent.toFixed(0)} moeda(s) de R$ 0.01`);
valor = valor % 0.01;






