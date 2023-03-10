const pai = { nome: 'Pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai) // Criando e já setando um pai
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true } //Vantagem usar a função Object
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for (let key in filha2) { // key é o nome dos atributos
    console.log(key)
}

for (let key in filha2) { // Verificar se um atributo pertence a um objeto
    filha2.hasOwnProperty(key) ?
        console.log(`Seu mesmo: ${key}`) : console.log(`Por herança : ${key}`)
}