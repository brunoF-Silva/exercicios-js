/*
Além da função geradora (construtora) ter um atributo prototype que referência ela mesma, ela também tem um atributo __proto__ característico de seus objetos que referência Function.prototype

E um objeto instanciado a partir dessa função geradora tem um atributo __proto__ que referencia por padrão a própria função geradora (ao contrário dos objetos geradas pelo método tradicional/= new Object pois eles apontam por padrão para Object.prototype. Ambos Function.prototype e Object.prototype são objetos vazios (VERIFICAR). Objetos instanciados de maneira convencional não possuem o atributo.prototype (só sua função geradora Object).
*/
function MeuObjeto() {} // Função construtora
console.log(MeuObjeto.prototype) // Seu protótipo existe e é um objeto vazio

// Especificidade: Ao se criar objetos a partir de uma função construtora, todos apontarão para função.prototype e não para Object.prototype (objetos criados pelo modelo padrão ou pelo new Object). Aqui, pela função construtora, objetos apontam para o atributo .prototype daquela função.

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__) // true
console.log(MeuObjeto.prototype === obj1.__proto__) // true

MeuObjeto.prototype.nome = 'Anônimo' // Atribuições dinâmicas que também estarão disponíveis para os filhos
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

obj1.falar()
obj2.nome = 'Rafael'

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype // Sai a ref Object.prototype e entra a MeuObject.prototype
obj3.nome = 'Obj3'
obj3.falar()

// Resumindo a loucura...
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype) //(new MeuObjeto.__proto__) retorna um objeto e todo objeto tem o atributo __proto__
console.log(MeuObjeto.__proto__ === Function.prototype) // Como temos uma função construtora além de MeuObjeto ter o atributo prototype ele também tem uma referência para .__proto__ que, ai sim, é Function.prototype
console.log(Function.prototype.__proto__ === Object.prototype) // O protótipo do protótipo de uma Function aponta para Object.prototype
console.log(Object.prototype.__proto__ === null) // não undefined, pois esse atributo existe