const sequencia = {
    _valor: 1, // Em JS não quer dizer que é uma var privada, porém isso é uma convenção para demosntrar aos devs o desejo de se acessar tal variável apenas internamente ao obj sequência.
    get valor() { return this._valor++ },// Vantagem de se acessar valores encima de uma função é a possibilidade de se realizar alguma validação, processamento antes de devolver o valor da variável.
    set valor(valor) {
        if(valor > this._valor) {
            this._valor = valor
        }
    } // JS não suporta sobrecarga de método (métodos com mesmo nome e com parâmetros diferentes) exceto aqui
}

console.log(sequencia.valor, sequencia.valor) // A conveniência é exatamente assim, isso é get
sequencia.valor = 1000 // isso é set
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)