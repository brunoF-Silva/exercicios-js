// Em node temos alguns objetos e constantes que são disponíveis globalmente: const __dirname, obj global e obj process

// Process lê direto do teclado e exibe no termina

// node 21_entraESaida.js -a (posso passa tal flag que ela será interpretada pelo meu programa a partir do process, ao utilizar process)

const anonimo = process.argv.indexOf('-a') !== -1
// console.log(anonimo) // V ou F

if(anonimo){
  process.stdout.write('Fala Anônimo!\n')
  process.exit() // Aborta o processo
} else {
  process.stdout.write('Informe o seu nome: ') //Saída padrão = console

  //Usando a entrada padrão (teclado), no evento de entrada de dados (on data) execute a função que recebe como parametro a variável data ... o enter veio junto então substitua o \n por nada na entrada do usuário
  process.stdin.on('data', data => {
    const nome = data.toString().replace('\n', '')

    process.stdout.write(`Fala ${nome}!!\n`)
    process.exit()
  })
}