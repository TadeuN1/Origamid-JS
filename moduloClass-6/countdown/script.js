import Countdown from "./countdown.js";

const tempoParaONatal = new Countdown('24 December 2023 23:59:59 ');
const tempoParaOAnoNovo = new Countdown('29 December 2023 23:59:59 ');

console.log(tempoParaONatal.total);
setInterval(() => {
  console.log(tempoParaONatal.total)
}, 1000);
console.log(tempoParaOAnoNovo.total);
setInterval(() => {
  console.log(tempoParaOAnoNovo.total)
}, 1000);