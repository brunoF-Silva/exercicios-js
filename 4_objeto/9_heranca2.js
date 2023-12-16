// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0' // não faça isso em casa! pois você está atribuindo um atributo ao objeto pai de TODOS OS OBJETOS!
const avo = { attr1: 'A'}
const pai = { __proto__: avo, attr2: 'B', attr3: '3'}
const filho = { __proto__: pai, attr3: 'C'} // ao acessar filho.attr3 teremos um sombreamento (o do filho vale/sombreia o do pai)
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status () {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari =  {
    modelo: 'F40',
    velMax: 324 // shadowing

    // o método status() lê a velocidade máxima que está em ferrari e não em sua primeira definição, caso seja chamado por ferrari, pois this é ferrari
}

const volvo = {
    modelo: 'V40',
    status() { // sobrescrevendo a antiga função...
        return `${this.modelo}: ${super.status()}` // Assim como "this" referencia o objeto atual, "super" referencia o protótipo logo acima
    }
}

Object.setPrototypeOf(ferrari, carro) // Outra forma de estabelecermos a relação de herança
Object.setPrototypeOf(volvo, carro)

console.log(ferrari) // Para efeitos de print, vemos apenas os atrubutos que de fato pertencem ao objeto
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())