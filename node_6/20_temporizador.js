// Em exercicios-js dou npm i node-schedule@1.3.0 -E, para poder disparar de forma temporizada algum tipo de ação
const schedule = require('node-schedule')

// Executa de 5 em 5s, às 20h de uma quinta-feira
const tarefa1 = schedule.scheduleJob('*/5 * 20 * * 4', function () {
  console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function () {
  tarefa1.cancel() // Cancelando uma ação criada a partir do scheduleJob
  console.log('Cancelando Tarefa 1!')
}, 20000) // Execute esse cancelamento depois de 20s

// setImmediate com o valor zerado
// setInterval dispara uma função de tempos em tempos

// Existe um objeto dentro do node-schedule chamado recurrenceRule (Regra de recorrencia), instancie-o
const regra = new schedule.RecurrenceRule() // Adc os valores necessários para que RecurrenceRule fique, de forma recorrente, executando tal regra
regra.dayOfWeek = [new schedule.Range(1, 5)] //Executa de segunda a sexta
regra.hour = 20 // Na hora 20
regra.second = 30 //no segundo 30, ele vai executar essa regra

const tarefa2 = schedule.scheduleJob(regra, function () { // Use regra na função
  console.log('Executando Tarefa 2!', new Date().getSeconds())
})