// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
console.log(total);
// Crie duas expressões que retornem NaN
var frase1 = 'Tadeu 25';
let frase2 = 'Naira 24';
console.log(frase1 * frase2);
console.log(frase2 / frase1);
// Somar a string '200' com o número 50 e retornar 250

var uni1 = +'200';
var uni2 = 50;
console.log(uni1 + uni2);

// Incremente o número 5 e retorne o seu valor incrementado
var incremento = 5;
console.log(++incremento);
// Como dividir o peso por 2?
var numero = +'80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = numero / 2; // NaN (Not a Number)
console.log(pesoPorDois + ' ' + unidade);