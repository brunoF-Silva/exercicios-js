// A partir de funções eu posso instanciar objetos também
// Usando a notação literal
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções construtoras (equivalente à maneira anterior)
/*
No browser temos os níveis globais, da função e de bloco (var, let e const)
No node temos o nível do próprio módulo que representa o arquivo e temos o nível da função
Dentro de uma função ou mesmo de um bloco (let e const), existem apenas dois níveis, ou é público (this.) ou é privada.
*/
function Produto (nome,preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = ( ) => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função Factory (É um padrão de projeto que produz alguma coisa) (podemos usar tanto uma fução construtora interna quanto a notação literal)
function criarFuncionario(nome, salarioBase, faltas ) {
    return { // Abrindo um objeto literal
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)
// Uma função que retorna Objet...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)