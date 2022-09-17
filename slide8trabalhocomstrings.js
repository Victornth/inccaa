const curso = 'INCCAA';

console.log(curso);
console.log(curso.charCodeAt(0)); //mostra o codigo decimal respectivo na tabela unicide para a letra indice 0 dentro da palavra
console.log(curso.charCodeAt(1));
console.log(curso.charCodeAt(2));
console.log(curso.charCodeAt(3));

console.log(curso.charAt(0));
console.log(curso.charAt(1));
console.log(curso.charAt(2));
console.log(curso.charAt(3));
console.log(curso.charAt(4));
console.log(curso.charAt(5));

console.log(curso.charAt(0));
console.log (curso.charAt(0) + curso.charAt (1) + curso.charAt ( 2 ) + curso.charAt  ( 3 ) + curso.charAt ( 4 ) + curso.charAt ( 5 ) );

console.log(curso.substring (2,5));
console.log(curso.replace('A',4));
console.log(curso.replace (/A/, 4));
console.log(curso.replace (/A/g, 4));

const nomes = 'João,Josê,Maria';
console.log(nomes);
console.log(nomes.split(','));

const cliente = 'Nantes';
const produto = 'SMART TV';
const template = `
Prezado Sr. ${cliente}
informamos que seu ${produto} já pode ser retirado em nossa loja.

gratos pela preferencia

`;
console.log(template);
console.log('20 * 2 = '.concat(20*2));
console.log(`20 * 2 = 20 * 2`);
console.log(`20 * 2 = ${20 * 2}`);

let texto1 = 'CuRsO LeGaL';
let texto2 = 'curso';
console.log(texto1.toLowerCase());
console.log(texto1.toUpperCase());
console.log(texto2.toUpperCase());
console.log(texto2.charAt(0).toUpperCase()+texto2.substring(1,));



