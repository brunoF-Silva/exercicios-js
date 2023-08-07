console.log(this === global);
console.log(this === module);

console.log(this === module.exports);
console.log(this === exports);

//O this dentro de uma função aponta para global
function logThis() {
  console.log("Dentro da Função...");
  console.log(this === module.exports);
  console.log(this === global);
}

//O this dentro de uma arrow function aponta para module.exports/exports
