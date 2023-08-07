// Bind conecta o this de uma função à um determinado objeto.
function Pessoa() {
  this.idade = 0; // Quando eu instanciar pessoa, terei o atributo idade disponível para manipulação.

  // setInterval dispara uma outra função a partir de um determinado intervalo
  const self = this;
  setInterval(
    function () {
      self.idade++;
      console.log(self.idade);
    } /*.bind(this)*/,
    1000
  );
}
new Pessoa();

/*
Caso eu utilize this sem o bind em setInterval, this não apontará para o objeto pessoa uma vez que a função é disparada por um temporizador e não pelo objeto pessoa.
Bind conecta o this a esse objeto dessa nova função criada.
Const self é um artifício com o mesmo efeito
*/

/*
setInterval possue um contador que realiza a chamada da função, como o this varia de acordo com a achamada da funão (menos para arrow function), em setInterval não temos o mesmo this que em Pessoa e por isso, ao tentar executar com a palavrinha this teriamos vários NaN.
*/
