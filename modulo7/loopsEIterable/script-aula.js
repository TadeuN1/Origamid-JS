const frutas = ['Banana', 'Morango', 'Uva'];
const frase = 'Isso é JavaScript';

for(const fruta of frutas){
  console.log(fruta);
}

for(const char of frase){
  console.log(char);
}

const buttons = document.querySelectorAll('button');

for(const btn of buttons){
  btn.style.color = 'blue';
}

console.log(...buttons);

const carro = {
  marca: 'Honda',
  ano: 2018,
}

Object.defineProperties(carro, {
  rodas: {
    value: 4,
    enumerable: true,
  }
})

for(const chave in carro){
  console.log(carro[chave]);
}

let i = 0;
do {
  console.log(i++);
} while ( i <= 5);