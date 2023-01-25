// 01)
const operacoes = function (op1, op2) {
    console.log(op1, '+', op2, '=', op1 + op2, '.')
    console.log(op1 + ' - ' + op2 + '=', op1 - op2)
    console.log(`${op1} * ${op2} = ${op1 * op2}`)
    console.log(`${op1} / ${op2} = ${op1 / op2}`)
}
// console.log(operacoes(5, 5))

// 02)
function tipoTriangulo(l1, l2, l3) {
    if (l1 == l2 && l1 == l3) {
        console.log('Equilátero.')
    } else if (l1 != l2 && l1 != l3 && l2 != l3) {
        console.log('Escaleno.')
    } else {
        console.log('Isósceles.')
    }
}
//console.log(tipoTriangulo(3, 7, 5))

// 03)
const potenciacao = (a, b) => console.log(a ** b)
//potenciacao(2, 4)

// 04)
const divisao = (dividendo, divisor) => {
    const resto = dividendo % divisor
    console.log(`${dividendo} / ${divisor} = ${(dividendo / divisor).toFixed(2)} com resto ${resto}`)
}

// divisao(15, 5)

// 05)
function formataDinheiro(decimal) {
    decimal = decimal.toFixed(2)
    decimal = decimal.toString().replace(".", ",")

    console.log(`R$${decimal}`)
}

// formataDinheiro(0.30000000000000004);

//06)
const jurosSimples = (capital, taxa, tempo) => (capital * taxa / 100 * tempo).toFixed(2)
const jurosCompostos = (capital, taxa, tempo) => (capital * (1 + taxa / 100) * tempo).toFixed(2)

const jS = jurosSimples(100, 10, 2)
const jC = jurosCompostos(100, 10, 2)
// console.log("O montante de juros simples equivale a R$" + jS + " e o montante de juros compostos equivale a R$" + jC )

//07)
const delta = (a, b, c) => Math.sqrt(Math.pow(b, 2) - 4 * a * c)

function bhaskara (a, b  = 0, c = 0) {
    if (delta(a, b, c) > -1) {
        let raiz = [2]

        raiz[0] = ((-b + delta(a, b, c)) /  (2 * a)).toFixed(2)

        raiz[1] = ((-b - delta(a, b, c)) / (2 * a)).toFixed(2)

        return raiz
    } else {
        return 'Delta é negativo'
    }
}
// let resp = bhaskara(3, -2, -8)
// let resp1 = bhaskara(1, -3, 5)
// let resp2 = bhaskara(1, 0, -1)
// console.log(resp, resp1, resp2)

//08)
const transformaInteiro = temporada => {
    const pontuacao = temporada.split(" ")

    let pontuacaoInt = []

    for (let i in pontuacao) {
        pontuacaoInt.push(Number(pontuacao[i]))
    }
    console.log(pontuacaoInt.lenght)
    return pontuacaoInt
}

const score = function (temporada) {
    temporada = transformaInteiro(temporada)

    let pontuacao = temporada[0]
    let cont = 0
    let pior = 0

    for (let i in temporada) {
        if (temporada[i] > pontuacao) {
            pontuacao = temporada[i]
            cont++
        }
    }
    pontuacao = temporada[0]

    for (let j = 0; j < temporada.length; j++) {
        if (temporada[j] < pontuacao ) {
            pontuacao =  temporada[j]
            pior = j
        }
    }
    console.log(pontuacao)
    return [cont, pior]
}

// const desempenho = score("10 20 20 8 25 3 0 30 1")
// console.log(`Pedro superou sua melhor pontuação ${desempenho[0]} vezes e seu pior desempenho aconteceu durante o jogo de número ${desempenho[1] + 1}`)

//09
// Função factory -- retorna a instância de um objeto:
// const pessoa = (nome, nota) => {
//     return {
//         nome,
//         nota,
//         colegio: 'CEFF'
//     }
// }
// const pessoa1 = pessoa('Renata', 36)
// // pessoa1.colegio = 'FF'
// // console.log(pessoa1)

