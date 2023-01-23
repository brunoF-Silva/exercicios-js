// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função.

// Contexto léxico em ação!

// X pode se global dentro do arquivo (visível apenas dentro desse módulo, o que é esse caso) ou pode ser definido com relação ao node (objeto global).

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro //Fora retorna uma função
}

const minhaFuncao = fora()
console.log(minhaFuncao())