/*
A função construtora também tem um atributo prototype que é um objeto vazio, e todo objeto tem __proto__. Assim, Funcao_construtora.__proto__  referencia Function.prototype. Function.prototype.__proto__ referencia Object.prototype. Object.prototype.__proto__ é nulo. Objetos filhos da função construtora possuem .__proto__ apontando para Funcao_construtora.prototype que nada mais é que um objeto vazio.

E um objeto instanciado a partir dessa função geradora tem um atributo __proto__ que referencia por padrão o objeto contido em função_geradora.prototype (ao contrário dos objetos geradas pelo método tradicional ou por new Object, pois eles apontam por padrão para Object.prototype.
*/
function MeuObjeto() {} // Função construtora
console.log(MeuObjeto.prototype); // Seu protótipo existe e é um objeto vazio

// Especificidade: Ao se criar objetos a partir de uma função construtora, todos apontarão para função.prototype e não para Object.prototype (objetos criados pelo modelo padrão ou pelo new Object). Aqui, pela função construtora, objetos apontam para o atributo .prototype daquela função.

const obj1 = new MeuObjeto();
const obj2 = new MeuObjeto();
console.log(obj1.__proto__ === obj2.__proto__); // true
console.log(MeuObjeto.prototype === obj1.__proto__); // true

MeuObjeto.prototype.nome = "Anônimo"; // Atribuições dinâmicas que também estarão disponíveis para os filhos
MeuObjeto.prototype.falar = function () {
  console.log(`Bom dia! Meu nome é ${this.nome}!`);
};

obj1.falar();
obj2.nome = "Rafael";

const obj3 = {};
obj3.__proto__ = MeuObjeto.prototype; // Sai a ref Object.prototype e entra a MeuObject.prototype
obj3.nome = "Obj3";
obj3.falar();

// Resumindo a loucura...
console.log(new MeuObjeto().__proto__ === MeuObjeto.prototype); //(new MeuObjeto.__proto__) retorna um objeto e todo objeto tem o atributo __proto__
console.log(MeuObjeto.__proto__ === Function.prototype); // Como temos uma função construtora além de MeuObjeto ter o atributo prototype ele também tem uma referência para .__proto__ que, ai sim, é Function.prototype
console.log(Function.prototype.__proto__ === Object.prototype); // O protótipo do protótipo de uma Function aponta para Object.prototype
console.log(Object.prototype.__proto__ === null); // não undefined, pois esse atributo existe
