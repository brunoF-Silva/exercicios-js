/*
Transformar um array em:
- um único elemento;
- outra array;
- um número;
- uma string
- etc.
Temos parâmetros que serão acumulados (serão chamados) de chamada em chamada que vai sendo passado. O resultado de uma função reduce é sempre passado para uma próxima iteração.
Temos o elemento atual, e no 1º parâmetro temos o acumulador (valor da função anterior que é passado para a próxima)

Na primeira chamada, aqui, o primeiro elemento é passado como acumulador e o segundo o objeto com o qual vamos trabalhar
*/

// A principal ideia do reduce é a de "reduzir"/"agregar" valores em um só!
const alunos = [
    { nome:'João', nota: 7.3, bolsista: false },
    { nome:'Maria', nota: 9.2, bolsista: true },
    { nome:'Maria', nota: 9.8, bolsista: false },
    { nome:'Ana', nota: 8.7, bolsista: true }
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0) // setando o valor inicial 0

console.log(resultado)