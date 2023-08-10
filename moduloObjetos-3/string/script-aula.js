/* const comida = 'Pizza';
const agua = new String('Agua');

console.log(agua.length);

const frase = 'A melhor comida'; 

console.log(frase[frase.length -1 ]);
console.log(frase.charAt(0));
const frase = 'A melhor linguagem é' ;
const linguagem = ' JavaScript' ;

const fraseFinal = frase.concat(linguagem);

const fruta = 'Banana'; 
const listaFrutas = 'Melancia, Banana, Laranja';

console.log(fruta.includes(listaFrutas));
console.log(listaFrutas.includes(fruta)); 

console.log(fruta.startsWith('Ba'));

const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

console.log(transacao1.slice(0, 3));


console.log(fruta.indexOf('B'));

const preco = 'R$ 99,00';

console.log(preco.padStart(10, '.')) */

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, ', ');

const arrayLista = listaItens.split(', ');

console.log(arrayLista);

const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';

console.log(sexo1.toLowerCase() === 'feminino');

const valor = '    R$ 30    ';

console.log(valor.trim());