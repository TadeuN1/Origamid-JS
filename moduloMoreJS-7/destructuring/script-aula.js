const cliente = {
  nome: 'Andre',
  compras: {
    digitais: {
      livros: ['Livro 1', 'Livro 2'],
      videos: ['Video JS', 'Video HTML']
    },
    fisicas: {
      cadernos: ['Caderno 1']
    }
  }
}

console.log(cliente.compras.digitais.livros);
console.log(cliente.compras.digitais.videos);

const {livros, videos} = cliente.compras.digitais;

console.log(livros);
console.log(videos); 

const cliente2 = {
  nome: 'Tadeu',
  compras: 25,
}

const {nome: nomeTadeu} = cliente2;


const frutas = ['Banana', 'Uva', 'Morango'];

const [primeira, segunda, terceira] = frutas;
console.log(segunda);


 function handleKeyboard({key, keyCode}){
  console.log(key, keyCode);

 }

 document.addEventListener('keyup', handleKeyboard);