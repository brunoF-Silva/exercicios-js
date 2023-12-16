// As duas variáveis abaixo compartilham o mesmo objeto
const contadorA = require("./8_instanciaUnica");
const contadorB = require("./8_instanciaUnica");

// Como o que instanciaNova retorna é uma função factory devemos invocá-la para obtermos o objeto
const contadorC = require("./9_instanciaNova")();
const contadorD = require("./9_instanciaNova")();

contadorA.inc();
contadorA.inc();
console.log(contadorA.valor, contadorB.valor);

//Por padrão o node faz cache daquilo que é retornado a partir de um require.
//Como se trata de uma instância tudo que se fizer em contadorA contadorB também saberá.

contadorC.inc();
contadorC.inc();
console.log(contadorC.valor, contadorD.valor);
//Acima temos novas instâncias criadas a partir de uma factory
