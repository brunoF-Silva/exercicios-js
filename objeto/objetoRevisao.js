// coleção dinâmica de pares chaves/valor
const produto = new Object// Object é uma função. Object + operador new se refere a uma função construtora e por isso construimos objetos a partir das palavras reservadas Object e new estanciando objetos
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Genérica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    }
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function() {
        // ...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro)

// delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores) // Como carro existe eu posso tentar acessar qualquer coisa, mesmo coisas inexistentes, dentro de carro que no máximo terei undefined
console.log(carro.condutores.length) // Mas tentar acessar alguma coisa de algo indefinido aí dá problema