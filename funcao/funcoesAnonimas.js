// O interessante é que eu passo a variável que armazena a função como o terceiro parâmetro, observe:
const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b)) // Ative o que quer que operacao seja!
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x, y) {
    return x - y
})
imprimirResultado(3, 4, (x, y) => x * y)

const pessoa = {
    falar: function falar() {
        console.log('Opa')
    }
}

pessoa.falar()

const outraPessoa = {
    responder() {
        console.log('Tudo bem?')
    }
}

outraPessoa.responder()