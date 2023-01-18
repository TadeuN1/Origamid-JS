for (var numero = 0; numero < 10; numero++){
  console.log(numero);
}

var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
// Retorna de 0 a 9 no console

var videoGames = [ 'switch', 'PS4', 'Xbox', '3DS'];


for ( var item = 0; item < videoGames.length; item++){
  console.log(videoGames[item]);
  if (videoGames[item]==='PS4'){
    break;
  }
}

videoGames.forEach(function(item) {
  console.log(item)
})
