// Node faz cache dos módulos
module.exports = {
  valor: 1,
  inc() {
    this.valor++;
  },
};

// Esse objeto que representa um contador simples terá uma única instância para todos os require
