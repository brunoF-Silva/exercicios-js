// TypeScript (and JavaScript) lets you convert a non-Boolean value to Boolean using the double exclamation shorthand.
let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log('os verdadeiros...')
console.log(!!3) //avalie se é interpretado como v ou f.
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' '))
console.log(('' || null || 0 || 'epa' || ' '))
/*
procura a ocorrência do primeiro verdadeiro e o retorna
*/
let nome = '' //undefined

console.log(nome || 'Desconhecido') // valor padrão.