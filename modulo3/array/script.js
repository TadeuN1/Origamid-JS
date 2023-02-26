const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array
const primeiraComida = comidas.shift(0);
console.log(primeiraComida);
const ultimaComida = comidas.pop(0);
console.log(ultimaComida);
comidas.unshift('Peixe', 'Batata');
comidas.push('Arroz');
console.log(comidas);


const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes

console.log(estudantes.sort());
console.log(estudantes.reverse());

console.log(estudantes.includes('Joana'));
console.log(estudantes.includes('Juliana'));


let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join

html = html.split('section');
html = html.join('ul');
html = html.split('div');
html = html.join('li');
console.log(html);

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável

const original = carros;
console.log(original);

carros.pop(3);
console.log(carros);