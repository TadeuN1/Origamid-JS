/* const regexp = /\w+/gi;
const regexp1 = new RegExp('\\d+', 'gi');


const frase = 'JavaScript Linguagem 101';

console.log(frase.replace(regexp1, 'X')); */

const frase = 'JavaScript, TypeScript, CoffeScript, Java';

const regexp = /\w+/g;
let regexpResult;

while((regexpResult = regexp.exec(frase)) !== null){
  console.log(regexpResult);
};