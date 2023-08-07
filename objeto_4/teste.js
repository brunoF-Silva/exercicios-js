prefeitura = {
  logo() {
    return "vivendo por você!";
  },
};
prefeitura["mensalidade"] = 1000;

function Comerciante(nome, comercio) {
  this.nome = nome;
  this.comercio = comercio;
  barraca = "lona";
  this.prototype = prefeitura;
  this.promo = function promo() {
    nome = "mirna";
    return `${this.comercio} tá de promocão!`;
  };
}

maria = new Comerciante("Maria", "Frutas");
console.log(maria.promo());
