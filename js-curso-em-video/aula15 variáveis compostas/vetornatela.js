let valores = [8, 1, 7, 4, 2, 9]

console.log(valores)
/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])  
*/  //maneira "burra"


/*
for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/


/* Vamos entender um pouco melhor algumas dúvidas:

1. Variável pos: A variável pos é um contador que controla a posição atual no array valores. Ela começa com o valor 0 e é incrementada a cada iteração do loop. No contexto do seu código, pos representa a posição do elemento atual no array.

2. Colchetes de Valores: Os colchetes [ ] são usados para acessar elementos dentro de um array. No seu exemplo, valores[pos] significa que estamos acessando o elemento na posição pos dentro do array valores. Ou seja, estamos pegando o valor correspondente à posição atual do contador pos. Por exemplo:
•Quando pos é 0, valores[pos] é igual a 8 (o primeiro elemento do array).
•Quando pos é 1, valores[pos] é igual a 1 (o segundo elemento do array).
•E assim por diante, até chegarmos ao último elemento */


//agora uma versão mais simplificada do código anterior

for (let pos in valores)/* lê-se para cada posição dentro de num; em num */ {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}