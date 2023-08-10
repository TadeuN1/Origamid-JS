function Pessoa(nome, idade){
  this.nome = nome;
  this.idade = idade;
}

var obj = {
  nome: 'DaTeu',
  idade: 33,
}

Pessoa.prototype.andar = function(){
  return this.nome + ' Pessoa andou';
}

Pessoa.prototype.nadar = function(){
  return this.nome + ' Pessoa nadou';
}


const tadeu = new Pessoa('Tadeu', 25);

/* console.log(Pessoa.prototype); */

const país = 'Brasil';
const cidade = new String('Rio');


const listaAnimais = ['Cachorro', 'Gato', 'Cavalo'];

/* Array.prototype.slice.call === Array.from */

const Carro = {
  marca: 'Ford',
  preco: 2000,
  andar(){
    return true;
  }
}