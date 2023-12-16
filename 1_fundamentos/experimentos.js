/*
Com relação à JavaScript precisamos ter consciência do Runtime (onde executo meu código):
    - Executado no front-end = Browser (trabalha-se com operações assincronas para chamadas no backend e saber se existem callback's. É importante, ainda, saber padrões de projeto que JS implementa (padrão observer (callback))).
    - Executado no Back-end =  Node.

Símbolo para acessar: {}
-- No console do Browser:
Objeto global que representa o escopo global de uma aplicação JavaScript que roda no browser:
    {
        window
    }

    - De maneira geral, variáveis e funções com escopo global acabam disponíveis em window.
    - Outra forma de se acessar o objeto window no contexto global é utilizando o window.
    {
        this
    }
    - No contexto global (fora de funções, objetos criados etc.), this === window.
    - "This" pode variar dependendo de quem chamou uma determinada função.
    {
        var a = "Texto" // Para diretamente no contexto global, variáveis podem sobrescrever umas às outras - o que pode acarretar sérios bugs.

        window.a = 123
        var a = 123 // Redeclarar não gera warnings.

        window.a
        this.a
    }
    {
        let b = 123
        window.b //Aqui a variável não está num contexto global (disponível no respectivo objeto global window), APESAR DE SER UMA VAR GLOBAL (declarada fora de qualquer função, declarada num escopo global).
        Ao tentarmos acessar b em um contexto global, ela estará undefined.

        let b = 123 // Warning.
        this.b // Undefined, this, nesse caso representa o window.

        b // Esse funciona, b vai estar disponível.

        ATENÇÃO: declarar com var vai direto para o window, porém com let ou const não vai direto para o window.

        const c = 456
        window.c // Undefined, mas até que para var tudo bem.

    }

Se tivermos uma variável compartilhada com todo o nosso sistema, qualquer pessoa ou código dentro desse sistema pode mexer em tal variável e isso é PROBLEMA!
Evite tocar o escopo global, a não ser que sejam constantes uma vez que nada/ninguém pode mudá-las.

Se tivermos uma função declarada nomeada (as normais) globalmente, ela também estará em windows/this.
    {
        function f1() { return this === window }

        f1() // OK.
        window.f1() // OK.
        this.f1() // Ok.
    }
Porém, outras funções que fuja de tal padão estára disponível apenas em um contexto de escopo global, mas não no objeto global window.
    {
        const f2 = () => console.log(this === window) // E.g: criada dentro de uma constante.

        f2() // Ok, essa é uma chamada direta.
        windows.f2() // Erro, não é função.
        this.f2() // Erro, não é função.
        
        IMPORTANTE: constantes e variáveis declaradas com let e com var não vão diretamente para dentro do objeto windows, eles ficam em um lugar em meméoria dentro do browser que não conseguimos acessar, porém essas constantes e variáveis, dentro de tal objeto protegido, ainda possuem escopo global.
            {
                f2 = 123 // Erro, pois já fora declarado antes.

                f2 = 123 // Erro pelo mesmo motivo.
            }  
    }

Uma das maneiras de se fujir do objeto/escopo global é criando objetos:
    {
        let pessoa = {nome: 'Ana', falar: function() {return `Eu sou ${this.nome}` }} // Não está no escopo global, mas sim no do objeto pessoa.
        /*
        - Acima criamos um atributo "falar", que recebe uma função anônima capaz de retornar o nome de uma isntância atribuido ao atributo "nome" de uma suposta instância do objeto pessoa. Atenção ao "template-string" delimitado por crases, bem como a chamada de sua expressão (${}).

        - IMPORTANTE:~Em tal contexto, "this" não mais representa window, mas sim o próprio objeto.
        {
            pessoa.falar() // Ok.

            this.nome() // Erro, "this" aqui fora quer dizer window e não pessoa! (this === window)

            - IMPORTANTE: quando eu estiver dentro de um contexto de objeto, this vai apontar para o próprio objeto. Ao invés de poluir o escopo global, eu prefiro poluir um objeto de meu e de meu  controle, sendo o nome pessoa a única coisa no/dentro do escopo global que eu toco.

            - IMPORTANTE: Parece haver nessa aula uma confusão entre a ideia de disponíveis no objeto global, e var declaradas globalmente, sendo seus tipo o mais importante para uma definição que, a principio parecia haver dicotomia, mas agora é tratada de maneira equivalente, porém com os perks oriundos das declarações utilizando <nada>, var, let e const.

            - Aqui, pessoa está no escopo global com funções agrupadas dentro do escopo de pessoa.
        }
    }
    Se adicionarmos:
    {
        pessoa.verificarEscopo = function() { return this === window }

        - Nesse caso, se eu chamar uma função a partir de pessoa para verificar se this é extritamente igual à window.

        f(){ return this === window } // Função também anônima com a mesma função da anterior!

        pessoa.verificarEscopo() // retorna false (pessoa != window)
    }

    ---- Agora no VS Code (Node, npm):
IMPORTANTE: Global dentro do Node equivale ao objeto window do browser!
*/
let a = 3;

console.log(global.a); // Undefined.
console.log(this.a); // Undefined.

global.b = 123;

console.log(this.b); // Ok.
console.log(global.b); // Ok.

this.c = 456;

console.log(global.c); // Ok.
console.log(this.c); // Ok.

console.log(module.exports.c); // Ok.
console.log(module.exports === this); // this.c exporta c para fora do arquivo em que a declaramos.
/*
    Dentro de Node, cada arquivo é um módulo, algo diferente do que ocorre ao se programar na web onde todos os arquivos geralmente são minificados, o que gera um único arquivo em que tudo ali está disputando no escopo global (min: 14.01, aula 73).
    No caso de Node, cada arquivo é um módulo diferente, sua aplicação é toda modularizada e cada arquivo representa um módulo. SÃO IDEIAS DIFERENTES!
    */
// this.c = 456 // Anteriormente declarado.
this.d = false;
this.e = "teste";

console.log(module.exports); // Se eu imprimir o módulo de exports, um objeto, contendo todos os respectivos valores, é retornado para fora.

// O acima mencionado é equivalente, e mais frequênte em Node, a:
module.exportsd = { c: 456, d: false, e: "teste" }; // o this dentro de um arquivo é o módulo de exports, portanto as linha 116, 128 e 129 equivalem à linha 134.

/*
    - IMPORTANTE: Quando declaramos let a = 3 (linha 1), ele fica global, isto é, fica dentro deste arquivo não sendo exportada. Não fica no global, é local.
    */

// Criando uma variável maluca: sem var e let!
abc = 3; // Não faça isso em casa!!!
console.log(global.abc);
/*
    Tais variáveis são colocadas diretamente dentro do objeto global do Node, e isso deve ser evitado!

    É preciso conhecer o runtime em que estou executando (local no qual estou executando javascript. Node, por exemplo, é mais para o backend (conhecer seu sistema de módulos)).
    Declarar outra abc sem var ou let, eu posso estar sobrescrevendo uma variável no contexto global, o que pode ser muito ruim para o seu programa!
    */

/*
    Pesquisar:
    Runtime JavaScript (o mais importante!!!);
    Padrões de projetos associados;
    Como escrever código;
    Como se penar em JS;
    Paradigmas.

    E lembre-se, fuja do escopo global. Não coloque variáveis no escopo global, se for necessário use constantes pois ninguém pode alterá-las. Se for preciso tocar o escopo global, sempre toque ele dentro de um objeto e toque ele a partir de tal objeto com suas coisas dentro dele.
    */
