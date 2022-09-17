/*

console.log(a);

{
    console.log(a);

}
*/
var a = 1;
let b = 2;
const c = 3;

{
    console.log(a);
    console.log(b);
    console.log(c);

    var aa = 11;
    let bb = 22;//não vaza de dentro do escopo(não aparece no print)
    const cc = 33;//não vaza de dentro do escopo(não aparece no print)
}
console.log(aa);
//console.log(bb);
//console.log(cc);


