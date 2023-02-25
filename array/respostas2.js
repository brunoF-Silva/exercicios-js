//1)
const cumprimentar = nome => console.log(`Olá, ${nome}!`)
// cumprimentar('Bruno')

//2)
const converterIdadeEmAnosParaDias = anos => anos * 365
// console.log(converterIdadeEmAnosParaDias(70))

//3)
const calcularSalario = (horasTrabalhadas, salarioHora) => `Salário igual a R$ ${(horasTrabalhadas * salarioHora).toFixed(2).replace('.', ',')}`
// console.log(calcularSalario(150, 40.5))

//4)
function nomeDoMes (numero) {
    switch (numero) {
        case 1:
            return 'janeiro'
            break
        case 2:
            return 'fevereiro'
            break
        case 3:
            return 'março'
        case 4:
            return 'abril'
        case 5:
            return 'maio'
        case 6: 
            return 'junho'
        case 7:
            return 'julho'
        case 8:
            return 'agosto'
        case 9:
            return 'setembro'
        case 10:
            return 'outubro'
        case 11:
            return 'novembro'
        case 12:
            return 'dezembro'
        default:
            return 'valor fora do intervalo.'
    }
}
// console.log(nomeDoMes(5))

//5)
const maiorOuIgual = function (num1, num2) {
    if (num1 >= num2 && num1 === num2) return true
    else return false
}

// console.log(maiorOuIgual(5, 1))

//6)
function inversao (valor) {
    if ((typeof valor == 'number' && !Number.isNaN(valor)) && valor !== 0) {
        return valor * -1
    } else if (valor === true) {
        return false
    }else if (valor === false) {
        return true
    } else if (valor === 0) {
        return 0
    } else {
        return 'booleano ou valor número esperados, mas o parâmetro é do tipo ' + typeof valor
    }
}

// console.log(inversao(7.5))

//7)
function estaEntre (numero, minimo, maximo, inclusivo = false) {
    if (typeof inclusivo == 'boolean') {
        if (inclusivo != false) {
            if (numero >= minimo && numero <= maximo)
            return  true
            else 
            return false
        } else {
            if (numero > minimo && numero < maximo)
            return  true
            else 
            return false
        }
    }
}

// console.log(estaEntre(0, 0, 4, false))

// const oito = palavra => {
//     palavra = palavra || 'pessoa'
//     console.log(`Olá ${palavra}`)
// }

// oito()

//8)
function multiplicar(num1, num2) {
    if (Number.isInteger(num1) && Number.isInteger(num2) && ((num1 > -1) && (num2 > -1))){
        if (num1 != 0) {
            const produto = Array.apply(null, { length: num1 }).map((_) => num2).reduce(function(acumulador, atual){
                return acumulador + atual
            })
        
            return produto
        } else {
            const produto = Array.apply(null, { length: num2 }).map((_) => num1).reduce((acumulador, atual) => acumulador + atual)

            return produto
        }
    } else {
        return -1
    }
}

// console.log(multiplicar(8, 8))

//9
const repetir = (elemento, tamanho) => Array.apply(null, {length: tamanho}).map(_ => elemento)

// console.log(repetir("elemento", 3))

//10 -- REFAZER COM REDUCE
function simboloMais (vezes) {
    let resultado = ""
    for(let i = 0; i < vezes; i++) {
        resultado = resultado.concat("+")
    }
    return resultado
}

// console.log(simboloMais(5))

//11)
function receberPrimeiroEUltimoElemento (array) {
    let resultado = array.filter(function(_, indice){
        return indice == 0
    })
    resultado = resultado.concat(array.filter((_, indice) => indice == array.length - 1))

    return resultado
}
let vetorQuatroElementos = [0, 1, 2, 3]
// console.log(opa.flatFilter(receberPrimeiroEUltimoElemento(opa)))
console.log(receberPrimeiroEUltimoElemento(vetorQuatroElementos))

Array.prototype.flatFilter = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}
const pegaPrimeiro = array => array.reduce((_, indice) => indice == 0)
const pegaUltimo = array => array.reduce((_, indice => indice == array.length - 1))

function receberPrimeiroEUltimoElemento2 (array) {
    
}