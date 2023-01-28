// Criando o próprio operador new para instanciar objetos a partir de funções construtoras.
function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2)
/* Funções construtoras cujo o operador new instanceiam novos objetos, cria novos objetos que possuem __proto__ apontando para aquela função. */

// Criando uma função que simula o operador new:
function novo(f, ...params) { // O operador ... se chama spread and rest recebe um conjunto de parâmetros e concatena todos eles dentro de uma array
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params) //obj aqui é o contexto e equivale ao this
    return obj
}

const aula3 = novo(Aula, 'Bem Vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)
console.log(aula3, aula4)