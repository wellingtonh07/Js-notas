// let numAleatorio = Math.floor(Math.random() * 6) + 1;
/* Math.random Gera número aleatório entre 0 e 1.
Math.floor arredonda para o número inteiro mais próximo 
Nesse código, quer que gere um número aleatório entre 1 e 6 */

const btn = document.getElementById("mybtn");
const label = document.getElementById("mylabel");
const min = 1;
const max = 6;
let numAleatorio;

btn.onclick = function() {
    numAleatorio = Math.floor(Math.random() * max) + min;
    label.textContent = numAleatorio;
}