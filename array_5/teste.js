Array.prototype.reduce2 = function (callback, valorInicial) {
  acumulador = valorInicial || this[0];
  let inicio = valorInicial ? 0 : 1;
  for (i = inicio; i < this.length; i++) {
    acumulador = callback(acumulador, this[i]);
  }
  return acumulador;
};

const soma = (total, valor) => total + valor;
const nums = [1, 2, 3, 4, 5, 6];
console.log(nums.reduce2(soma, 21));
