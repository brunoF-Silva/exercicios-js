/* 
Resumo:
Todo objeto tem um pai que, nos objetos pode ser acessado/manipulados atraves do atributo __proto__.
Caso eu não especifique nenhum pai, a própria função que dá origem aos objetos será o pai padrão, sendo apenas quando acessado junto de sua outra função prototype (Object.prototype) que estarei manipulando tal função como um "pai de todos", conseguindo, por exemplo, atribuir atributos acessáveis para todos os filhos dentro da função Object.
*/
/*
Herança: herdar métodos e atributos do pai*;
Reutilizar código sem crt+c, crt+v;
Um ancestral por vez;
Composição com decorator pode ser mais flexivel e substituir herança
Para o escopo, passado o nome de uma var, JS procura seu valor primeiro num escopo local (mais interno) passando para escopos mais externos. Com a herança temos algo similar, porém a busca de tal valor será feita na cadeia de protótipos

Todo objeto tem por padrão uma propriedade [[Prototype]] (na documentação se refere ao conceito de protótipo) que se traduz no atributo __proto__. Atravez de __proto__ posso acessar o objeto pai, avô etc. Esse objeto pai é, por padrão, a função Object.prototype que é o ancestal mais acima da cadeia hieráquica do objeto em questão criado. Object tem um atributo chamado prototype, pois ele é uma função.

Podemos mudar a referência do protótipo de um objeto.
*/

// Ser protótipo é similar a ser um parente (pai, avô)
// Um objeto criado aponta por padrão para object.prototype
const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.prototype) // undefined pois só funções possuem o atributo prototype
console.log(ferrari.__proto__) // Com o atributo __proto__ eu consigo acessar quem é o protótipo desse objeto (super objeto/ objeto pai) // Se eu procurar determinado objeto dentro de ferrari e não encontrar, vou procurar dentro de objeto pai e assim até achar ou até retornar undefined (procura na cadeia de protótipos)

console.log(ferrari.__proto__ === Object.prototype) // Object.prototype representa o prototype mais alto nível (sem ninguém depois dele)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)
// Toda função possui o atributo prototype
// Para acessar um protótipo de dentro de um objeto usamos __proto__  
// Para acessar o protótipo de um objeto em sua cadeia de protótipos, a partir dele, usamos o atributo __proto__
function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto) // Object é uma função/palavra reservada que gera objetos. MeuObjeto é um objeto conseguido a apartir de uso de funções (sabemos que isso é permitido)
console.log(Object.prototype, MeuObjeto.prototype)