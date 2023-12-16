/*
Node é o runtime do JS para rodar no servidor backend, logo ele lida com requisições assincronas que não travam a página da aplicação graças à LibUV. É ainda interpretado pelo motor V8. Ao se rodar javascript no front, as pastas e arquivos são convertidos para um e tudo é interpretado no navegador. Ao se rodar no backend tudo é organizado em pastas e seus arquivos são chamados de modulos. Um módulo garante que seu código seja restrito, a menos que os exportemos.
*/
//Usa outros módulos que iremos definir
// Veja como usamos o commonJs (sistema de módulos do node):
const moduloA = require("./1_moduloA.js"); // ./ == caminho relativo, moduloA é um objeto
const moduloB = require("./2_moduloB.js");

console.log(moduloA.ola);
console.log(moduloA.bemVindo);
console.log(moduloA.ateLogo);
console.log(moduloA);

console.log(moduloB.bomDia);
console.log(moduloB.boaNoite()); // por essa abordagem devo usar ()
console.log(moduloB);
