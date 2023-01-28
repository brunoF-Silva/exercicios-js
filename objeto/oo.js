// CÓDIGO NÃO EXECUTÁVEL!!!
//Paradigma das Linguagens não Estruturadas (go to) Vs Paradigma das Linguagens Estruturadas (OO, etc)
//Paradigma de Linguagens Estruturadas:

//Procedural (relativo a funções, ao processo/procedimento, reutilizar código) -- funções que manipulam dados (Linguagem C).
processamento(valor1, valor2, valor)// Função com dados, valores geralmente globais compartilhados entre os métodos.

//OO - Temos dados, e dentro desses dados temos funçõe (Java)
objeto = {
    valor,
    valor2,
    valor3,
    comportamento () {
        // ...
    }
}

objeto.processamento() // Dados que possuem funções, o foco passou a ser o objeto.

// Principios importantes:
// 1. abstração (saber traduzir objetos do meu sistema para o código)
// 2. encapsulamento (ter os detalhes de implementação escondidos, e mostrar uma interface simples para quem precisa interagir com determinado objeto. Menor nível de acoplamento (dependencia entre objetos))
/* 3. herança (prototype) (relaçao do tipo "É UM"). (maneiras de se reusar códigos: 1°: composição (relação "tem um") (formar objetos complexos a partir de objetos mais simples (ter motor dentro de carro)),
2°: herança (recebe atributos e comportamentos de um objeto pai) JavaScript não permite herança múltipla, conceito de protótipos).
Existe uma hierarquia entre ojetos, mais genéricos no topo, mais específicos abaixo (todo humano é mamífero, mas nem todo mamífero é humano). Geralmente damos prioridade à composição.
*/
// 4. polimorfismo (múltiplas formas) (a partir do exemplo genérico, consigo objetos concretos). O conceito de carro pode apontar, ora para uma ferrari (ligar, acelerar), ora para um uno. A partir de uma variável do tipo mais genérico, atribuindo exemplos mais específicos (faz mais sentido em linguagens tipadas) temos uma relação de herança entre carro e os tipos concretos logo abaixo e assim uma classe filha pode ser referenciada numa classe do tipo pai.
// Polimorfirmos = Variável carro do tipo mais genérico que pode receber atribuições de subtipos (ferrari, civic, etc.)
