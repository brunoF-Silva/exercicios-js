// O this da função arrow é um this baseado no contexto em que a função foi escrita, e o fato de a função ser chamada de locais diferentes não influencia o valor this
function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa


/*
Uma vez que this foi criado em uma arrow function dentro do contexto lexico (da palavra, lugar físico dentro do código fonte) da função tradicional pessoa, o this da arrow function está ligado ao objeto pessoa.
Assim, independente de o código ser chamado por um temporizador, temos o resultado desejado.
*/