let idade = 27;
console.log(`Sua idade é de ${idade} anos de idade`);

//Variavel idade recebe valor 27
// ${} usado para colocar a variavel dentro dessas chaves..

console.log(typeof idade);

//type of - usado para saber o tipo primitivo de uma variavel

let nome = "Well";  //String - serie de caracteres
console.log(`Olá, ${nome}`);

let online = true;  //Booleano - Verdadeiro ou falso.
console.log(typeof online);

document.getElementById("p1").textContent = `Seu nome é ${nome}`;
document.getElementById("p2").textContent = `Sua idade é ${idade} anos de idade`;
document.getElementById("p3").textContent = `Você está online? ${online}`;

/*Não pode iniciar variável com número
Não pode ter espaços
camelCase - ex: nomeCompleto */