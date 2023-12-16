console.log(module.exports);

// Export e this aponta para o mesmo local que module.exports, mas somente module.exports é exportado a partir de um módulo

console.log(module.exports === this);
console.log(module.exports === exports);

this.a = 1;
exports.b = 2;
module.exports.c = 3;

exports = null;
console.log(module.exports);

// Se fizermos o abaixo, apenas mudamos a referência de modules para outro objeto, quem será retornado ainda será module.exports
exports = {
  nome: "Teste",
};

console.log(module.exports);

module.exports = { publico: true };
