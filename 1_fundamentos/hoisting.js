// Içar, jogar para cima.
console.log("a=", a); // undefined mas existe. Não crasha o código.
var a = 2;
console.log("a=", a); //imprime a.

function teste() {
  console.log("b =", b);
  b = 2;
  console.log("a =", b); // checar e corrigir
}

teste();
// console.log('b = ', b)

// não existe Hoisting com let
console.log("c =", c);
let c = 2;
console.log("b =", b);
