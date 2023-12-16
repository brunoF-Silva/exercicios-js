console.log(this); // this é um objeto vazio, conseguimos adicionar novos atributos
this.ola = "Fala Pessoal";
exports.bemVindo = "Bem vindo ao node!"; // exports é um objeto também
module.exports.ateLogo = "Até o próximo exemplo";

// Estamos colocando 3 atributos de formas diferentes no mesmo objeto
/*
this == module == module.export
*/
