// O this torna atributos públicos o que possibilita serem vistos em instancias atravéz da notação ponto.
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()
//--------------------------------------------------------------
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('João')
p2.falar()

// No browser, se eu fizer:
document.getElementsByTagName('body')[0].onclick = p1.falar

// O resultado sera "meu nome é undefined", pois o this aqui quem disporaou a chamada dessa função fez o this variar. Isso não acontece com p2.falar pois não temos isso em funções factory.