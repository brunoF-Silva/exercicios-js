const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao) // This é capaz de acessar o atributo do objeto dono da função que o possui.
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO
/*
Na linha acima, chamar falar dentro de uma função do Node a transfere para outro contexto alheio ao de sua criação. Assim, saudacao está apontando para um objeto diferente, que não é mais o objeto pessoa. Como este atributo saudacao não existe dentro desse objeto o que recebemos é um erro.
*/
// Função bind: passe um objeto para o qual o this deve ser resolvido
const falarDePessoa = pessoa.falar.bind(pessoa)// O this sempre será resolvido para pessoa
falarDePessoa()
/*
Bind é o método responsável por amarrar um determinado objeto para ele ser o dono da execução daquele método sempre que aquele método for chamado.
*/

/*
O método guardado dentro da var falar, em si não foi alterado, bind retorna uma outra função amarrada para pessoa independente da forma que você chame ela. A INSTÂNCIA DE FUNÇÃO falarDePessoa é uma nova função amarrada à pessoa.
*/
const falar2 = pessoa.falar
falar2() // Undefined pois pessoa.falar não foi alterada pela chamada de bind().