/* Questão: 7. System of a Download é uma famosa banda de Hacker Metal! Certa vez,
    eles criaram um dispositivo, com seis botões, numerados de 0 a 5, e colocaram
    nesse dispositivo os seus 11 maiores sucessos. Para tocar uma destas músicas,
    é preciso pressionar dois botões. Com isso, os números destes dois botões são
    somados, e então toca-se a música correspondente ao número da soma, conforme a
    relação abaixo:
    0 - PROXYCITY
    1 - P.Y.N.G.
    2 - DNSUEY!
    3 - SERVERS
    4 - HOST!
    5 - CRIPTONIZE
    6 - OFFLINE DAY
    7 - SALT
    8 - ANSWER!
    9 - RAR?
    10 - WIFI ANTENNAS
    Por exemplo, se os botões pressionados forem 3 e 4, irá tocar a música 7 - SALT
    Escreva um programa que, dados os dois botões que forem pressionados, determine
    qual música irá tocar.
    Entrada
    Um número inteiro C será informado, que será a quantidade de casos de teste. Cada
    caso tem dois valores inteiros, X e Y, representando quais botões foram
    pressionados.
    Saída
    Para cada caso de teste, imprima o nome da música correspondente.
 * Matricula: 2023111EPDMD0014
 * Aluno: Lucas Leal Magalhães
 * Data: 16/09/2023
 **/
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const n = lines.shift();
let total = 0;
let i = 0;

while(i < n){
  let [x, y] = lines.shift().split(" ");
  total = parseInt(x) + parseInt(y);
  switch(total){
    case 0:
      console.log("PROXYCITY");
      break;
    case 1:
      console.log("P.Y.N.G.");
      break;
    case 2:
      console.log("DNSUEY!");

      break;
    case 3:
      console.log("SERVERS");

      break;
    case 4:
      console.log("HOST!");

      break;
    case 5:
      console.log("CRIPTONIZE");

      break;
    case 6:
      console.log("OFFLINE DAY");
      break;
    case 7:
      console.log("SALT");
      break;
    case 8:
      console.log("ANSWER!");
      break;
    case 9:
      console.log("RAR?");
      break;
    case 10:
      console.log("WIFI ANTENNAS");
      break;
  }
  sum = 0;
  i++;
}