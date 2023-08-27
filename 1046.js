var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n');

const horas = lines[0].split(' ');
var horaInicial = parseInt(horas[0]);
var horaFinal =   parseInt(horas[1]);

let duracao;

if (horaInicial < horaFinal) {
  duracao = horaFinal - horaInicial;
} else {
  duracao = 24 - horaInicial + horaFinal;
}

console.log(`O JOGO DUROU ${duracao} HORA(S)`);
