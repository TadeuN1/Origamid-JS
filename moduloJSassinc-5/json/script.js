fetch('./dados.json')
.then(r => r.text())
.then(jsonText => {
  const jsonFinal = JSON.parse(jsonText);
  console.log(jsonFinal);
  });

  const dadosTadeu = {
    nome: 'Tadeu',
    sobrenome: 'Neres',
    idade : 25,
    linguagens: '2.2 JavaScript'
  }

  localStorage.config = JSON.stringify(dadosTadeu)

  console.log(JSON.parse(localStorage.config));