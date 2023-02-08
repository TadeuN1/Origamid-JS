const listaAnimais = document.querySelector('.animais-lista');

const height = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop;

const primeiroh2 = document.querySelector('h2');

const rect =  primeiroh2.getBoundingClientRect();

console.log(rect);

if(rect.top < 0 ){
  console.log('Passou do elemento');
}

console.log(
  window.innerWidth,
  window.outerWidth,
  window.innerHeight,
  window.outerHeight,
  window.pageYOffset
);

const small = window.matchMedia('(max-width: 600px)').matches;

if(small){
  console.log('Usuario mobile');
} else {
  console.log ('usuario desktop');
}