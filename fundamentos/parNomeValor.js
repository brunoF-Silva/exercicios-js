/*
o programa procura o valor de uma var/const/let primeiramente dentro dos contextos mais internos para o mais externo.
*/
// par nome/valor
const saudacao = "Opa" // contexto léxico 1 ( relativo à palavra. É o local físico no seu código no qual o par chave/valor foi definido (aqui no arquivi que estou trabalhando, no contexto browser pode ser no contexto do objeto global window). )
// escopo: local que a var é visível.
function exec() {
    const saudacao = 'Falaaa' //contexto léxico 2
    return saudacao
}

//Objetos são grupos aninhados de pares chave/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)