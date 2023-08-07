const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

//Abaixo temos técnicas de reflection (e.g: criar SQL (insert))
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa)) // Retorna uma array

Object.entries(pessoa).forEach(e => { //Elemento "e" se transforma nas arrays mais internas
    console.log(`${e[0]}: ${e[1]}`)
})

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {// Posso definir detalhes (se ficará visível em .keys, se a propriedade poderar ser alterada)
    enumerable: false, // Ele ainda existe!
    writable: false,
    value: '01/01/2019'
})
pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const destino = { a: 1 }
const objeto1 = { b:2 }
const objeto2 = { c:3, a:4 } // a é sobrescirto
const obj = Object.assign(destino, objeto1, objeto2) // Podemos ter quantos objetos quisermos.
Object.freeze(obj)
obj.c = 1234
console.log(obj)