// Aula 92
// This é uma forma de uma forma de referenciar o objeto atual daquela execução (contexto de execução =  dono daquela função que está sendo executada naquele contexto).

// O this acessa quem é o dono atual do bloco de código em questão que está sendo executado naquele momento.

// This pode variar dependendo de como a função é chamada, (se ela foi declarada da maneira tradicional).

// Quando eu chamar uma função pelo evento on click, como acontece no vídeo, this representa o próprio elemento que desengatilha o onClick event, por exemplo.

// Arrow functions possuem this que não variam! Ele é definido no momento e no contexto em que a função for definida, this-lexico: função definida dentro do escopo global? O this representa o window.

// O this de arrow functions é definido quando a função é definida (this léxico = a palavrinha this foi definida no contexto que a função foi escrita), por exemplo, funções arraw definidas no escopo global terão o this associado ao objeto global tanto no browser(window) quanto no node (global). Caso sejam declaradas dentro de um objeto, o this sempre irá referenciar o objeto.

// Funções normais o this pode variar.

// No browser:
function f1() {
  console.log(this === window);
}
f1(); //true

document.getElementsByTagName("body")[0].onClick = f1; //false ([0] == o primeiro body de uma página)

function f2() {
  console.log(this === document);
}
f2(); //false

document.getElementsByTagName("body")[0].onClick = f2;
// false

const body = document.getElementsByTagName("body")[0];
function f2() {
  console.log(this === body);
}
document.getElementsByTagName("body")[0].onClick = f2;
// clicando na página: true, pois para onClick, this representa o objeto clicado (const body)

f2(); // false, no escopo global não é body quem o this representa, mas sim o window.

//Arrow functions
const f3 = () => console.log(this === window);
f3(); // true
document.getElementsByTagName("body")[0].onClick = f3;
// clicando na tela (body): true, em arrows function this foi definido no contexto global e sempre permanecerá assim!
this === window; // true
