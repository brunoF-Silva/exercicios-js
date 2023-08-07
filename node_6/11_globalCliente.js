//Para que o global.js coloque algo no escopo global precisamos importar com o require.
//Não atribuimos a nenhuma variável, eu estou simplesmente carregando o módulo, e uma vez que o módulo é carregado aquilo que colocamos no global ficará disponível em toda a aplicação
//Fazendo isso uma única vez o global já tem o objeto que você adicionou
require("./11_global");

console.log(MinhaApp.saudacao());

MinhaApp.nome = "Eita!";
console.log(MinhaApp.nome);
