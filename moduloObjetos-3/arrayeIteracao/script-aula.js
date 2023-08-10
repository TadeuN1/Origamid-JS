/* const carros = ['Ford', 'Fiat', 'Honda'];

carros.forEach((item, index, array) =>{
  console.log(item, index, array);
})

const li = document.querySelectorAll('li');

li.forEach((item, index) => {item.classList.add('ativa' + index)});



const carros = ['Ford', 'Fiat', 'Honda'];

const novaArray = carros.map((item, index, array) =>{
    return item.toUpperCase();
})

const numeros = [2, 4, 5, 6, 78];
const numerosX2 = numeros.map( n => n * 2)
console.log(numerosX2);

console.log(novaArray);

const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const tempoAulas = aulas.map(aulas => aulas.min);

const nomeAulas = aula => aula.nome;

const arrayNomeAulas = aulas.map(nomeAulas);

console.log(arrayNomeAulas)
console.log(tempoAulas);
*/

// const aulas = [10, 25, 30];

// const reduceAulas = aulas.reduce((acumulador, item) => {
//   console.log(acumulador, item)
//   return acumulador + item ;
// },0);

// console.log(reduceAulas);

// const numeros = [10, 25, 30, 3, 54, 33, 22];

// const maiorNumero = numeros.reduce((anterior, atual) =>{
// return anterior > atual ? anterior : atual;
// }, 0)

// console.log(maiorNumero);

// const aulas = [
//   {
//     nome: 'HTML 1',
//     min: 15
//   },
//   {
//     nome: 'HTML 2',
//     min: 10
//   },
//   {
//     nome: 'CSS 1',
//     min: 20
//   },
//   {
//     nome: 'JS 1',
//     min: 25
//   },
// ]
// // var acumulador = {}
// // acumulador[0] = 'laalalal'
// const listaAulas = aulas.reduce((acumulador, atual, index) =>{
//   acumulador(index) = atual.nome;
//   return acumulador;
// }, {});

const frutas = ['Banana', 'Pêra', 'Uva'];

// const temUva = frutas.some((item) => {
//   return item === 'Uva';
// })

// const every = frutas.every((item) => {
//   return item === 'Uva';
// })

// console.log(every);
// console.log(temUva);

// const numeros = [6, 43, 20, 80, 60];

// const maiorQue3 = numeros.every(n => n >= 6);

// console.log(maiorQue3);

const indexUva = frutas.findIndex(item => {
  return item === 'Uva';
})
console.log(indexUva);

const frutas1 = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];

const arrayFrutas = frutas1.filter((item) =>{
  console.log(item);
  return item;
})

console.log(arrayFrutas);