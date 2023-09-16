/* Questão: 2. Leia um valor inteiro correspondente à idade de
    uma pessoa em dias e informe-a em anos, meses e dias
    Obs.: apenas para facilitar o cálculo, considere todo ano com 365
    dias e todo mês com 30 dias. Nos casos de teste nunca haverá uma
    situação que permite 12 meses e alguns dias, como 360, 363 ou 364.
    Este é apenas um exercício com objetivo de testar raciocínio matemático simples.
    Entrada
    O arquivo de entrada contém um valor inteiro.
    Saída
    Imprima a saída conforme exemplo fornecido.
 * Matricula: 2023111EPDMD0014
 * Aluno: Lucas Leal Magalhães
 * Data: 16/09/2023
 **/
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var days = parseInt(lines.shift());

var years = Math.floor(days / 365);
var months = Math.floor((days % 365) / 30);
var days = Math.floor((days % 365) % 30);

console.log(`${years} ano(s)`);
console.log(`${months} mes(es)`);
console.log(`${days} dia(s)`);