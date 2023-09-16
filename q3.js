/* Questão: 3. Faça um programa que leia um vetor A[100]. No final, mostre
    todas as posições do vetor que armazenam um valor menor ou igual a 10 e
    o valor armazenado em cada uma das posições. Dica: O valor de length do
    vetor lines no beecrowd é igual a 101.
    Entrada
    A entrada contém 100 valores, podendo ser inteiros, reais, positivos ou negativos.
    Saída
    Para cada valor do vetor menor ou igual a 10, escreva "A[i] = x", onde i é a
    posição do vetor e x é o valor armazenado na posição, com uma casa após o
    ponto decimal.
 * Autor: Lucas Leal Magalhães
 * Data: 16/09/2023
 **/
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
let number = parseFloat(lines.shift());
let array = [];
let array_answer = [];

for(let i = 0; i <= 99; i++){
  array.push(number);
  number = parseFloat(lines.shift());
}

for(let i = 0; i < array.length; i++){
  if (array[i] <= 10) {
    array_answer[i] = array[i];
    number = parseFloat(lines.shift());
  } else {
    number = parseFloat(lines.shift());
  }
}

for(let i = 0; i <= array_answer.length; i++){
  if(array_answer[i] !== undefined){
    console.log(`A[${i}] = ${array_answer[i].toFixed(1)}`);
  }
}