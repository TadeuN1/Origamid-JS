const promessa = new Promise((resolve, reject) => {
  let condicao = true;
  if(condicao){
    setTimeout(() => {
      resolve({nome: 'Tadeu', sobrenome: 'Neres', idade: '25'});
    }, 1000)
  } else {
    reject(Error('Erro ocorrido')) 
  }
});

const retorno = promessa
.then(resolucao => {
  console.log(resolucao);
  resolucao.profissao = 'Desempregado';
  return resolucao;
})
.then(resolucao => {
  console.log(resolucao);
}).catch(rejeitada => {
  console.log(rejeitada);
}).finally(() => {
  console.log('Acabou');
});

const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Usuário Logado');
  }, 1000)
})

const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Dados Carregados');
  }, 1500)
})

const carregouTudo = Promise.all([login, dados]);

carregouTudo.then((resolucao)=> {
  console.log(resolucao);
})


const carregouRace = Promise.race([login, dados]);

carregouRace.then((resolucao)=> {
  console.log(resolucao);
})