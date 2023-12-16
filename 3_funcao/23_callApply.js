
/*
Existem muitas formas de se chamar uma função, diretamente no escopo global, a partir de um objeto, com a função call e com a apply.
Função em JS é um tipo e por isso existem outras funções dentro dele (.bind, .call, .apply)
*/
function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}` // * 1.2 soma-se 20% do valor original ao valor original
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco // Como getPreco já estava definida, posso colocar assim
}

global.preco = 20
global.desc = 0.1
console.log(getPreco()) // Procura os atributos, e os encontra, no escopo global
console.log(produto.getPreco()) // Chamar uma função atravez de um objeto significa utilizar o contexto de produto para resolver o this.

const carro = { preco: 49990, desc: 0.20 }

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))
/*
A diferença entre call e apply está apenas na passagem de parâmetros:
Call passo primeiro o contexto, depois todos os parâmetros que iremos passar para a função getPreco.
Para apply eu passo os parâmetros dentro de uma array: 1° parâmetro é o objeto que será utilizado como contexto de execução daquela função, seguido de um array que contenha todos os parâmetros dentro desse array.
*/
console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(global, [0.17, '$'])) // global === carro