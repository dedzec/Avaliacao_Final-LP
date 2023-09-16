/* Questão: 6. Frodo era um pequeno hobbit (pessoinhas pequenas e de pés peludos)
    que vivia tranquilamente no Condado, tomando seus vários cafés da manhã
    recheados de muitos alimentos suculentos que a dieta de um bom hobbit proporciona.
    Certo dia, seu tio Bilbo lhe entrega seu famoso anel dourado, e Gandalf, um mago
    muito “bacanudo”, diz a Frodo que esse anel não era normal e que deveria ser
    jogado na Montanha da Perdição, para que um grande mal fosse evitado. Para essa
    jornada, foi formada uma comitiva, composta de anões, elfos, humanos, hobbits e
    magos. Frodo deseja saber a quantidade de cada raça que irá com ele para a
    jornada. Dada uma lista das pessoas que se alistaram, faça um relatório para Frodo
    da comitiva.
    Entrada
    A primeira linha da entrada é composta por um inteiro N(0 < N <= 10), indicando o
    número de pessoas que se alistaram. Cada uma das próximas N linhas seguintes são
    compostas por uma cadeia de caracteres (sem espaços e de caracteres alfanuméricos
    apenas) e um caractere maiúsculo, indicando, respectivamente, o nome e o tipo da
    raça do respectivo ser. Este caractere poderá ser:
      ● A - Para anões;
      ● E - Para elfos;
      ● H - Para humanos;
      ● M - Para magos;
      ● X - Para hobbits (X, pois todo hobbit é uma incógnita para o mundo).
    Saída
    Deve ser apresentado um relatório com a comitiva do Frodo, indicando em cada linha
    quantos seres de cada espécie estarão na jornada, seguindo a ordem: hobbits,
    humanos, elfos, anões e magos.
 * Matricula: 2023111EPDMD0014
 * Aluno: Lucas Leal Magalhães
 * Data: 16/09/2023
 **/
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const number = parseInt(lines.shift());
let anoes = 0;
let elfos = 0;
let humanos = 0;
let magos = 0;
let hobbits = 0;

for(let i = 0; i < number; i++){
  let [a, b] = lines.shift().trim().split(" ");
  switch(b){
    case "A":
      anoes++;
      break;
    case "E":
      elfos++;
      break;
    case "H":
      humanos++;
      break;
    case "M":
      magos++;
      break;
    case "X":
      hobbits++;
      break;
  }
}

console.log(`${hobbits} Hobbit(s)\n${humanos} Humano(s)\n${elfos} Elfo(s)\n${anoes} Anao(oes)\n${magos} Mago(s)`);
