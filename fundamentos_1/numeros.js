const peso1 = 1.0 //isso é inteiro.
const peso2 = Number('2.0') //Uma função com seus métodos (eu acho).

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 =  6.871

const total = avaliacao1 + peso1 + avaliacao2 + peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // controlando o número de casas decimáis.
console.log(media.toString(2)) // em binário, métodos retornam mas não mudam.
console.log(typeof media)
console.log(typeof Number)