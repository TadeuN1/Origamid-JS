import ValidarCpf from "./validarcpf.js";

const cpf = document.querySelector('#cpf');
const validarCpf = new ValidarCpf(cpf).iniciar();