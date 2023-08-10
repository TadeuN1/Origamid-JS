/* const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];

const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco:2000}],
function andar(nome) {
  console.log(nome);  
}];


const carros = new Array('Ford', 'Fiat', 'Honda');
carros[2] = 'Ferrari';
carros[3] = 'Kia';
carros[20] = 'Kia';
console.log(carros.length);


const li = document.querySelectorAll('li');
const arrayLi = Array.from(li);

const obj = {
  0: 'Tadeu',
  1: 'Neres',
  2: 'Teste',
  length: 3
}

const objArray = Array.from(obj);
console.log(arrayLi);
console.log(objArray);


console.log(Array.of(10));
console.log(Array(20));

const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
frutas.length; // 3

frutas[0].length; // 6
frutas[1].length; // 5
frutas[2].length; // 2


console.log(instrumentos.sort());


const carros = ['Ford', 'Fiat', 'VW'];
carros.unshift('Honda', 'Kia'); // 5
carros; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW'];

carros.push('Ferrari'); // 6
carros; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari'];


console.log(carros);
console.log(carros.reverse());


const carros = ['Ferrari', 'Ford', 'Fiat', 'VW', 'Parati', 'Gol'];

console.log(carros.splice(2, 1, 'Fusca'));
console.log(carros);
*/

console.log(['Item 1', 'Item 2', 'Item 3', 'Item 4'].fill('Banana'));

const transporte1 = ['Barco', 'Aviao'];
const transporte2 = ['Carro', 'Moto'];

console.log(transporte1.concat(transporte2, '332', 'Oi'));