const moduloA = require("../../1_moduloA");
console.log(moduloA.ola);

// Busca dentro de modules_export
const saudacao = require("saudacao");
console.log(saudacao.ola);

// Devido ao padrão do nome index, node busca automaticamente por index.js. Posso buscar por './pastaC/index' também.
// Podemos utilizar o padrão index para acessar vários importes de outros arquivos( referenciar outros arquivos e retornar um objeto que seria a junção de todos os arquivos de determinada pasta)
const c = require("./pastaC");
console.log(c.ola2);

// Posso requerer módulos do próprio node (módulos core)
const http = require("http");
http
  .createServer((req, res) => {
    res.write("Bom dia!");
    res.end();
  })
  .listen(8080);
