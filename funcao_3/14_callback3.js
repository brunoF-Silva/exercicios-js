// Exemplo de callback no browser
document // Referência dentro do browser disponível globalmente dentro do código que aponta para sua página (para o DOM).

/* Função getElementsByTagName(), passo uma tag
e minha resposta é uma array.
Vamos atribuir a getElementsByTagName() o evento onclick e nele uma função callback para ela seja chamada sempre que um usuário clicar no body.

Não somos obrigados a usar eventos.
Com o evento, podemos ter acesso à algumas características do evento (evento.target == qual tag disparou o evento). Temos vários atributos dentro do evento para que possamos ter acesso aos valores que queremos trabalhar encima do evento.

Se eu não utilizar nada do evento, eu não sou obrigado a declarar ele na assinatura da função.
*/
document.getElementsByTagName('body')[0].onclick = function (e) {
    console.log('O evento ocorreu!')
}
// Quando eu registro a função, executo a ação, a callback entra em ação.
// Eu registro o evento ao passar a função como parametro para o forEach (2 casos anteriores).