const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // massa quebrou o carro!

pilotos.push('Verstappen')

pilotos.shift() // remove o primeiro!

pilotos.unshift('Hamilton') // adiciona um primeiro
console.log(pilotos)
// splice pode adicionar e remover elementos 

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') // 2 ==  a partir do index 2, 0 == não remove ninguém
console.log(pilotos)

// remover
pilotos.splice(3, 1) // massa quebrou :(
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // pegue, a partir do ind 2. Gera um novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // pega o 1, mas não o 4
console.log(algunsPilotos2)