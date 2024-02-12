let cor = "Azul";

//função sem parametro(nada entre parenteses)
/*function resetaCor(){
    cor = ""; //Vazio
}; */

/* Função com parametro, a cor1 é substituida pelo que estiver entre
parenteses quando a função resetaCor é chamada */
function resetaCor(cor1){
    cor = cor1
}

console.log(cor);
resetaCor("vermelho");
console.log(cor)