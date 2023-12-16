// Tanto no browser quanto no node, ao se criar um atributo usando o  this para funções tradicionais, estamos mexendo no escopo global (colocando esse atributo no objeto global) uma vez que este this se refere ao objeto global e a função foi criada fora de qualquer coisa (com um escopo global), então requer cuidado.

let comparaComThis = function (param) {
  console.log(this === param);
};

comparaComThis(global); // true, inclusive para window
comparaComThis(this); // <- não é o global, mas, aqui no Node, o próprio módulo.

// Agora vamos associar um objeto à nossa função
const obj = {};
comparaComThis = comparaComThis.bind(obj); // A partir de agora, this aponta para obj e não mais para o escopo global.
comparaComThis(global); // false
comparaComThis(obj); //true
// Será que temos o mesmo comportamento com arrow functions?
/*
Primeiramente, como comparaComThisArrow foi definida dentro de um módulo do Node e cada arquivo do node representa um módulo, ela foi, dentro do contexto léxico, escrita dentro do módulo, então o dono ou o "this" dessa função é o próprio módulo. O this de arrow functions é o MÓDULO. Para referenciar o módulo atual use: 
*/
let comparaComThisArrow = (param) => console.log(this === param);
comparaComThisArrow(global); //false
// Em Arrow function this aponta para o objeto/módulo (para o arquivo no qual essa função foi definida) corrente.
comparaComThisArrow(module.exports); //true
comparaComThisArrow(this); // <- this é o mesmo que o module.exports. O this aponta para o módulo em que a função é definida (comparar com linha 8) tanto dentro quanto fora de funções arrow.

// Posso acessar o module.exports diretamente pelo this dentro dos arquivos do Node.

comparaComThisArrow = comparaComThisArrow.bind(obj);
comparaComThisArrow(obj); // O bind não funciona para a.f. :)
comparaComThisArrow(module.exports); // true
