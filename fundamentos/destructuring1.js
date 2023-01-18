// Desestruturar - novo recurso do ES2015
// Para arrays é [] e para objetos é {}
// Criando várias variáveis de uma vez só!
// Vai receber um objeto? Retire seus atributos sem precisar mexer no objeto.

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade} = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true} = pessoa //valor padrão caso não se encontre tal atributo
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa // endereco não é criada, somente: 
console.log(logradouro, numero, cep)

// somente o último dado pode estar nulo ou undefined
const { conta: { ag, num } } = pessoa
console.log(ag, num)

// ao se tentar desestruturar um dado, o caminho até esse dado deve estar definido.