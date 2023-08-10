// Crie uma função para verificar se um valor é Truthy
function isTruthy(dado){
  return !!dado;
}
console.log(isTruthy(23));
// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(lado){
  return lado * 4;
}
// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function meuNome(nome, sobrenome){
return nome + ' ' + sobrenome;
}
// Crie uma função que verifica se um número é par
function numeroPar(numero){
var modulo = numero % 2;
if(modulo === 0){
  return 'Numero par';
} else {
  return 'Numero ímpar';
}
}
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipodedado(info){
  return typeof info;
}
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function() {
 console.log('JoseTadeu');
});
// Corrija o erro abaixo

var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);