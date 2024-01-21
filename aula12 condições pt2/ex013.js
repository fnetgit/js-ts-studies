var agora = new Date()
var diaSem = agora.getDay()

//diaSem = 7  teste para erro//

/*
dom = 0
seg = 1
ter = 2
qua = 3
qui = 4
sex = 5
sab = 6
 */

//console.log(diaSem)   tirando o número.../

switch (diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] Dia inválido!')
        break // último break opcional//
}
//se eu tirar os breaks e o dia for 5 ele vai executar sexta sábado e o erro//

//switch é bom para testar valores pontuais, if melhor em casos de intervalos//   