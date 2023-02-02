// Tudo que dissemos sobre prototype e herança para a função construtora, também é valido para classe, pois classe é apenas uma maneira diferente de se escrever uma função construtora.
// A sintaxe para dizer que uma classe extende outra é diferente
class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') { // O construtor do pai (quem recebe os parâmetros da suposta instância, vai chamar o construtor do pai atravez de "super") // Atravez deste construtor podemos passar um valor sobrenome para avo e personalizar o avô
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva') // Vai chamar o construtor do pai, passar só um parâmetro aqui, sua profissão será o padrão definido em seu pai (professor)
    }
}

const filho = new Filho
console.log(filho)