function areaQuadrado(lado){
    return lado * lado;

}
console.log(areaQuadrado(8));

function pi(){
  return 3.14;
}
var total = 5 * pi();
console.log(total);

function imc (peso, altura){
  const imc = peso / (altura * altura);
  return imc;
}
console.log(imc (80, 1.8));

function corFavorita(cor){
if(cor === 'azul'){
  return 'Eu gosto do ceu';
} else if( cor === 'verde'){
  return 'Eu gosto de grama';
} else {
  return 'Eu não gosto de cores';
}
}

addEventListener ('click', function(){ 
console.log('clicou')});

function terceiraIdade(idade){
if(idade >= 60){
  return true;
} else {
  return false;
}
};
console.log(terceiraIdade(60));

