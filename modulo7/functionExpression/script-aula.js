/* function somar(a, b){
  return a + b;
}

console.log(somar); */

const somar = (a, b) => a + b;
const quadrado = a => a * a;

console.log(somar(4, 5));
console.log(quadrado(8));

const instrumento = 'Violão';

(() => {
  const instrumento = "Guitarra";
  console.log(instrumento);
})();

console.log(instrumento);