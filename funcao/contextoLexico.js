/* Quando uma função é declarada em JS ela não possui apenas nome e atributos mas ela também tem consciência do local que ela foi definida, ou seja do seu contexto lexico.
A função carrega consigo essa informação do local que ela foi declarada e procura referências para seus valores baseados nesse escopo lexico em que ela foi definida, ela não procura no seu escopo de execução, mas sim no seu escopo de criação.
*/
const valor = 'Global'

function minhaFuncao() {
    console.log(valor) // Não tendo no escopo local, o compilador procura nos escopos mais abrangente.
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()