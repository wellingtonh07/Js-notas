const buttonDiminuir = document.getElementById("diminuir");
const buttonResetar = document.getElementById("reset");
const buttonAumentar = document.getElementById("aumentar");
const labelContador = document.getElementById("contador");

let contar = 0;

buttonAumentar.onclick = function() {
    contar++;
    labelContador.textContent = contar;
}

buttonDiminuir.onclick = function() {
    contar--;
    labelContador.textContent = contar;
}

buttonResetar.onclick = function() {
    contar = 0;
    labelContador.textContent = contar;
}