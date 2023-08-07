// pessoa -> 123 -> {...} //pessoa aponta para um end. de memória 123 e é em 123 que eu tenho de fato o objeto criado
const pessoa = { nome: 'João'}
pessoa.nome = 'Pedro' // Não mudei a referência de pessoa mas o dado no endereço pode ser mexido (não posso modificar a constante pessoa).
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana'} //pessoa vai receber um novo objeto (em outro endereço de memória) == ERRO! Const sempre apontará para o mesmo end. de mem.

Object.freeze(pessoa) // Obj congelados não podem mais ser modificados
pessoa.nome = 'Maria'
pessoa.nome = 'Rua ABC'
delete pessoa.nome
console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'João'})
console.log(pessoaConstante) // Nem a referência da variável pode ser modificada, nem o objeto criado.
