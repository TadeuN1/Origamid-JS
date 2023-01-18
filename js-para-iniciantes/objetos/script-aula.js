var pessoa = {
  nome: 'Tadeu',
  idade: 25,
  profissao: 'eletronico'
}

var quadrado = {
  lados : 4,
  area : function(lado){
    return lado * lado;
  },
  perimetro : function(lado){
    return this.lados * lado;
  }
}
