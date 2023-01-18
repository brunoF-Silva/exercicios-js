// Instanciando uma função retorna um objeto a partir dessa instância

/*
A forma de se criar objetos em JS é a partir de função.
Posso criar objeto literal oo instanciar uma função e obter minhas próprias variáveis que pertencem a tal instância que foi criada a partir do new e ele funciona mais ou menos como a ideia da classe.
Percebemos que a função exerce a ideia de classe uma vez que define um molde (com funções e variáveis próprias) e a parti dele instanciamos tal função.
Ao criarmos um objeto de forma literal {}, já estamos instanciando um objeto.
Class em JS é apenas uma sintax sugar para função.
*/
console.log(typeof Object)
console.log(typeof new Object)

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {} //ES  (ES6)
console.log(typeof Produto)
console.log(typeof new Produto())