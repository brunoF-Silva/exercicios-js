const funcs = [];

for (let i = 0; i < 10; i++) {
    funcs.push(function () {
        //função anônima
        console.log(i);
    });
}
/*
let e seu escopo de bloco possuem "memória" e assim JS conseguem se lembrar dos valores de i, ao contrário do que acontecia com var, em que tudo era apontado para o mesmo local.
Aqui existe também o conceito de enclosure (função tem consciência do local que ela foi definida).
*/

funcs[2]();
funcs[8]();
