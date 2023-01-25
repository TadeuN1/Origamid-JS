window.alert('Tô troll');

const h1Selecionado = document.querySelector('h1');

// Retorne o url da página atual utilizando o objeto window
const hrefpagina = window.location.href;
console.log(hrefpagina);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const elementoAtivo = document.querySelector('.ativo')
// Retorne a linguagem do navegador
const linguagem = window.navigator.language;
console.log(linguagem);
// Retorne a largura da janela 

const windowWidth = window.innerWidth;
console.log(windowWidth);