//estrtura básica de um laço(repetição)
//testa primeiro e executa o código depois
var c = 1
while (c <= 6) {
    console.log('Tudo bem?')
    c++ //significa c = c+1
}

//para melhorar posso fazer assim:
var c = 1
while (c <= 6) {
    console.log(`Passo ${c}`)
    c++
}


/* Mesma coisa dos códigos de cima, mas mais trabalhoso
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
*/


//estrutura de repetição com teste lógico no início
while (condição) {

}



//estrutura de repetição com teste lógico no final
do {

} while (condição)



var c = 1
do {
    console.log(`Passo ${c}`)
    c++
} while (c <= 6)