// // Função construtora -- Retorna a instância de uma função equivalente a um obj.
// function aluno(nome, nota) {
//     this.nome = nome
//     this.nota = nota
//     this.colegio = 'CEFC'
// }
// const aluno1 = new aluno('Luiz', 37)
// aluno1.colegio = 'FC'
// console.log(aluno1)

function situacaoFinal(estudante) {
    if (estudante.nota == 0)
        estudante.nota = Math.random * (100 - 0) + 0

    if (estudante.nota >= 37) {
        for(let i = 0; i < 4; i++) {
            if ((estudante.nota + i )% 5 == 0) {
                estudante.nota += i
                break
            }
        }
    }

    if (estudante.nota >= 40)
        console.log(`O aluno ${estudante.nome} foi aprovado com ${estudante.nota}`)
    else
        console.log(`O aluno ${estudante.nome} foi reprovado com nota ${estudante.nota}`)
}

// situacaoFinal(pessoa1)

//10)
const verificaInt = num => Number.isInteger(num)

const multiploTres = num => {
    if (verificaInt(num)) {
        if (num % 3 == 0)
            return true
        else
            return false
    } else {
        console.log('Não era inteiro!')
    }
}

// console.log(multiploTres(2))


//11)
function anoBissexto(ano) {
    let cont = 0
    if (ano % 4 == 0) {
        while (cont * 4 * 25 <= ano || cont * 4 * 50 <= ano || cont * 4 * 75 <= ano  || cont * 4 * 100 <= ano) {
            if (cont * 4 * 25 == ano || cont * 4 * 50 == ano || cont * 4 * 75 == ano ) {
                console.log('O ano '+ ano + ' não é Bissexto.')
                return false
            } else if (cont * 4 * 100 == ano) {
                console.log('O ano ' + ano + ' é bissexto.')
                return true
            }
            cont++
        }

        console.log("É um ano bissexto!!!")
        return true
    } else {
        console.log(ano + ' não bissexto.')
        return false
    }
}

// anoBissexto(804)


//12)
const fatorial = num => {
    if (num == 0) {
        console.log(1)
    } else {
        let cont = 1, num2 = num, final = 1
        while (num2 >= 1) {
            num2 = num
            num2 -= cont
            final *= num2 + 1
            cont++
        }
        return final
    }
}
// console.log(fatorial(0))

//13)
function diaUtil (dia) {
    switch (dia) {
        case 1:
            console.log('Domingo é fim de semana.')
            break
        case 2:
            console.log('Segunda é dia útil.')
            break
        case 3:
            console.log('Terça é dia útil.')
            break
        case 4:
        case 5:
        case 6:
            console.log('É dia útil.')
            break
        case 7:
            console.log('Sábado é fim de semana.')
            break
        default:
            console.log(`${dia} não é um número válido!`)
    }
}

// console.log(diaUtil(5))

// 14)
function feira (fruta) {
    fruta = fruta.toLowerCase()
    switch (fruta) {
        case "maça":
            console.log('Não vendemos essa fruta aqui.')
            break
        case "kiwi":
            console.log("Estamos com escasses de kiwis.")
            break
        case "melancia":
            console.log("Aqui está, são 3 reais o quilo.")
            break
        default:
            console.log("Erro! Fruta não encontrada.")
    }
}

// feira('MELANCIA')

// 15) 
function whichCar (wish) {
    wish = wish.toLowerCase()
    switch (wish) {
        case 'hash':
            console.log("Compra efetuada com sucesso.")
            break
        case 'sedan':
        case 'motocicletas':
        case 'caminhonetes':
            console.log("Tem certeza que não prefere outro modelo?")
        break
        default:
            console.log("Não trabalhamos com este tipo de automóvel aqui.")
    }
}

// console.log(whichCar('skate'))

// 16)
function calculadora (op1, sinal, op2) {
    switch (sinal) {
        default:
            console.log('Símbolo não reconhecido!')
            break
        case '+':
            return op1 + op2
        case '-':
            return op1 - op2
        case '*':
            return op1 * op2
        case '/':
            return (op1 / op2).toFixed(2)
    }
}

// console.log(calculadora(5, "=", 6));

// 17)

