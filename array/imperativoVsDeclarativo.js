/* Abordagem Imperativo: Diz exatamente os passos a serem executados, sem faltar um detalhe. O não é muito o que tem que ser feito, mas como deve ser feito. O "como" é mais importante do que o "o que deve ser feito".

Abordagem Declarativa: Simplesmente dizemos o que deve ser feito e internamente as coisas vão sendo feitas.
*/
const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 }
]

// Imperativo // Tudo é feito ao mesmo tempo!!!
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// Declarativo // Quebro em pedaços // Posso reutilizar :) // Paradigma Funcional
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma) // Não me importo que dentro de map eu tenho um for, que cria um índice, que percorre o array, que cria uma var temporária (detalhes internos). Ou seja, não me importo com o como.
console.log(total2 / alunos.length)

// select codigo, nome, email from clientes where ativo = 1 // SQL e HTML são linguagens mais declarativas

/* Trabalhar de forma Imperativa =  colocar muita responsabilidade no código
Trabalhar de forma Declarativa =  deixar a própria linguagem responder as coisas para mim.
*/