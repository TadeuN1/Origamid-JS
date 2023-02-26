console.log(Number.isNaN(NaN));
console.log(Number.isInteger(10.948123749187));


console.log(parseFloat('3212315644.098'));
console.log(parseFloat('100 Reais'));
console.log(parseInt('99.50'));


const preco = 10.32320;
console.log(preco.toFixed());

let valor = 48.49;

valor = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

console.log(valor);

const aleatorio = Math.floor(Math.random() * 10);
console.log(aleatorio);


// Número random entre 72 e 32

console.log(Math.floor(Math.random() * (72-32 +1)) + 32);