function aumento (plano, salario) {
    plano = plano.toLowerCase()
    switch (plano) {
        case 'a':
            console.log(`Seu novo salário é = R$${salario *=  1.1}`)
            break
        case 'b':
            console.log("Seu novo salário é = R$", salario *= 1.15, ".")
            break
        case 'c':
            console.log("Plano Premiun reconhecido! Novo salário = R$"+ (salario *= 1.2)+'.')
            break
        default:
            console.log("Plano inválido!")
    }
}

// aumento('d', 1000)


// 18)

function extenso (numero) {
    switch (numero) {
        case 1:
            console.log('Um')
            break
        case 0:
            console.log('Zero')
            break
            case 2:
            console.log('Dois')
            break
        case 3:
            console.log('Três')
            break
        case 4:
            console.log('Quatro')
            break
        case 5:
            console.log('Cinco')
            break
        case 6:
            console.log('Seis')
            break
        case 7:
            console.log('Sete')
            break
        case 8:
            console.log('Oito')
            break
        case 9:
            console.log('Nove')
            break
        case 10:
            console.log('Dez')
            break
        default:
            console.log('Número fora do intervalo.')
    }
}
// extenso(1)


// 19)

const transformaReal = num => num = num.toFixed(2).toString().replace('.',',' )
const traduzCardapio = (codigo, qtd) => {
    switch (codigo) {
        case 100:
            console.log(`Pedido: ${qtd}x Cachorro Quente. Valor: R$${transformaReal(qtd * 3)}`)
            break
        case 200:
            console.log(`Pedido: ${qtd}x Hambúrger Simples. Valor: R$${transformaReal(qtd * 4)}`)
            break
        case 300:
            console.log(`Pedido: ${qtd}x Cheeseburger. Valor: R$${transformaReal(qtd * 5.50)}`)
            break
        case 400:
            console.log(`Pedido: ${qtd}x Bauru. Valor: R$${transformaReal(qtd * 7.50)}`)
            break
        case 500:
            console.log(`Pedido: ${qtd}x Refrigerante. Valor: R$${transformaReal(qtd*3.50)}`)
            break
        case 600:
            console.log(`Pedido: ${qtd}x Suco. Valor: R$${transformaReal(qtd * 2.50)}`)
            break
        default:
            console.log("Produto inexistente.")
    }

}

// traduzCardapio(900, 2)

// 20)

function saque (valor) {
    const cedulas = [1, 5, 10, 50, 100]
    let novoValor = 0
    let qtd = []

    if (Number.isInteger(valor)) {
        for (let i = cedulas.length-1; i >= 0; i--) {
            if (cedulas[i] + novoValor <= valor) {
                qtd.push(i)
                novoValor += cedulas[i]
                i = cedulas.length
            }
        }
        console.log(qtd)
    }
    qtd.sort()
    console.log(qtd)
    let cont = 1
    for (let i in qtd) {
        if (qtd[i] == qtd[++i] && ++i <= qtd.length) {
            cont++
        } else {
            console.log(`${cont} nota(s) de ${cedulas[qtd[--i]]}`)
            cont = 1
        }
    }
}

// saque(1)

// 21)

const pagarSeguro = idade => {
    if (verificaInt(idade) && idade >= 0) {
        if (idade < 10) {
            return 180
        } else if (idade <= 30) {
            return 150
        } else if (idade <= 60) {
            return 195
        } else {
            return 230
        }
    } else {
        return -1
    }
}

// console.log(pagarSeguro(-10.5))

// 22)
function anuidade (mes, valor) {
    if (mes >= 1 && mes <= 12) {
        for (let i = 1; i <= mes; i++) {
            valor *= 1.05
        }
        return valor.toFixed(2)
    } else {
        return -1
    }
}

// console.log(anuidade(3, 100))

// 23
const acharMaior = notas => notas.sort()
function mediaFinal (codigo, nota1, nota2, nota3) {
    notas = [nota1, nota2, nota3]
    acharMaior(notas)
    console.log(notas)
    let resultado
    notas.push(((notas[0] * 0.4 + notas[1] * 0.3 + notas[2] * 0.3)/(0.4 + 0.3 + 0.3)))
    if (notas[3] > 5)
        resultado = 'APROVADO'
    else
        resultado = 'REPROVADO'
    console.log(`Aluno ${codigo}: média: ${notas[3].toFixed(2)}: ${resultado}}`)
}
// mediaFinal(1001, 5.5, 10, 10)

