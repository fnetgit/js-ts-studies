let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if (pos == -1){
    console.log('o valor não foi encontrado!')
} else{
    console.log(`O valor 8 está na posição ${pos} `)
}



//num.indexOf(7) serve para buscar valores dentro de um vetor, é como perguntar "javascript, tem o valor 7 no vetor?"
//se eu tentar um valor que não tem, vai dar -1












//não lembrava, mas ${} é chamado de template string