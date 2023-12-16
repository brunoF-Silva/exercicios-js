/* 
Resumo:
Todo objeto tem um pai que pode ser acessado através do atributo __proto__.
Esse pai é um objeto vazio disponível no atributo Função.prototype que gera o objeto.
Object.prototype é o pai padrão de objetos criados literalmente, posso dá-lo atributos que serão acessáveis para todos os filhos.
Caso eu não especifique nenhum pai, a própria função que dá origem aos objetos (função construtora) será o pai padrão (função.prototype). 

Herança: herdar métodos e atributos do pai*;
Reutilizar código sem crt+c, crt+v;
Um ancestral por vez;
Composição (colocar outros objetos dentro) com decorator pode ser mais flexivel e substituir herança

Para o escopo, passado o nome de uma var, JS procura seu valor primeiro num escopo local (mais interno) passando para escopos mais externos. Com a herança temos algo similar, porém a busca de tal valor será feita na cadeia de protótipos

Todo objeto tem por padrão uma propriedade [[Prototype]] (na documentação se refere ao conceito de protótipo) que se traduz no atributo __proto__. Atravez de __proto__ posso acessar o objeto pai, avô etc. Esse objeto pai é, por padrão, a função Object em seu atributo prototype que é o ancestal mais acima da cadeia hieráquica do objeto em questão criado. Toda função, incluindo Object, tem esse atributo prototype que é um objeto vazio.

Podemos mudar a referência do protótipo de um objeto.
*/

// Ser protótipo é ser um parente (pai, avô)
// SEU OBJETO PAI É SEU PROTÓTIPO
// Um objeto criado tem __proto__ apontando por padrão para Object.prototype (objeto vazio)
// Toda função tem o atributo .prototype, que é um objeto vazio.
const ferrari = {
  modelo: "F40",
  velMax: 324,
};

const volvo = {
  modelo: "V40",
  velMax: 200,
};

console.log(ferrari.prototype); // undefined pois só funções possuem o atributo prototype
console.log(ferrari.__proto__); // Com o atributo __proto__ eu consigo acessar quem é o protótipo desse objeto (super objeto/ objeto pai) // Se eu procurar determinado objeto dentro de ferrari e não encontrar, vou procurar dentro de objeto pai e assim até achar ou até retornar undefined (procura na cadeia de protótipos)

console.log(ferrari.__proto__ === Object.prototype); // Object.prototype representa o prototype mais alto nível (sem ninguém depois dele)
console.log(volvo.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);
// Toda função possui o atributo prototype
// Para acessar um protótipo de dentro de um objeto usamos __proto__
// Para acessar o protótipo de um objeto em sua cadeia de protótipos, a partir dele, usamos o atributo __proto__
function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto); // Object é uma função/palavra reservada que gera objetos. MeuObjeto é um objeto conseguido a apartir de uso de funções (sabemos que isso é permitido)
console.log(Object.prototype, MeuObjeto.prototype);
