// É um padrão de projeto comum.
// Função que retorna um objeto.
// Função que sempre retorna um novo objeto (mesmo sem o uso do operador new), são criadas novas instâncias.
// Usamos a notação literal de objetos

// Factory Simples
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())