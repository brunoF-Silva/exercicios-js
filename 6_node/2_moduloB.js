// A maneira mais comum de exportar é acessar o objeto, atribuir outro objeto dentro do módulo e esse objeto estará disponível para fora do módulo
let a = 2 // visível só aqui
module.exports = { // estamos substituindo o objeto comum padrão por esse novo objeto
    bomDia: 'Bom dia',
    boaNoite() {
        return 'Boa noite'
    }
}