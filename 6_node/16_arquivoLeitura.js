// Leremos arquivo.json através do modulo core filesistem que já vem no node. Não é necessário instalá-lo.

//Referência do filesistem:
const fs = require("fs");

const caminho = __dirname + "/arquivo.json";

//Sincrono...
const conteudo = fs.readFileSync(caminho, "utf-8");
console.log(conteudo);

//Assincrono...
//Vamos passar uma callback e quando passarmos a callback ele vai chamar essa callback para realizar os tratamentos desejados encima do conteúdo dos arquivos.
fs.readFile(caminho, "utf-8", (err, conteudo) => {
  // err é erro
  const config = JSON.parse(conteudo); // conteudo é uma sting
  console.log(`${config.db.host}:${config.db.port}`);
});

//Forma mais simples de ler um arquivo json, já converte para objeto:
const config = require("./arquivo.json"); // Devo colocar a estenção .json
//Esse console.log vem antes do anterior pois é sincrono
console.log(config.db);

//Leitura de uma pasta, também usamos o filesystem
//Passamos uma callback com erro e com os arquivos no diretório
fs.readdir(__dirname, (err, arquivos) => {
  console.log("Conteúdo da pasta...");
  console.log(arquivos);
});
