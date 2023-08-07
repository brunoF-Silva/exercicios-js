{
  {
    {
      {
        var sera = "Será??? ";
        console.log(sera);
      }
    }
  }
}

console.log(sera); // var só é local dentro de funções.

function teste() {
  var local = 123;
  console.log(local);
}
teste();
console.log(local);
/* tudo que for declarado dentro de uma página e estiver fora do objeto window é visível no objeto window (objeto global) min: 6:39. No brower, no VS se chama "Global".
Var globais são problemas pois podem ser acidentalmente alteradas e causar sérios problemas. */
