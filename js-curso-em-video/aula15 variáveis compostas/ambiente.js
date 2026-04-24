let num = [5, 8, 2, 9, 3]
num.push(1) //vai criar um elemento de valor 1
num.sort() //é um método(ação, operação) que vai colocar tudo em ordem
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`) //escreve-se 0 pois começa do índice 0  


//Cuidado! Dependendo da ordem, pode alterar as coisas, se eu colocasse esse push depois do sort, ele primeiro iria colocar em ordem e depois ia adicionar o 1, ficando [2, 3, 4, 5 , 8 , 9, 1]


/*A propriedade length é usada para obter o tamanho de uma string ou de um array.
•Quando aplicada a uma string, ela retorna o número de caracteres na string.
•Quando aplicada a um array, ela retorna o número de elementos no array.*/


//execute com o node para entender melhor(f8)








//não lembrava, mas ${} é chamado de template string