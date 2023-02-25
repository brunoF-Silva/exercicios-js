// Leia em conjunto com heranca4.js
const pessoaDoColchete = {
    nome: 'Amanda',
    idade: 16,
}

const pessoaDoNewObject = new Object
pessoaDoNewObject.nome = 'Bruce'
pessoaDoNewObject.idade = 18

function pessoaFactory(nome, idade) {
    return {
        nome,
        idade,
    }
}

const pessoaDaFactory = pessoaFactory('Chiara', 20)

function PessoaGeradora(nome, idade) { 
    this.nome = nome
    this.idade = idade
}

const pessoaDaGeradora = new PessoaGeradora('Débora', 30)

class PessoaClass {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
}

const pessoaDeClasse = new PessoaClass('Eduardo', 40)

console.log(typeof pessoaDoColchete)
console.log(typeof pessoaDoNewObject)
console.log(typeof pessoaDaFactory)
console.log(typeof pessoaDaGeradora)
console.log(typeof pessoaDeClasse) //todos são do tipo Object

// Paternidade
console.log(pessoaDoColchete.__proto__ === Object.prototype)
console.log(pessoaDoNewObject.__proto__ === Object.prototype)
console.log(pessoaDaFactory.__proto__ === Object.prototype) // testar se a função tem os atributos
console.log(pessoaDaGeradora.__proto__ === PessoaGeradora.prototype)
console.log(pessoaDeClasse.__proto__ === PessoaClass.prototype)

// Testando as Funções
console.log(pessoaDaFactory.prototype) // undefined
console.log(PessoaGeradora.prototype === PessoaGeradora.prototype)
console.log(PessoaClass.prototype === PessoaClass.prototype)

console.log(PessoaGeradora.__proto__ === Function.prototype)
console.log(PessoaClass.__proto__ === Function.prototype)

//Até breve!