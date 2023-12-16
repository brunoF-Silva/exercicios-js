console.log(Math.ceil(6.1));

const obj1 = {};
obj1.nome = "Bola";
// obj1['nome'] = 'Bola2' VANTAGEM: posso acerssar tal atributo de um obg com uma string nomes com espaço. DESVANTAGEM: exige acesso sempre assim.
// Dê preferência para a notação ponto.
console.log(obj1.nome);

function Obj(nome) {
  this.nome = nome; // o nome que for associado ao objeto que for criado a partir dessa função.
  /*
    Vamos receber o atributo nome por parâmetro e esse nome ficará visível para quem instanciar um objeto do tipo função OBJ. Ou seja, nome será um atributo público. Só var seria visível apenas dentro do escopo da função.
    Assim como posso definir outras funções dentro de Obj e torná-las públicas também.
    */
  var tipo = "Plástico";
  this.exec = function () {
    console.log("Exec...");
  };
}

const obj2 = new Obj("Cadeira"); //passe parâmetro ou terá undefined.
const obj3 = new Obj("Mesa");
console.log(obj2.nome);
console.log(obj2.tipo);
console.log(typeof obj2);

console.log(obj3.nome);
obj3.exec();