// 24)
const helloOnze = _ => {
    let cont = 0
    while (cont != 11) { // printar gasta 1, preciso de 11 para printar 11
        console.log('Hello World')
        cont ++
    }
}
// helloOnze()

// 25)
function umACinquenta (_) {
    for (let i = 1; i < 51; i++) {
        console.log(i)
    }
}

// console.log(umACinquenta())
// 26)
let pares = _ => {for (let i = 0; i <= 100; i+=2) {if(i != 0) console.log(i)}}
// console.log(pares())

// 27)
function taxaCrescimento (altura1, altura2, taxa1, taxa2) {
    function geraCrianca (altura, taxa) {
        this.altura = altura
        this.taxa = taxa
    }
    crianca1 = new geraCrianca(altura1, taxa1)
    crianca2 = new geraCrianca(altura2, taxa2)
    let cont = 0
    
    if (crianca1.altura > crianca2.altura) {
        while (crianca2.altura <= crianca1.altura && cont != 100) {
            crianca1.altura = crianca1.altura * (1 + crianca1.taxa)
            crianca2.altura = crianca2.altura * (1 + crianca2.taxa)
            cont++
            console.log(cont)
            console.log(crianca1.altura)
            console.log(crianca2.altura)
        }
        if(cont != 100)
            console.log(`A criança 2 passará a criança 1 em ${cont} ano(s).`)
        else
            console.log('A criança menor jamais ultrapassa a outra.')
    } else if (crianca2.altura > crianca1.altura) {
        while (crianca1.altura <= crianca2.altura && cont != 100) {
            crianca1.altura = crianca1.altura * (1 + crianca1.taxa)
            crianca2.altura = crianca2.altura * (1 + crianca2.taxa)
            cont ++
            console.log(cont);
            console.log(crianca2.altura);
            console.log(crianca1.altura);
        }
        if(cont != 100)
            console.log(`A criança 1 passará a criança 2 em ${cont} ano(s).`)
        else
            console.log('A criança menor jamais ultrapassa a outra.')
    } else {
        console.log("As duas crianças possuem a mesma altura!")
    }
}

// taxaCrescimento(150, 100, 0.5, 0.6)
// taxaCrescimento(100, 150, 0.6, 0.5)

// 28)
const intParImpar = function intParImpar (vetor) {
    let nPar = 0, nImpar = 0
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] % 2 == 0) {
            nPar +=1
        } else {
            nImpar++
        }
    }
    return [nPar, nImpar]
}
// console.log(intParImpar([2,8,12,3,6,8,7]))
// console.log(typeof intParImpar)

// 29)
const intervaloVetor = (vetor) => {
    let cont1 = 0, cont2 = 0
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] >= 10 && vetor[i] <= 20) {
            cont1++
        } else {
            cont2++
        }
    }
    console.log("Temos " + cont1 + " valores entre 10 e 20, e " + cont2 + " estão fora do intervalo.")
}
// intervaloVetor([10, 20, 15, 1, 50])

// 30)
function maiorNoVetor (vetor) {
    let swap1 = vetor[0], swap2 = vetor[0]
    
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] > swap1) {
            swap1 = vetor[i]
        }
        if (vetor[i] < swap2) {
            swap2 = vetor[i]
        }
    }
    console.log(`O menor valor é ${swap2} e o maior é ${swap1}`)
}

// maiorNoVetor([5 , 0.3, 1, 200, -50, -49, 3, 200.5])

// 31)

const contNegativo = vetor => {
    let cont = 0
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] < 0) {
            cont++
        }
    }
    console.log(`Existem ${cont} números negativos neste vetor.`)
}
// contNegativo([-2,-1,0,1,2])

// 32)
function media (vetor) {
    let numerador = 0
    for (let i = 0; i < vetor.length; i++) {
        numerador += vetor[i]
    }
    console.log(`A média aritmética simples de ${vetor} é = ${(numerador/ (vetor.length)).toFixed(2)}`)
}
// media ([5, 10 ,5])

