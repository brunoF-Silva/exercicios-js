// Classe é um detalhe de sintaxe pois ela é, na verdade, convertida em uma função!
class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    } // Forma que eu tenho que a função que é chamada no momento que ela é instanciada usando o operador new (essa classe será transformada em uma função construtora), ENTÃO ESSES SÃO OS PARÂMETROS DA SUA FUNÇÃO CONSTRUTORA
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -200)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())

// Seu uso é util em poucas situações como para os métodos de ciclo de vida em react