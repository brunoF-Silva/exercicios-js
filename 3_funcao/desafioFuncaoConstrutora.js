// Função construtora equivale à class (class vira uma fun construtora).
// Em comparação com uma factory e com a class, as 3 podem criar objetos 
function Pessoa(nome) {
    this.nome = nome

    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Bruno')
const p2  = new Pessoa('Amanda')
p1.falar()
p2.falar()