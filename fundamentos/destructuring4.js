function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min] // como min e max são "var" provenientes de uma operação de destructuring, aqui criamos uma nova array relocando-as de lugar, caso if seja atendido.
}