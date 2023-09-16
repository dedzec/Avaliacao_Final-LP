/* Questão: 4. Escreva um algoritmo que leia 2 números e imprima o resultado
    da divisão do primeiro pelo segundo. Caso não for possível mostre a
    mensagem “divisao impossivel” para os valores em questão.
    Entrada
    A entrada contém um número inteiro N. Este N será a quantidade de pares
    de valores inteiros (X e Y) que serão lidos em seguida.
    Saída
    Para cada caso mostre o resultado da divisão com um dígito após o ponto
    decimal, ou “divisao impossivel” caso não seja possível efetuar o cálculo.
    Obs.: Cuide que a divisão entre dois inteiros em algumas linguagens como o
    C e C++ gera outro inteiro. Utilize cast :)
 * Matricula: 2023111EPDMD0014
 * Aluno: Lucas Leal Magalhães
 * Data: 16/09/2023
 **/
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n, x, y;
let size = lines.shift();

for (i = 0; i < size; i++){
  n = lines.shift().split(" ");

  x = parseInt(n[0]);
  y = parseInt(n[1]);

  if (isFinite(x / y) === false ){
    console.log("divisao impossivel");
  }
  else{
    console.log(parseFloat(x / y).toFixed(1));
  }
}