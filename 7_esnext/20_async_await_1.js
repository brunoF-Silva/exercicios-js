function esperarPor(tempo = 2000) {
  return new Promise(function (promise) {
    setTimeout(() => promise(), tempo)
  })
}


/*
Após receber os dados da função assíncrona, o encademanento de thens
se dá de forma sequencial entre eles (como algo síncrono), mas assíncrona para o código (rodarão paralelamente ao que estiver sendo executado no código no momento)
*/
// esperarPor(1500)
//   .then(() => console.log("Executando callback..."))
//   .then(esperarPor)
//   .then(() => console.log("Executando callback..."))
//   .then(esperarPor)
//   .then(() => console.log("Executando callback..."))
  
  
  /*
  Como fazer o mesmo código anterior utilizando async await?
  A ideia de se usar async await é se ter um código que parece síncrono embora ele seja assíncrono, ou seja, ao invés de chamar a função then, o código ficará parado esperando a execução e só irá para a próxima linha quando ele parar a execução.
  Quando você marca uma função como assíncrona
  você tem a capacidade de esperar DENTRO DELA que uma determinada
  promise seja resolvida sem usar o método then, usar o async é como pegar
  diretamente o valor de resposta da função esperarPor.
  
  async await faz faz exatamente a mesma coisa que then, mas me permite ma
  nipular o valor retornado por resolve() dentro de uma variável.
  O código só parece síncrono com relação a outros await dentro da
  funçãoa async, executando de forma assíncrona com relação ao resto do código.
  */

function retornarValor() {
  return new Promise(resolve => {
    setTimeout(() => resolve(10), 5000)
  })
}

async function retornarValorRapido() {
  return 20 // Retorna o 20 dentro de uma promise, acessível por then
  // ou acessível por await dentro de outra async
  // dentro de uma função async, retornar algo quer dizer usar o resolve nisso
  // 20 é retornado como se eu estivesse chamando resolve nesse valor
}

 async function executar(){ //awai só pode ser usado dentro de função async
  let valor = await retornarValorRapido() // Você vai usar o await em uma função que retorna uma promise e elá lhe dará o valor retornado, caso omita o await, você terá um objeto promise
  await esperarPor(1500)
  console.log(`Async/Await ${valor}`)
  
  await esperarPor(1500)
  console.log(`Async/Await ${valor + 1}`)
  
  await esperarPor(1500)
  console.log(`Async/Await ${valor + 2}`)

  return valor + 3
}

/* 
Como é que eu consigo, a partir da fução executar, pegar o valor de return de executar?
const v = executar() dá errado pois como executar está marcada como async
ela irá retornar uma promise
Para acessar o valor retornado por executar fora de uma função devemos usar o .then, then irá esperar o valor ser resolvido em executar e o mostrará
executar().then(console.log)
*/

async function executarDeVerdade(){
  const valor = await executar()
  console.log(valor)
}

executarDeVerdade()
