/*
Ao se trabalhar com tipos primitivos e o sinal de atribuição, eu tenho atribuição de cópia por valor (valores de var individuais). Já para objetos eu tenho atribuição por referência. (a = b, ambas apontam para o mesmo objeto em memória).
*/
let valor //não inicializada
console.log(valor)

valor = null //ausência de valor (ela não aponta para nenhum objeto na memória).
//variáveis que são referência (apontam para algum lugar).
console.log(valor)
// console.log(valor.toString()) //Erro!

// eu posso tentar acessar algo undefined de algo defined mas não posso tentar acessar algo de algo de se quer está definido.
const produto = {}
console.log(produto.preco)
// console.log(produto.preco.a) //Erro!
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evite atribuir undefined
console.log(!!produto.preco) //convertendo para boolean, como temos undefined o valor retornado é false.
console.log(produto) // o objto ainda possui um atributo undefined.
// delete produto.preco // retira o atributo .preco, temos novamente um objeto vazio. 

produto.preco = null // diferente opção para 0.
console.log(!!produto.preco) //produto.preco está setado?
console.log(produto) // se uma variável está nula (ou indefined), eu não posso acessar nenhum membro (função, atributo) daquela variável.