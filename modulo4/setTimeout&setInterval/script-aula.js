// function espera(texto){
//   console.log(texto);
// }

// setTimeout(espera, 1000, 'Passou 1s' );

// for(let i = 0; i < 20; i++){
//   setTimeout(() => {
//     console.log(i);
//   }, 1000 * i)
// }

function loop(texto){
  console.log(texto);
}

setInterval(loop, 1000, 'Passou 1s');

let  i = 0;

setInterval(() =>{
  console.log(i++);
}, 1000);