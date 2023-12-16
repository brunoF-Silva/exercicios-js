function funcionaOuNao(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    try {
      confirm.log('tempo')
      if(Math.random() < chanceErro) {
        reject('Ocorreu um erro!')
      } else {
        resolve(valor)
      }
    } catch(e) {
      reject(e) // Mesmo com reject os thens irão ser ativados
    }
  })
}

// Erros podem acontecer dentro da Promise ou mesmo dentro de um then
funcionaOuNao('Testando...', 0.5)
  .then(v => `Valor: ${v}`)
  .then(
    v => console.log(v),
    err => console.log(`Err Esp.: ${err}`) // Erro específico de um then, o primeiro tratamento de erro é sempre utilizado. Apos um catch ou o tratamento de um erro o valor que é passado adiante não fica mais disponível. catchs geralmente ficam no final da sequência (chaining) por causa disso.
  )
  .then(() => console.log('Quase Fim!'))
  .catch(err => console.log(`Erro geral: ${err}`))
  .then(() => console.log('Fim!'))