// 33)
let vetorInteiro = [1, 3, 2, 4]
let vetorString = ['um', 'dois', 'três', 'quatro']
let vetorDouble = [3.5, 5.9, 7.8, 8.8]

const vetorConcat1 = vetorInteiro.concat(vetorString, vetorDouble)
const vetorConcat2 =  vetorString.concat(vetorInteiro, vetorDouble)

// console.log(vetorConcat1, vetorConcat2)

// 34)
function comparaString (string1, string2) {
    string1.toLowerCase
    string2.toLowerCase
    let flag = 0
    let swap
    if (string2 > string1) {
        swap = string2
        string2 = string1
        string1 = swap
    }

    for (let i = 0; i < string1.length; i++) {
        for (let j = 0; j <= string2.length; j++) {
                if (j != string2.length) {
                    if (string1[i] ==  string2[j]) {
                        break
                    }
                } else {
                    return false
                }
            }
    }
    return true
    // Não fazia sentido eu testar um caso com a string maior para cada elemento da menor pois, após o tamanho da menor ainda existiriam caractéres na string maior
}

// console.log(comparaString('abcbbbc', 'cba'))

// 35)
const vetorPilha = [1, 2, 3, 4, 5]
const vetorAdiciona = [6, 7, 8, 9, 10]

for (let i = 0; i < vetorAdiciona.length; i++) {
    vetorPilha.push(vetorAdiciona[i])
}
// console.log(vetorPilha)

// 36)
function multVet (vetor, num) {
    for (let i = 0; i < vetor.length; i++) {
        vetor[i] = vetor[i] * num
    }
    return vetor
}
const multVetCinco = (vetor, num) => {
    if (num >= 5) {
        for (i = 0; i < vetor.lenth; i++) {
            vetor[i] = vetor[i] * num
        }
        return vetor
    }
}

vetorInteiro = [1, 2, 3] 
// console.log(multVet(vetorInteiro, 5)) 
// console.log(multVetCinco(vetorInteiro, 5))

// 37)
const progressaoAritmetica = (n, a1, r) => {
    let vetor = [a1]
    for (i = 0; i < n; i++) {
        if(i != 0) {
            vetor[i] = vetor[i-1] + r
        }
    }
    return vetor
}

function progressaoGeometrica (n, a1, r) {
    let vetor = [a1]
    for (i = 0; i < n; i++) {
        if (i != 0) {
            vetor[i] = vetor[i - 1] * r
        }
    }
    return vetor
}
// console.log(progressaoAritmetica(6, 2, 2))
// console.log(progressaoGeometrica(6, 2, 2))

// 38)
function printaIntervalo(inicio = 0, fim = 100) {
    if (inicio > fim) { // Ver como fazer sem if
        let swap = inicio
        inicio = fim
        fim = swap
    }
    for (let i = inicio; i <= fim; i++) {
        if (i % 2 != 0) {
            console.log(i)
        }
    }
}
// printaIntervalo(10, 3)

// 39)
function trocaVetor (vetor1, vetor2) {
    if (vetor1.length == vetor2.length) {
        for (let i = 0; i < vetor1.length; i++) {
            vetor1.push(vetor2[i])
            vetor2.push(vetor1[i])
            
            vetor1[i] = vetor1[vetor1.length - 1]
            vetor2[i] = vetor2[vetor2.length - 1]
            vetor1.pop()
            vetor2.pop()
        }
    }
    return [vetor1, vetor2]
}

// console.log(trocaVetor([1, 2, 3], [3, 2, 1]))

// 40)

const trocaVirgula = function(nota) {
    return nota = nota.replace(',','.')
} 
function notasAmericanas (nota) {
    nota = Number(trocaVirgula(nota))
    
    if (nota >= 0 && nota <= 4.9) {
        console.log('D')
    } else if (nota <= 6.9) {
        console.log('C')
    } else if (nota <= 8.9) {
        console.log('B')
    } else if (nota < 10) {
        console.log('A')
    } else {
        console.log('Nota inválida!')
    }
}
// notasAmericanas('99,0')