const alunos = [
  { nome: "João", nota: 7.3, bolsista: true },
  { nome: "Maria", nota: 9.2, bolsista: true },
  { nome: "Maria", nota: 9.8, bolsista: true },
  { nome: "Ana", nota: 8.7, bolsista: false },
];

// Desafio 1: Todos os alunos são bolsistas?
let resultado = alunos.map(e => e.bolsista).reduce(
  function(acumulador, atual) {
    console.log(acumulador && atual)
    return acumulador && atual
  }
)
console.log('Todos os alunos são bolsistas: ', resultado)

// Desafio 2: Algum aluno é bolsista?
resultado = alunos.map(e => e.bolsista).reduce(function(acumulador, atual) {
  console.log(acumulador || atual)
  return acumulador || atual
})

console.log('Existe algum aluno bolsista:' + resultado)

// Gabarito
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))