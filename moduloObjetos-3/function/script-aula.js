// const perimetro = new Function('lado', 'return lado * 4');

// function darOi(nome, idade) {
//   console.log('Oi para voce' + nome + idade);
// }
// darOi.call(null, 'Tadeu', 25);

// function descricaoCarro(){
//   console.log(this)
//   console.log(this.marca + ' ' + this.ano);
// }

// descricaoCarro.call({marca: 'Honda', ano: 2015});

// const carros = ['Ford', 'Fiat', 'VW'];
// const frutas = ['Banana', 'Uva', 'Pêra'];


// carros.forEach.call(carros, (item) => {
//   console.log(item)
// })

// function Dom(seletor) {
//   this.element = document.querySelector(seletor);
// }

// Dom.prototype.ativo = function(classe){
//   console.log(this);
//   this.element.classList.add(classe);
// }

// const li = {
//   element: document.querySelector('li')
// }
// Dom.prototype.ativo.call(li, 'ativar');

// const frutas = ['Uva', 'Maçã', 'Banana'];
// Array.prototype.pop.call(frutas);

// const li = document.querySelectorAll('li');
// const arrayLi = Array.from(li);

// const filtro = arrayLi.filter((item) =>{
//    return item.classList.contains('ativo');
// })

// console.log(filtro);

// console.log(li);

const carro = {
    marca: 'Ford',
    ano: 2018,
    acelerar: function(aceleracao, tempo) {
      return `${this.marca} acelerou ${aceleracao} em ${tempo}`
    }
}

const honda = {
  marca: 'Honda'
}

const acelerarHonda = carro.acelerar.bind(honda);

console.log(acelerarHonda(300, 20));

console.log(carro);