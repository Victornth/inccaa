const Nome = 'João';
let nota1 = 7;
let nota2 = 8.2;
let media = (nota1+nota2)/2;

console.log(media)
console.log('o aluno ' + Nome + ' obteve média ' + media)
console.log('o aluno '.concat(Nome).concat(' obteve média '.concat(media)));

var numero1 = 2;
var numero2 = 7;
var numero3 = '6';
var numero4 = 0;

// calculo potencia
var resultado = Math.pow(numero1,numero2)// 1° letra maiscula é uma função, case sensitive
console.log(resultado);

//outra forma de calcular potencia
resultado = numero1**numero2;
console.log(resultado);

//calculando com numeros declarados como literais
console.log(numero1 + numero3);
console.log(numero3 + numero1);
console.log(numero3 / numero1);

//Operação para obter apenas o resto de uma divisão não inteira
console.log(numero2 / numero1);
console.log(numero2 % numero1);
console.log(Math.PI);
console.log(Math.sqrt(169));
console.log(Math.cbrt(125));


