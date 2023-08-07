/* 
Escopo: Se tratando de declaração de variáveis, escopo se refere à disponibilidade do valor de tal variável em determinado trecho do código quando este é requisitado, podendo ser local (dentro de um bloco) ou global (fora de um bloco).
Em JS o escopo das variáveis é delimitado pelo tipo da declaração. Var possui escopo de função (só é local dentro de função). Let e const possuem escopo de bloco (são locais dentro de um bloco qualquer).
Ao se utilizar um valor, o interpretador procura primeiro o valor no escopo mais interno, seguido dos valores disponíveis nos escopos mais externos.

Contexto léxico: Contexto léxico se refere a consciência que uma função tem do local em que ela foi criada quando precisar buscar em outros escopos o valor de uma variável. Está diretamente ligada ao escopo uma vez que é definida como “quem/nome de quem detém o escopo”. É apenas uma nomenclatura.
Por exemplo, uma função declarada sem indentação (livremente) possui escopo do módulo.js que foi definida e por isso procura valores para variáveis fora de si, no escopo global.
Já uma função definida mais interna à outra possui como contexto léxico a função mais externa a ela. Isso significa que se existir alguma variável que ela precise acessar que exista na função mais externa, ela (a mais interna) sempre buscará seu valor lá independente de onde ou quando seja chamada. Nada mudará seu contexto léxico, nem se existir outra variável de mesmo nome onde foi chamada.

Closure: closure é a capacidade de uma função de buscar valores para uma variável no escopo imediatamente mais externo ao que foi declarada. À esse escopo mais externo damos o nome de closure e ele é criado no momento em que a função é declarada.

Resumindo, o contexto léxico determina o escopo que o closure irá buscar o valor de variáveis.

Em resumo, uma closure é uma função que "captura" o contexto léxico em que foi criada, permitindo que ela acesse as variáveis desse contexto, mesmo após a conclusão desse contexto. O contexto léxico é o ambiente em que uma função foi declarada e determina o escopo das variáveis acessíveis dentro da função no momento de sua criação.




Quando uma função é declarada em JS ela não possui apenas nome e atributos mas ela também tem consciência do local que ela foi definida, ou seja do seu contexto léxico.
A função carrega consigo essa informação do local que ela foi declarada e procura referências para seus valores baseados nesse escopo lexico em que ela foi definida, ela não procura no seu escopo de execução, mas sim no seu escopo de criação.
*/
const valor = "Global";

function minhaFuncao() {
  console.log(valor); // Não tendo no escopo local, o compilador procura nos escopos mais abrangente.
}

function exec() {
  const valor = "Local";
  minhaFuncao();
}

exec();
