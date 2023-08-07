// Concatena vários ELEMENTOS em um novo array
const filhas = ['Ualeskah', 'Cibalena']
const filhos = ['Uoxiton', 'Uesclei']
const todos = filhas.concat(filhos)
console.log(todos, filhas, filhos)

console.log(['a', 'b'].concat([1, 2], [3, 4], 5, [[6, 7]]))
// No caso de matrizes, concat tira apenas os elementos do primeiro array, não descendo, assim, em todos os níveis para retirar os valores 6 e 7. 