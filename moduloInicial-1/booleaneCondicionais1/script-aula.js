var possuiGraduacao = false;

if(possuiGraduacao){
  console.log('Possui Graduacao');
} else {
  console.log('Nao possui graduacao');
};

var comparar = 5 <= 10;

console.log(comparar);
console.log(!comparar);

if((5 - 5)&&( 5 + 10)){
  console.log('Verdadeiro');
}else{
  console.log('Falso');
}


var corFavorita = 'Azul';

switch(corFavorita){
  case 'Azul':
    console.log('Olhe para o céu');
    break ;
  case 'Amarelo':
    console.log('Olhe para o sol');
    break ;
  case 'Verde':
    console.log('Olhe para a grama');
      break ;
  case 'Preto':
     console.log('Feche os olhos');
      break ;
}