const regexp = /\w+/gi;
const regexp1 = new RegExp('\\d+', 'gi');


const frase = 'JavaScript Linguagem 101';

console.log(frase.replace(regexp1, 'X'));

const frase = 'JavaScript, TypeScript, CoffeScript, Java';

const regexp = /Script/g;

const resultados = frase.split(regexp);

console.log(resultados); 

const tags = `
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>`

const regexp = /(?<=<\/?)\w+/g;

const resultado = tags.replace(regexp, 'div');
console.log(resultado);

const emails = `
empresa@email.com
contato@email.com
suporte@email.com
`;

const regexp = /(\w+@)[\w.]+/g;

const resultado = emails.replace(regexp, '$1gmail.com');

console.log(resultado);